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
  ]

};
