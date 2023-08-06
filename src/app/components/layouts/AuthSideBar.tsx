"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TaskIcon } from "../../../../assets/icons/taskIcon";
import { ClientIcon } from "../../../../assets/icons/clientIcon";
import Image from "next/image";


export const AuthSidebar = () => {
  const pathname = usePathname();

  const tabs = [
    {
      name: "Workspace",
      href: "/workspace",
      icon: <TaskIcon className="" color="black" width={40} height={24} />,
    },
    {
      name: "Client",
      href: "/client",
      icon: <ClientIcon className="" color="black" width={40} height={30} />,
    },
    {
      name: "Schedule Appointment",
      href: "/schedule-appointment",
      icon: <ClientIcon className="" color="black" width={40} height={30} />,
    },
    {
      name: "Payment",
      href: "/payment",
      icon: <ClientIcon className="" color="black" width={40} height={30} />,
    },
    {
      name: "Task",
      href: "/task",
      icon: <ClientIcon className="" color="black" width={40} height={30} />,
    },
    {
      name: "Message",
      href: "/message",
      icon: <ClientIcon className="" color="black" width={40} height={30} />,
    },
    {
      name: "Reports",
      href: "/reports",
      icon: <ClientIcon className="" color="black" width={40} height={30} />,
    },
  ];

  return (
    <nav className="fixed top-0 z-30 bg-white h-full md:top-[70px] left-0 h-[45.3rem] w-[200px]  md:w-[300px] lg:top-[70px] lg:w-[280px]">
      <div className=" mt-20 relative w-[100px] h-[90px] md:mt-0 mx-auto">
        <Image
          src="/images/brandLogo-removebg-preview.png"
          alt="company brand logo"
          fill
          className=" w-full"
        />
   
      </div>

      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`flex px-5 items-center gap-x-5  cursor-pointer p-5 
          ${
            pathname === tab.href
              ? "border-l-4 border-yellow-500 text-yellow-500 bg-white "
              : " bg-white"
          }
          `}
        >
          {tab.icon}
          {tab.name}
        </Link>
      ))}
    </nav>
  );
};

export default AuthSidebar;
