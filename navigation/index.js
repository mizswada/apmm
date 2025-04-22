export default [
  {
    child: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "ic:outline-dashboard",
        child: [],
      },
    ],
  },
  {
    header: "Pengurusan Kapal dan Bot",
    description: "Maklumat Kapal dan Bot",
    child: [
      {
        title: "Kapal",
        path: "/kapal",
      },
      {
        title: "Operational & Technical",
        child: [
          {
            title: "Operational & Technical",
            path: "/auth/login-v1",
          },
          {
            title: "Technical Information",
            path: "/auth/login-v2",
          }
        ],
      },
        
    ],
  },
 
];
