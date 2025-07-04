// import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { role } from "../lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/image2/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/image2/teacher.png",
        label: "Teachers",
        href: "/dashboard/Menu_list/teachers",
        visible: ["admin", "teachers"],
      },
      {
        icon: "/image2/student.png",
        label: "Students",
        href: "/dashboard/Menu_list/student",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/image2/parents.png",
        label: "Parents",
        href: "/dashboard/Menu_list/parent",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/image2/medical-result.png",
        label: "Subjects",
        href: "/dashboard/Menu_list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/image2/class.png",
        label: "Classes",
        href: "/dashboard/Menu_list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/image2/presentation.png",
        label: "Lessons",
        href: "/dashboard/Menu_list/lesson",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/image2/exam.png",
        label: "Exams",
        href: "/dashboard/Menu_list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/image2/assignment.png",
        label: "Assignments",
        href: "/dashboard/Menu_list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/image2/result.png",
        label: "Results",
        href: "/dashboard/Menu_list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/image2/attendance.png",
        label: "Attendance",
        href: "/dashboard/Menu_list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/image2/calendar.png",
        label: "Events",
        href: "/dashboard/Menu_list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/image2/message.png",
        label: "Messages",
        href: "/dashboard/Menu_list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/image2/announcement.png",
        label: "Announcements",
        href: "/dashboard/Menu_list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/image2/user.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/image2/settings.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/image2/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = async () => {
//   const user = await currentUser();
//   const role = user?.publicMetadata.role as string;
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>

          {i.items.map((item) => {
            if(item.visible.includes(role)){
              return (
                    <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              )
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;