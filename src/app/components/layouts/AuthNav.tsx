
  import Link from "next/link";
import { BackIcon } from "../../../../assets/icons/backIcon";
import { HamburgerIcon } from "../../../../assets/icons/hamburgerIcon";
import { AccountIcon } from "../../../../assets/icons/accountIcon";
  
  interface AuthNavProps {
    onNavToggle: () => void;
  }
  
  export const AuthNav = ({ onNavToggle }:AuthNavProps) => {
    return (
      <nav className="w-full h-[70px] px-5 fixed bg-gray-100 shadow-lg bg-opacity-95 z-20 top-0 lg:h-[70px]">
        <div className="flex justify-between items-center h-full ">
          <Link href="/" className="my-auto cursor-pointer">
            <BackIcon color="gray" width={20} height={16} className="" />
          </Link>
  
          <div className="cursor-pointer">
            <div onClick={onNavToggle}>
              <HamburgerIcon
                color="gray"
                width={24}
                height={20}
                className="block lg:hidden"
              />
            </div>
            <AccountIcon
              color="gray"
              width={60}
              height={40}
              className="hidden lg:block"
            />
          </div>
        </div>
      </nav>
    );
  };
  
  export default AuthNav;
  