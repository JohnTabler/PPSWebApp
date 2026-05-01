// =============================================================
// PPS DATA — Central Data Layer
// Plan Perfect Systems · v2.0
//
// HOW TO UPDATE DATA:
// - Edit this file only. All pages read from here automatically.
// - project:    project metadata shown in sidebar + topbar
// - user:       logged-in user shown in sidebar
// - ffeItems:   all FF&E records (drives 02_ffe_list.html)
// =============================================================

const PPS = {

  // ── PROJECT ────────────────────────────────────────────────
  project: {
    name:         "SDCCD 1450 Frazee",
    subtitle:     "5th Floor TI",
    moveDate:     "Sep 19, 2025",
    budget:       330000,
    plannedSpend: 309028,
    client:       "Molly Gardner",
    clientDept:   "Facilities Dept",
    mover:        "Alexander's",
    moverPOC:     "Steve"
  },

  // ── LOGGED-IN USER ─────────────────────────────────────────
  user: {
    name:    "Molly Gardner",
    initials:"MG",
    role:    "Project Manager"
  },

  // ── FF&E ITEMS ─────────────────────────────────────────────
  // Fields:
  //   id, name, desc, type, vendor, locationCurrent, locationNew,
  //   roomType, roomNo, procMethod, qtyNeeded, qtyExisting, qtyNew,
  //   unitPrice, extCost, processStatus, ffeStatus, condition,
  //   priority, swing, moveId
  //
  // processStatus values: "In Stock" | "Ordered" | "Review" | "Quoted" | "Delivered"
  // ffeStatus values:     "On Track" | "Issue" | "N/A"
  // priority values:      "High" | "Med" | "Low"

  ffeItems: [
    {
      id: "FFE-1",
      name: "Credenza",
      desc: "",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 5th",
      locationNew: "1450 Frazee · 5th",
      roomType: "Storage",
      roomNo: "568",
      procMethod: "OFOI",
      qtyNeeded: 1, qtyExisting: 1, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-1"
    },
    {
      id: "FFE-2",
      name: "Guest Chair",
      desc: "",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 2nd",
      locationNew: "1450 Frazee · 2nd",
      roomType: "Other",
      roomNo: "Open Office",
      procMethod: "OFOI",
      qtyNeeded: 3, qtyExisting: 3, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-2"
    },
    {
      id: "FFE-9",
      name: "24\" Dell Monitors",
      desc: "Server Room equipment",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 5th",
      locationNew: "1450 Frazee · 5th",
      roomType: "Server Room",
      roomNo: "553",
      procMethod: "OFOI",
      qtyNeeded: 7, qtyExisting: 7, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-9"
    },
    {
      id: "FFE-11",
      name: "Conference Chair",
      desc: "",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 5th",
      locationNew: "1450 Frazee · 5th",
      roomType: "Conf. Room",
      roomNo: "566",
      procMethod: "OFOI",
      qtyNeeded: 16, qtyExisting: 16, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-11"
    },
    {
      id: "FFE-12",
      name: "Conference Table",
      desc: "189W × 47.5D",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 2nd",
      locationNew: "1450 Frazee · 5th",
      roomType: "Conf. Room",
      roomNo: "Conf. Rm 501",
      procMethod: "OFOI",
      qtyNeeded: 1, qtyExisting: 1, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-12"
    },
    {
      id: "FFE-13",
      name: "Newline Touch Screen TV",
      desc: "97\" Diagonal · Wall mount · 120V",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 2nd",
      locationNew: "1450 Frazee · 5th",
      roomType: "Conf. Room",
      roomNo: "Conf. Rm 501",
      procMethod: "OFOI",
      qtyNeeded: 1, qtyExisting: 1, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-13"
    },
    {
      id: "FFE-18",
      name: "Round Table",
      desc: "41.5\" Diameter",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 2nd",
      locationNew: "1450 Frazee · 5th",
      roomType: "Break Room",
      roomNo: "559",
      procMethod: "OFOI",
      qtyNeeded: 3, qtyExisting: 3, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-18"
    },
    {
      id: "FFE-20",
      name: "Barstools",
      desc: "",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 2nd",
      locationNew: "1450 Frazee · 2nd",
      roomType: "Break Room",
      roomNo: "Break Room",
      procMethod: "OFOI",
      qtyNeeded: 6, qtyExisting: 6, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-20"
    },
    {
      id: "FFE-21",
      name: "Refrigerator",
      desc: "120V power required",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 2nd",
      locationNew: "1450 Frazee · 5th",
      roomType: "Break Room",
      roomNo: "559",
      procMethod: "OFOI",
      qtyNeeded: 1, qtyExisting: 1, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-21"
    },
    {
      id: "FFE-38",
      name: "Desk HAT",
      desc: "70W × 29D · 120V hard-wired",
      type: "Furniture",
      vendor: "SDCCD / Molly Gardner",
      locationCurrent: "1450 Frazee · 2nd",
      locationNew: "1450 Frazee · 5th",
      roomType: "Office",
      roomNo: "527/528 Steve/Ben",
      procMethod: "OFOI",
      qtyNeeded: 2, qtyExisting: 2, qtyNew: 0,
      unitPrice: 0, extCost: 0,
      processStatus: "In Stock",
      ffeStatus: "N/A",
      condition: "Used",
      priority: "Med",
      swing: true,
      moveId: "MM-38"
    }
  ],

  // ── MOVE RECORDS ───────────────────────────────────────────
  // status values: "On Track" | "Complete" | "Issue" | "—"

  moveRecords: [
    { id: "MM-1",  itemName: "Credenza",               userGroup: "Facilities Dept", fromFloor: "5th", fromRoom: "568 (Storage)",      toFloor: "5th", toRoom: "568 (Storage)",      roomType: "Storage",    moveDate: "Sep 19, 2025", mover: "Alexander's", status: "On Track", swing: true, ffeId: "FFE-1",  ssId: "SS-1",  poc: "Molly G.", notes: "" },
    { id: "MM-2",  itemName: "Guest Chair",             userGroup: "Facilities Dept", fromFloor: "2nd", fromRoom: "Open Office Area",   toFloor: "2nd", toRoom: "Open Office Area",   roomType: "Other",      moveDate: "Sep 19, 2025", mover: "Alexander's", status: "Complete", swing: true, ffeId: "FFE-2",  ssId: "SS-2",  poc: "Molly G.", notes: "Transfer to Warehouse" },
    { id: "MM-11", itemName: "Conference Chair",        userGroup: "Facilities Dept", fromFloor: "5th", fromRoom: "566 (Conf. Rm)",     toFloor: "5th", toRoom: "566 (Conf. Rm)",     roomType: "Conf. Room", moveDate: "Sep 19, 2025", mover: "Alexander's", status: "—",        swing: true, ffeId: "FFE-11", ssId: "SS-11", poc: "Molly G.", notes: "" },
    { id: "MM-12", itemName: "Conference Table",        userGroup: "Facilities Dept", fromFloor: "2nd", fromRoom: "Large Conf. Rm",     toFloor: "5th", toRoom: "Conf. Rm 501",       roomType: "Conf. Room", moveDate: "Sep 19, 2025", mover: "Alexander's", status: "—",        swing: true, ffeId: "FFE-12", ssId: "SS-12", poc: "Molly G.", notes: "" },
    { id: "MM-13", itemName: "Newline Touch Screen TV", userGroup: "Facilities Dept", fromFloor: "2nd", fromRoom: "Large Conf. Rm",     toFloor: "5th", toRoom: "Conf. Rm 501",       roomType: "Conf. Room", moveDate: "Sep 19, 2025", mover: "Alexander's", status: "—",        swing: true, ffeId: "FFE-13", ssId: "SS-13", poc: "Molly G.", notes: "" },
    { id: "MM-27", itemName: "Office Desk",             userGroup: "Facilities Dept", fromFloor: "2nd", fromRoom: "Office #1 Aurora",   toFloor: "5th", toRoom: "Office #531 Aurora",  roomType: "Office",     moveDate: "Sep 19, 2025", mover: "Alexander's", status: "—",        swing: true, ffeId: "FFE-27", ssId: "SS-27", poc: "Molly G.", notes: "" },
    { id: "MM-51", itemName: "Conference Table",        userGroup: "Facilities Dept", fromFloor: "2nd", fromRoom: "Dr Peterson Office", toFloor: "3rd", toRoom: "3375 Camino Del Rio S", roomType: "Office",   moveDate: "Sep 19, 2025", mover: "Alexander's", status: "—",        swing: true, ffeId: "FFE-51", ssId: "SS-51", poc: "Molly G.", notes: "Off-site destination" }
  ],

  // ── SCHEDULE ACTIVITIES ─────────────────────────────────────
  // startDay: days from Aug 19 (day 0). Timeline = 32 days total.
  // type values: "Move" | "FF&E" | "Swing" | "Other"

  scheduleActivities: [
    { id: "SA-1",  name: "Mover Packing Material & Labels",     type: "Move",  startDay: 0,  durationDays: 1,  pctComplete: 0  },
    { id: "SA-2",  name: "Confirm Move Order / Sequence",       type: "Move",  startDay: 0,  durationDays: 1,  pctComplete: 50 },
    { id: "SA-3",  name: "Swing Space Liquidation Sale",        type: "Swing", startDay: 13, durationDays: 1,  pctComplete: 0  },
    { id: "SA-4",  name: "Verkpleys Order Delivered",           type: "FF&E",  startDay: 13, durationDays: 1,  pctComplete: 0  },
    { id: "SA-5",  name: "Verkpleys Move Swing Space Furn.",    type: "Move",  startDay: 13, durationDays: 1,  pctComplete: 0  },
    { id: "SA-6",  name: "Verkpleys New Order Move",            type: "Move",  startDay: 13, durationDays: 1,  pctComplete: 0  },
    { id: "SA-7",  name: "Prime Electrical Clearance",          type: "Other", startDay: 13, durationDays: 18, pctComplete: 0  },
    { id: "SA-8",  name: "Swing Space Staff Pack",              type: "Move",  startDay: 15, durationDays: 4,  pctComplete: 0  },
    { id: "SA-9",  name: "New Printers Delivery & Install",     type: "FF&E",  startDay: 16, durationDays: 1,  pctComplete: 0  },
    { id: "SA-10", name: "Seismic / Earthquake Retrofit",       type: "Other", startDay: 16, durationDays: 1,  pctComplete: 0  },
    { id: "SA-11", name: "Fire Safety Requirements",            type: "Other", startDay: 16, durationDays: 1,  pctComplete: 0  },
    { id: "SA-12", name: "Fire Extinguisher Locations",         type: "Other", startDay: 16, durationDays: 1,  pctComplete: 0  },
    { id: "SA-13", name: "Fire Extinguisher Expiration Review", type: "Other", startDay: 16, durationDays: 1,  pctComplete: 0  }
  ],

  // ── FINANCIALS ─────────────────────────────────────────────
  // color: dot indicator hex. planned/actual in dollars.

  financials: [
    { label: "FF&E (Non Ed-Tech/IT)", color: "#4f9cf9", planned: 225209, actual: 0 },
    { label: "Other",                 color: "#38d9a9", planned: 83819,  actual: 0 },
    { label: "IT",                    color: "#6b7591", planned: 0,      actual: 0 },
    { label: "AV/Ed-Tech",            color: "#6b7591", planned: 0,      actual: 0 },
    { label: "Move Management",       color: "#6b7591", planned: 0,      actual: 0 },
    { label: "Swing Space",           color: "#6b7591", planned: 0,      actual: 0 },
    { label: "Tenant Improvement",    color: "#ffa94d", planned: 0,      actual: 0 }
  ],

  // ── SWING SPACE ITEMS ──────────────────────────────────────
  // Fields: id, name, desc, location, roomNo, roomType,
  //   assignedTo, fromDate, toDate, status, ffeId, notes
  // status values: "Active" | "Vacated" | "Pending" | "Issue"

  swingSpaceItems: [
    // Add swing space records here
    // Example:
    // { id: "SS-1", name: "Credenza", desc: "", location: "1450 Frazee · 3rd",
    //   roomNo: "301", roomType: "Storage", assignedTo: "Facilities Dept",
    //   fromDate: "Aug 19, 2025", toDate: "Sep 19, 2025",
    //   status: "Active", ffeId: "FFE-1", notes: "" }
  ],

  // ── TENANT IMPROVEMENT ITEMS ───────────────────────────────
  // Fields: id, name, desc, scope, location, roomNo, contractor,
  //   plannedCost, actualCost, startDate, endDate, status, notes
  // status values: "Not Started" | "In Progress" | "Complete" | "Issue"

  tenantImprovementItems: [
    // Add TI records here
    // Example:
    // { id: "TI-1", name: "Electrical Upgrade", desc: "120V circuits added",
    //   scope: "Electrical", location: "1450 Frazee · 5th", roomNo: "553",
    //   contractor: "Prime Electric", plannedCost: 12000, actualCost: 0,
    //   startDate: "Aug 19, 2025", endDate: "Sep 10, 2025",
    //   status: "In Progress", notes: "Pending clearance" }
  ],

  // ── ISSUES ────────────────────────────────────────────────
  // Fields: id, title, description, linkedId, linkedType,
  //   severity, status, openedDate, assignedTo, resolvedDate, notes
  // severity values: "High" | "Med" | "Low"
  // status values:   "Open" | "In Progress" | "Resolved" | "Closed"
  // linkedType values: "FFE" | "Move" | "Schedule" | "TI" | "General"

  issues: [
    // Add issue records here
    // Example:
    // { id: "ISS-1", title: "Prime Electrical clearance delayed",
    //   description: "Electrical contractor has not received permit sign-off.",
    //   linkedId: "SA-7", linkedType: "Schedule",
    //   severity: "High", status: "Open",
    //   openedDate: "Aug 25, 2025", assignedTo: "Molly G.", resolvedDate: "", notes: "" }
  ],

  // ── PUNCH LIST ────────────────────────────────────────────
  // Fields: id, task, description, linkedId, linkedType,
  //   dueDate, assignedTo, pctComplete, status, notes
  // status values: "Not Started" | "In Progress" | "Complete" | "Blocked"

  punchListItems: [
    // Add punch list tasks here
    // Example:
    // { id: "PL-1", task: "Confirm all TVs wall-mounted",
    //   description: "Verify Newline screens in Conf. Rm 501 are secured.",
    //   linkedId: "FFE-13", linkedType: "FFE",
    //   dueDate: "Sep 19, 2025", assignedTo: "Molly G.",
    //   pctComplete: 0, status: "Not Started", notes: "" }
  ],

  // ── USERS ────────────────────────────────────────────────
  // Fields: id, name, initials, email, role, projects,
  //   status, lastActive
  // role values:   "Admin" | "Project Manager" | "Viewer"
  // status values: "Active" | "Inactive" | "Pending"

  users: [
    { id: "USR-1", name: "Molly Gardner",  initials: "MG", email: "mgardner@sdccd.edu",
      role: "Project Manager", projects: ["SDCCD 1450 Frazee"],
      status: "Active", lastActive: "Today" },
    { id: "USR-2", name: "Admin User",     initials: "AU", email: "admin@pps.app",
      role: "Admin", projects: ["All Projects"],
      status: "Active", lastActive: "Today" }
  ]

};
