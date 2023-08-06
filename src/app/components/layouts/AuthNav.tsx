import Link from "next/link";
import {
  AvatarImage,
  AccountIcon,
  HamburgerIcon,
  BackIcon,
} from "../../../../assets/icons";
import { NotificationIcon } from "../../../../assets/icons/notificationIcon";
import Image from "next/image";

interface AuthNavProps {
  onNavToggle: () => void;
  setOpenMobileSidebar: (openMobileSidebar: boolean) => void;
  openMobileSidebar: boolean;
}

export const AuthNav = ({
  onNavToggle,
  setOpenMobileSidebar,
  openMobileSidebar,
}: AuthNavProps) => {
  return (
    <nav className="w-full h-[70px] px-5 fixed bg-white bg-opacity-95 z-20 top-0 lg:h-[70px]">
      <div className="flex justify-between items-center lg:justify-end h-full ">
        <div
          className="cursor-pointer block lg:hidden"
          onClick={() => setOpenMobileSidebar(!openMobileSidebar)}
        >
          <HamburgerIcon width={20} height={30} color="red" />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-8">
            <NotificationIcon width={30} height={30} />
            <p className="font-semibold hidden lg:block">Kelvin</p>
            <span className=" ">
              <Image
                src={AvatarImage}
                alt="user picture"
                width={50}
                height={50}
                className="border rounded-full p-[0.1rem]"
              />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthNav;
