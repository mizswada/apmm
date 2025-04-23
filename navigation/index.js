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
        title: "Component",
        path: "/komponen",
        icon: "material-symbols:settings-input-component-outline"
      },
      {
        title: "Crew",
        path: "/krew",
        icon: "tabler:users-group"
      },
      {
        title: "Maintanance",
        path: "/baik-pulih",
        icon: "fluent:wrench-screwdriver-32-regular"
      },
      {
        title: "Modification",
        path: "/ubah-suai",
        icon: "oui:app-upgrade-assistant"
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
        title: "Kapal",
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
        title: "Kapal",
        path: "/kapal",
      },
    ],
  },
 
];
