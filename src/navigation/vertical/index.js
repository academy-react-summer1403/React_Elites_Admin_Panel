import { Mail, Home, Airplay, Circle, Package, List, Plus } from "react-feather";

export default [
  {
    id: "dashboard",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "courseManagement",
    title: " مدیریت دوره ",
    icon: <Package size={20} />,
    navLink: "/second-page",
    children: [
      {
        id: "courseManagementList",
        title: "لیست دوره ها",
        navLink: "/apps/invoice/list",
      },
      {
        id: "createNewCourse",
        title: " دوره جدید ",
        navLink: "/apps/invoice/list",
      },
    ],
  },
  {
    id: "blogsManagement",
    title: " مدیریت بلاگ ",
    icon: <Airplay size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "blogsManagementList",
        title: " لیست بلاگ ها ",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
      {
        id: "createNewBlog",
        title: " بلاگ جدید ",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
    ],
  },
  {
    id: "userManagement",
    title: " مدیریت کاربر ها ",
    icon: <Mail size={20} />,
    navLink: "/second-page",
    children: [
      {
        id: "usersManagementList",
        title: " لیست کاربر ها ",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
    ],
  },
];
