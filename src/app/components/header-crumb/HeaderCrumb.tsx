import Link from "next/link";

import { useRouter } from "next/navigation";

interface HeaderCrumbProps {
  prevLink: string;
  nextLink: string;
  showForwardIcon?: boolean;
}

export const HeaderCrumb = ({ prevLink, nextLink, showForwardIcon = true }:HeaderCrumbProps) => {
  const router = useRouter();
  const handlePrevLinkClick = () => {
    router.back();
  };

  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="inline-flex items-center text-sm md:text-xl font-bold text-black opacity-50 hover:text-black hover:opacity-100"
              onClick={handlePrevLinkClick}
            >
              {prevLink}
            </Link>
          </li>
          {/* <li aria-current="page">
            <div className="hidden lg:flex items-center">
              {showForwardIcon && (
                <ForwardIcon
                  color="gray"
                  width={12}
                  height={14}
                  className=""
                />
              )}
              <span className="ml-4 md:text-xl font-bold text-black md:ml-2">
                {nextLink}
              </span>
            </div>
          </li> */}
        </ol>
      </nav>
    </div>
  );
};
