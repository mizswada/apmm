export default [
  // {
  //   child: [
  //     {
  //       title: "Dashboard",
  //       path: "/dashboard",
  //       icon: "ic:outline-dashboard",
  //       child: [],
  //     },
  //   ],
  // },
  {
    header: "HQ view",
    description: "HQ view",
    child: [
      {
        title: "Dashboard",
        path: "/dashboard-hq",
        icon: "ic:outline-dashboard",
        child: [],
      },
      {
        "title": "Asset Management",
        "icon": "ix:report-general",
        "child": [
          {
            title: "Job Card",
            path: "/kapal",
            icon: "lineicons:ship-1",
          },
          {
            title: "Ship",
            path: "/kapal",
            icon: "lineicons:ship-1",
          },
          {        
            title: "Boat",
            path: "/bot",
            icon: "tabler:speedboat",
          },
          {
            title: "On Spares List (OSL)",
            path: "/komponen-ship",
            icon: "material-symbols:settings-input-component-outline"
          },
          {
            title: "Krew",
            path: "/krew",
            icon: "tabler:users-group"
          },
          {
            title: "Planning Maintenances System (PMS)",
            path: "/baik-pulih",
            icon: "fluent:wrench-screwdriver-32-regular"
          },
          {
            title: "Modification",
            path: "/ubah-suai",
            icon: "oui:app-upgrade-assistant"
          },
        ]
      },
      {
        "title": "Vendor management",
        "icon": "ix:report-general",
        "child": [
          {
            title: "Vendor",
            path: "/kapal",
            icon: "lineicons:ship-1",
          },
          {        
            title: "E-invoice",
            path: "/bot",
            icon: "tabler:speedboat",
          },
        ]
      },
      {
        "title": "Training management",
        "icon": "ix:report-general",
        "child": [
          {
            title: "Training",
            path: "/kapal",
            icon: "lineicons:ship-1",
          },
          {        
            title: "Request Training",
            path: "/bot",
            icon: "tabler:speedboat",
          },
        ]
      },
      
      {
        "title": "Report",
        "icon": "ix:report-general",
        "child": [
          {
            "title": "OA",
            "path": "/report/oa"
          },
          {
            "title": "Crew",
            "path": "/report/krew"
          },
          {
            "title": "ROVA",
            "path": "/report/rova"
          }
        ]
      },
    ],
  },
  {
    header: "Negeri view",
    description: "Negeri view",
    child: [
      {
        title: "Dashboard",
        path: "/dashboard-negeri",
        icon: "ic:outline-dashboard",
        child: [],
      },
      {
        title: "Job card",
        path: "/kapal",
      },
    ],
  },
  {
    header: "Crew view",
    description: "Crew view",
    child: [
      {
        title: "Dashboard",
        path: "/dashboard-krew",
        icon: "ic:outline-dashboard",
        child: [],
      },
      {
        title: "Job card",
        path: "/kapal",
      },
    ],
  },
 
];
