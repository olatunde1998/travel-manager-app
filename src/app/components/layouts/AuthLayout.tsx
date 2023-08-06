"use client"
import { useState } from "react";
// import { ProtectedRoutes } from "../../index";
import { ErrorBoundary } from "react-error-boundary";
import Link from "next/link";
import { AuthNav } from "./AuthNav";
import AuthSidebar from "./AuthSideBar";
import { AccountIcon } from "../../../../assets/icons/accountIcon";




interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }:AuthLayoutProps) => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      {/* <ProtectedRoutes> */}
      <>
        <div className="relative font-Nunito">
          <AuthNav onNavToggle={handleNavToggle} setOpenMobileSidebar={setOpenMobileSidebar}
              openMobileSidebar={openMobileSidebar} />
          {/* <div className="relative z-20 top-16">
            <ul
              className={`bg-gray-100 bg-opacity-95 text-gray-600 fixed w-full lg:hidden ${
                isNavOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform`}
              onClick={() => {
                setIsNavOpen(false);
              }}
            >
              <li className="  hover:bg-gray-300 p-4 pt-2">
                <Link href="/courses">Course Curriculum</Link>
              </li>
              <li className=" hover:bg-gray-300 p-4 pt-2">
                <Link href="/courses/instructor">Your Instructor</Link>
              </li>
              <li className=" flex hover:bg-gray-300  py-4">
                {" "}
                <AccountIcon
                  color="gray"
                  width={60}
                  height={40}
                  className=""
                />{" "}
                <span className="  hover:bg-gray-300  pt-2">
                  Rasheed Olatunde
                </span>
              </li>
            </ul>
          </div> */}
          <div className="flex">
            <div className="min-w-[15.2rem] hidden  lg:block  md:min-w-[18.9rem] lg:min-w-[18.5rem] lg:relative border-r xl:min-w-[18.3rem]">
              <AuthSidebar />
            </div>
            {openMobileSidebar && (
               <div className="min-w-[15.2rem] md:block  md:min-w-[0.01rem] ">
                <AuthSidebar />
              </div>
            )}

            <main className="w-full bg-gray-200/40">
              <div className="min-h-screen pt-16 pb-6 w-full px-0 md:px-4 md:pt-24">
                {children}
              </div>
              {/* <AuthFooter /> */}
            </main>
          </div>
        </div>
      </>
      {/* </ProtectedRoutes> */}
    </ErrorBoundary>
  );
};
