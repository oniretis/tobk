import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  tags?: boolean;
}

const Header = ({ title = "", tags = false }: Props) => {
  return (
    <header className="pt-28 px-4 mb-5 text-center border-b dark:border-orange-900">
      <h2 className="uppercase text-2xl mx-auto max-w-2xl font-bold">
        {title}
      </h2>

      {tags && (
        <div className="text-xs mt-2 hover:text-orange-500">
          <Link href="/tag">#tags</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
