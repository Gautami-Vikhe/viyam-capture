import { all_routes } from "../../routes/all_routes";

const route = all_routes;
export const SidebarData = [
  {
    tittle: "MAIN",
    submenuItems: [
      {
        label: "Dashboard",
        link: route.dashboard,
        submenu: false,
        icon: "layout-board",
        submenuItems: [],
      },
      {
        label: "E-Superbill",
        link: route.eSuperbillList,
        submenu: false,
        icon: "file-invoice",
        submenuItems: [],
      },
      {
        label: "Provider",
        link: route.allDoctorsList,
        submenu: false,
        icon: "stethoscope",
        submenuItems: [],
      },
      {
        label: "Patients",
        link: route.allPatientsList,
        submenu: false,
        icon: "users",
        submenuItems: [],
      },
      {
        label: "Settings",
        link: "#",
        submenu: true,
        icon: "settings",
        submenuItems: [
          {
            label: "Facility",
            link: route.facilityList,
            submenu: false,
            submenuItems: [],
          },
          {
            label: "User",
            link: route.userList,
            submenu: false,
            submenuItems: [],
          },
          {
            label: "Role",
            link: route.roleList,
            submenu: false,
            submenuItems: [],
          },
            {
            label: "Permission",
            link: route.permissionList,
            submenu: false,
            submenuItems: [],
          },
        ],
      },
    ],
  },
];