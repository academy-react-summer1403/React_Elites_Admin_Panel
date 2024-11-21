import { Mail, Home, Airplay, Circle, Package, List, Plus, BookOpen, Users } from "react-feather";

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
    children: [
      {
        id: "courseManagementList",
        title: "لیست دوره ها",
        navLink: "/course-management/list",
      },
      {
        id: "createNewCourse",
        title: " دوره جدید ",
        navLink: "/course-management/list/add-course",
      },
    ],
  },
  {
    id: "blogsManagement",
    title: " مدیریت بلاگ ",
    icon: <BookOpen size={20} />,
    children: [
      {
        id: "blogsManagementList",
        title: " لیست بلاگ ها ",
        navLink: "/blog-management/list",
      },
      {
        id: "createNewBlog",
        title: " بلاگ جدید ",
        navLink: "/blog-management/list/add-blog",
      },
    ],
  },
  {
    id: "userManagement",
    title: " مدیریت کاربر ها ",
    icon: <Users size={20} />,
    children: [
      {
        id: "usersManagementList",
        title: " لیست کاربر ها ",
        navLink: "/user-management/list",
      },
    ],
  },
];
