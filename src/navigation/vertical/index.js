import { Mail, Home, Airplay, Circle, Package, List, Plus, BookOpen, Users, MessageCircle } from "react-feather";

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
      {
        id: "yourCourses",
        title: " دوره های شما ",
        navLink: "/course-management/list/your-courses",
      },
      {
        id: "courseSetting",
        title: "تنظیمات دوره ها",
        navLink: "/course-management/setting",
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
  {
    id: "commentManagement",
    title: "مدیریت کامنت ها",
    icon: <MessageCircle size={20} />,
    children: [
      {
        id: "commentManagementList",
        title: " لیست کامنت ها ",
        navLink: "/comment-management/list",
      },
    ],
  },
];
