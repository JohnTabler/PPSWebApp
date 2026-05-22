// =============================================================
// PPS MODAL FORMS — JavaScript
//
// FIND & REPLACE ANCHOR in index.html:
// Find the closing </script> tag of your main inline script block
// and paste this entire block just BEFORE that </script> tag.
// =============================================================


// ── Tab Switching ─────────────────────────────────────────────
function switchTab(modalId, tabIndex) {
  const modal = document.getElementById(modalId);
  const btns   = modal.querySelectorAll('.pps-tab-btn');
  const panels = modal.querySelectorAll('.pps-tab-panel');
  btns.forEach((b, i)   => b.classList.toggle('active', i === tabIndex));
  panels.forEach((p, i) => p.classList.toggle('active', i === tabIndex));
}


// ── Open / Close Modals ───────────────────────────────────────
function openModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;
  overlay.classList.add('open');
  // Reset to first tab
  switchTab(modalId, 0);
  // Populate auto-ID for the relevant form
  const formKey = modalId.replace('modal-', '');
  populateAutoId(formKey);
}

function closeModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (overlay) overlay.classList.remove('open');
}

// Close on overlay click (outside modal box)
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('pps-modal-overlay')) {
    e.target.classList.remove('open');
  }
});


// ── Auto-ID Generator ─────────────────────────────────────────
// Reads ACTIVE data arrays and derives the next sequential ID.
const ID_CONFIG = {
  ffe:       { array: () => ACTIVE.ffeItems,               prefix: 'FFE' },
  issues:    { array: () => ACTIVE.issues,                 prefix: 'ISS' },
  move:      { array: () => ACTIVE.moveRecords,            prefix: 'MM'  },
  swing:     { array: () => ACTIVE.swingSpaceItems,        prefix: 'SS'  },
  ti:        { array: () => ACTIVE.tenantImprovementItems, prefix: 'TI'  },
  schedule:  { array: () => ACTIVE.scheduleActivities,     prefix: 'SA'  },
  budget:    { array: () => ACTIVE.budgetItems,            prefix: 'BUD' },
  punchlist: { array: () => ACTIVE.punchListItems,         prefix: 'PL'  },
};

function nextId(arr, prefix) {
  const nums = arr
    .map(r => parseInt((r.id || '').replace(prefix + '-', '')))
    .filter(n => !isNaN(n));
  return prefix + '-' + (nums.length ? Math.max(...nums) + 1 : 1);
}

function populateAutoId(formKey) {
  const cfg = ID_CONFIG[formKey];
  if (!cfg) return;
  const idField = document.getElementById(formKey + '-id');
  if (idField) idField.value = nextId(cfg.array(), cfg.prefix);
}


// ── GitHub API Write-Back ─────────────────────────────────────
async function githubWriteBack(newRecord, arrayKey) {
  const { pat, owner, repo, branch, path } = PPS_CONFIG;
  const apiBase = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers = {
    'Authorization': `token ${pat}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  };

  // 1. GET current file
  const getRes = await fetch(apiBase, { headers });
  if (!getRes.ok) throw new Error(`GitHub GET failed: ${getRes.status} ${getRes.statusText}`);
  const fileData = await getRes.json();
  const sha = fileData.sha;
  const currentContent = atob(fileData.content.replace(/\n/g, ''));

  // 2. Find the injection point — the closing `]` of the target array.
  //    Each array in pps-data.js ends with a line that is just `  ],`
  //    We locate the array by its key name declaration, then find its closing `],`
  const arrayDeclaration = `${arrayKey}:`;
  const declIndex = currentContent.indexOf(arrayDeclaration);
  if (declIndex === -1) throw new Error(`Array key "${arrayKey}" not found in pps-data.js`);

  // Find the closing `],` after the declaration
  const closingPattern = '  ],';
  const insertionIndex = currentContent.indexOf(closingPattern, declIndex);
  if (insertionIndex === -1) throw new Error(`Could not find closing ], for "${arrayKey}"`);

  // 3. Serialize the new record as a compact JS object literal
  const recordStr = '    ' + jsObjectLiteral(newRecord);

  // 4. Determine whether the array is empty (no existing items)
  //    Slice from declaration to closing to check
  const arrayBody = currentContent.slice(declIndex, insertionIndex);
  const isEmpty = !arrayBody.includes('{');
  const separator = isEmpty ? '' : ',\n';

  // 5. Build updated content
  const updatedContent =
    currentContent.slice(0, insertionIndex) +
    separator + recordStr + '\n' +
    currentContent.slice(insertionIndex);

  // 6. PUT updated file
  const encoded = btoa(unescape(encodeURIComponent(updatedContent)));
  const putRes = await fetch(apiBase, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      message: `Add ${newRecord.id} to ${arrayKey}`,
      content: encoded,
      sha,
      branch
    })
  });
  if (!putRes.ok) {
    const errBody = await putRes.json().catch(() => ({}));
    throw new Error(`GitHub PUT failed: ${putRes.status} — ${errBody.message || putRes.statusText}`);
  }

  return newRecord.id;
}

// Converts a JS object to a compact single-line object literal string
// (matches the style already used in pps-data.js)
function jsObjectLiteral(obj) {
  const pairs = Object.entries(obj).map(([k, v]) => {
    if (typeof v === 'string') {
      // Escape any double-quotes inside the string
      const escaped = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return `${k}:"${escaped}"`;
    }
    if (typeof v === 'boolean') return `${k}:${v}`;
    if (v === null || v === undefined) return `${k}:""`;
    return `${k}:${v}`;
  });
  return '{ ' + pairs.join(', ') + ' }';
}


// ── Status Helpers ────────────────────────────────────────────
function setStatus(key, msg, type) {
  // type: 'saving' | 'success' | 'error' | ''
  const el = document.getElementById(key + '-status-msg') ||
             document.getElementById(key + '-status');
  if (!el) return;
  el.textContent = msg;
  el.className = 'pps-modal-status ' + (type || '');
}
function setSaveBtn(key, disabled) {
  const btn = document.getElementById(key + '-save-btn');
  if (btn) btn.disabled = disabled;
}


// ── Form Submission Router ────────────────────────────────────
async function submitForm(formKey) {
  let record, arrayKey, modalId, requiredFields;

  switch (formKey) {
    case 'ffe':
      requiredFields = [['ffe-name', 'Item Name']];
      record = buildFfeRecord();
      arrayKey = 'ffeItems';
      modalId = 'modal-ffe';
      break;
    case 'issues':
      requiredFields = [['issues-itemName', 'Item Name'], ['issues-description', 'Description']];
      record = buildIssuesRecord();
      arrayKey = 'issues';
      modalId = 'modal-issues';
      break;
    case 'move':
      requiredFields = [['move-itemName', 'Item Name']];
      record = buildMoveRecord();
      arrayKey = 'moveRecords';
      modalId = 'modal-move';
      break;
    case 'swing':
      requiredFields = [['swing-userGroup', 'User / User Group']];
      record = buildSwingRecord();
      arrayKey = 'swingSpaceItems';
      modalId = 'modal-swing';
      break;
    case 'ti':
      requiredFields = [['ti-userGroup', 'User / User Group'], ['ti-facilityNeeds', 'Facility / Space Needs']];
      record = buildTiRecord();
      arrayKey = 'tenantImprovementItems';
      modalId = 'modal-ti';
      break;
    case 'schedule':
      requiredFields = [['schedule-name', 'Activity Name']];
      record = buildScheduleRecord();
      arrayKey = 'scheduleActivities';
      modalId = 'modal-schedule';
      break;
    case 'budget':
      requiredFields = [['budget-item', 'Item']];
      record = buildBudgetRecord();
      arrayKey = 'budgetItems';
      modalId = 'modal-budget';
      break;
    case 'punchlist':
      requiredFields = [['pl-itemName', 'Item Name'], ['pl-remainingTasks', 'Remaining Tasks']];
      record = buildPunchlistRecord();
      arrayKey = 'punchListItems';
      modalId = 'modal-punchlist';
      break;
    default:
      return;
  }

  // Validate required fields
  for (const [id, label] of requiredFields) {
    const el = document.getElementById(id);
    if (!el || !el.value.trim()) {
      setStatus(formKey === 'ffe' ? 'ffe' : formKey.replace('modal-',''), `"${label}" is required.`, 'error');
      document.getElementById(id)?.focus();
      return;
    }
  }

  const statusKey = formKey === 'ffe' ? 'ffe' : formKey;
  setStatus(statusKey, 'Saving…', 'saving');
  setSaveBtn(statusKey, true);

  try {
    // Append to ACTIVE in-memory array so page re-renders immediately
    const cfg = ID_CONFIG[formKey];
    if (cfg) cfg.array().push(record);

    // Write to GitHub
    await githubWriteBack(record, arrayKey);

    setStatus(statusKey, `✓ Saved as ${record.id}`, 'success');
    setSaveBtn(statusKey, false);

    // Re-render current page
    const currentPage = location.hash.replace('#', '') || 'dashboard';
    if (typeof navigate === 'function') navigate(currentPage);

    // Auto-close after short delay
    setTimeout(() => closeModal(modalId), 1200);

  } catch (err) {
    console.error(err);
    // Roll back in-memory push on failure
    const cfg = ID_CONFIG[formKey];
    if (cfg) { const arr = cfg.array(); arr.splice(arr.length - 1, 1); }
    setStatus(statusKey, '✗ ' + err.message, 'error');
    setSaveBtn(statusKey, false);
  }
}


// ── Record Builders ───────────────────────────────────────────
function v(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}
function n(id) { return parseFloat(v(id)) || 0; }
function b(id) { return v(id) === 'true'; }

function buildFfeRecord() {
  return {
    id: v('ffe-id'), name: v('ffe-name'), desc: v('ffe-desc'),
    type: v('ffe-type'), vendor: v('ffe-vendor'), vendorPOC: v('ffe-vendorPOC'),
    userGroup: v('ffe-userGroup'), actionOwner: v('ffe-actionOwner'),
    manufacturer: v('ffe-manufacturer'), productLink: v('ffe-productLink'),
    modelNo: v('ffe-modelNo'), equipNo: v('ffe-equipNo'), skuCode: v('ffe-skuCode'),
    assetTag: v('ffe-assetTag'), dimensions: v('ffe-dimensions'), weight: v('ffe-weight'),
    powerType: v('ffe-powerType'), dataType: v('ffe-dataType'), mountingType: v('ffe-mountingType'),
    curBuilding: v('ffe-curBuilding'), curFloor: v('ffe-curFloor'),
    curRoomType: v('ffe-curRoomType'), curRoomNo: v('ffe-curRoomNo'),
    newBuilding: v('ffe-newBuilding'), newFloor: v('ffe-newFloor'),
    newRoomType: v('ffe-newRoomType'), newRoomNo: v('ffe-newRoomNo'),
    procMethod: v('ffe-procMethod'), fundingSource: v('ffe-fundingSource'),
    qtyNeeded: n('ffe-qtyNeeded'), qtyExisting: n('ffe-qtyExisting'), qtyNew: n('ffe-qtyNew'),
    unitPrice: n('ffe-unitPrice'), uom: v('ffe-uom'),
    extCost: n('ffe-qtyNew') * n('ffe-unitPrice'),
    eta: v('ffe-eta'), processStatus: v('ffe-processStatus'), ffeStatus: v('ffe-ffeStatus'),
    condition: v('ffe-condition'), warranty: v('ffe-warranty'), warrantyType: v('ffe-warrantyType'),
    priority: v('ffe-priority'), punchListItem: b('ffe-punchListItem'), swing: b('ffe-swing'),
    moveId: v('ffe-moveId'), ssId: v('ffe-ssId'), relatedDocs: '', notes: v('ffe-notes')
  };
}

function buildIssuesRecord() {
  return {
    id: v('issues-id'), itemName: v('issues-itemName'), productType: v('issues-productType'),
    issueType: v('issues-issueType'), status: v('issues-status'),
    noItemsIssue: n('issues-noItemsIssue'), noItemsResolved: n('issues-noItemsResolved'),
    description: v('issues-description'), resolution: v('issues-resolution'),
    vendor: v('issues-vendor'), vendorPOC: v('issues-vendorPOC'),
    manufacturer: v('issues-manufacturer'), productLink: v('issues-productLink'),
    modelNo: v('issues-modelNo'), equipNo: v('issues-equipNo'), skuCode: v('issues-skuCode'),
    dimensions: v('issues-dimensions'),
    building: v('issues-building'), floor: v('issues-floor'),
    roomType: v('issues-roomType'), roomNo: v('issues-roomNo'),
    procMethod: v('issues-procMethod'), warranty: v('issues-warranty'),
    warrantyType: v('issues-warrantyType'), priority: v('issues-priority'),
    ffeId: v('issues-ffeId'), moveId: v('issues-moveId'), ssId: v('issues-ssId'),
    notes: v('issues-notes')
  };
}

function buildMoveRecord() {
  return {
    id: v('move-id'), itemName: v('move-itemName'), userGroup: v('move-userGroup'),
    fromBuilding: v('move-fromBuilding'), fromFloor: v('move-fromFloor'),
    fromRoom: v('move-fromRoom'), fromRoomType: v('move-fromRoomType'),
    toBuilding: v('move-toBuilding'), toFloor: v('move-toFloor'),
    toRoom: v('move-toRoom'), toRoomType: v('move-toRoomType'),
    scheduledMoveDate: v('move-scheduledMoveDate'), dateMoved: v('move-dateMoved'),
    noOccupants: v('move-noOccupants'), noBoxes: v('move-noBoxes'), boxTags: v('move-boxTags'),
    mover: v('move-mover'), moverPOC: v('move-moverPOC'),
    status: v('move-status'), moveCost: n('move-moveCost'),
    swing: b('move-swing'), ffeId: v('move-ffeId'), ssId: v('move-ssId'),
    poc: v('move-poc'), notes: v('move-notes')
  };
}

function buildSwingRecord() {
  return {
    id: v('swing-id'), userGroup: v('swing-userGroup'), phase: v('swing-phase'),
    noOccupants: v('swing-noOccupants'), ffeNeeds: v('swing-ffeNeeds'),
    techNeeds: v('swing-techNeeds'), facilityNeeds: v('swing-facilityNeeds'),
    noBoxes: v('swing-noBoxes'), boxTags: v('swing-boxTags'),
    curBuilding: v('swing-curBuilding'), curFloor: v('swing-curFloor'),
    curRoomType: v('swing-curRoomType'), curRoomNo: v('swing-curRoomNo'),
    scheduledMoveToSwing: v('swing-scheduledMoveToSwing'), dateMoveToSwing: v('swing-dateMoveToSwing'),
    swingBuilding: v('swing-swingBuilding'), swingFloor: v('swing-swingFloor'),
    swingRoomType: v('swing-swingRoomType'), swingRoomNo: v('swing-swingRoomNo'),
    scheduledMoveToNew: v('swing-scheduledMoveToNew'), dateMoveToNew: v('swing-dateMoveToNew'),
    newBuilding: v('swing-newBuilding'), newFloor: v('swing-newFloor'),
    newRoomType: v('swing-newRoomType'), newRoomNo: v('swing-newRoomNo'),
    status: v('swing-status'), swingCost: n('swing-swingCost'),
    punchListItem: b('swing-punchListItem'),
    ffeId: v('swing-ffeId'), moveId: v('swing-moveId'),
    poc: v('swing-poc'), notes: v('swing-notes')
  };
}

function buildTiRecord() {
  return {
    id: v('ti-id'), userGroup: v('ti-userGroup'), facilityNeeds: v('ti-facilityNeeds'),
    trade: v('ti-trade'), building: v('ti-building'), floor: v('ti-floor'),
    roomType: v('ti-roomType'), roomNo: v('ti-roomNo'),
    status: v('ti-status'), actionOwner: v('ti-actionOwner'), priority: v('ti-priority'),
    vendor: v('ti-vendor'), vendorPOC: v('ti-vendorPOC'), clientPOC: v('ti-clientPOC'),
    quotedCost: n('ti-quotedCost'), notes: v('ti-notes')
  };
}

function buildScheduleRecord() {
  return {
    id: v('schedule-id'), name: v('schedule-name'), type: v('schedule-type'),
    plannedStart: v('schedule-plannedStart'), plannedFinish: v('schedule-plannedFinish'),
    actualStart: v('schedule-actualStart'), actualFinish: v('schedule-actualFinish'),
    startDay: n('schedule-startDay'), durationDays: n('schedule-durationDays'),
    variance: n('schedule-variance'), pctComplete: n('schedule-pctComplete')
  };
}

function buildBudgetRecord() {
  return {
    id: v('budget-id'), vendor: v('budget-vendor'), costArea: v('budget-costArea'),
    item: v('budget-item'), quoteAmount: n('budget-quoteAmount'),
    actualSpend: n('budget-actualSpend'), comments: v('budget-comments')
  };
}

function buildPunchlistRecord() {
  return {
    id: v('pl-id'), itemName: v('pl-itemName'), itemDesc: v('pl-itemDesc'),
    productType: v('pl-productType'), remainingTasks: v('pl-remainingTasks'),
    status: v('pl-status'), vendor: v('pl-vendor'), vendorPOC: v('pl-vendorPOC'),
    manufacturer: v('pl-manufacturer'), productLink: v('pl-productLink'),
    modelNo: v('pl-modelNo'), equipNo: v('pl-equipNo'), skuCode: v('pl-skuCode'),
    assetTag: v('pl-assetTag'), dimensions: v('pl-dimensions'), weight: v('pl-weight'),
    powerType: v('pl-powerType'), dataType: v('pl-dataType'), mountingType: v('pl-mountingType'),
    building: v('pl-building'), floor: v('pl-floor'), roomType: v('pl-roomType'), roomNo: v('pl-roomNo'),
    procMethod: v('pl-procMethod'), actionOwner: v('pl-actionOwner'),
    priority: v('pl-priority'), notes: v('pl-notes')
  };
}


// ── Wire Add Buttons ──────────────────────────────────────────
// Call this AFTER your existing wireFilters() / page init code.
// Maps each page's Add button to the correct modal.
// Adjust the button selectors below to match whatever IDs or
// classes your existing Add buttons use in index.html.
//
// Pattern: find the button, replace its onclick.
//
function wireAddButtons() {
  const map = {
    'btn-add-ffe':       () => openModal('modal-ffe'),
    'btn-add-issue':     () => openModal('modal-issues'),
    'btn-add-move':      () => openModal('modal-move'),
    'btn-add-swing':     () => openModal('modal-swing'),
    'btn-add-ti':        () => openModal('modal-ti'),
    'btn-add-schedule':  () => openModal('modal-schedule'),
    'btn-add-budget':    () => openModal('modal-budget'),
    'btn-add-punchlist': () => openModal('modal-punchlist'),
  };
  Object.entries(map).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.onclick = fn;
  });
}
wireAddButtons();
