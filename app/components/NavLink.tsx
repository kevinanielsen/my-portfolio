"use client"

import handleClickScroll from "@/actions/handleClickScroll";

type NavLinkProps = {
  text: string;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <button onClick={() => handleClickScroll(href)} className="font-light text-center">
      {text}
    </button>
  );
};

export default NavLink;
