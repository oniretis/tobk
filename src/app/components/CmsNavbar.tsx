import Link from "next/link";

import { BackArrowIcon } from "./Icons";

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowIcon />
      </Link>

      <div className="text-3xl dark:text-amber-50">
        tobk
        <span className="text-[#B31942] font-bold">Admin</span>
      </div>
    </div>
  );
};

export default CmsNavbar;
