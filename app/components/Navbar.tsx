import NavLink from "@/components/NavLink";
import RenderThemeChanger from "@/components/RenderThemeChanger";
import Link from "next/link";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full p-8">
      <h3 className="text-dark dark:text-lightest font-bold text-4xl">{"<KN />"}</h3>
      <div className="gap-12 text-2xl hidden sm:flex">
        <NavLink href="about" text="About" />
        <NavLink href="projects" text="Projects" />
        <NavLink href="contact" text="Contact" />  
      </div>
      <div className="flex gap-4">
        <Link href="https://linkedin.com/in/kevinanielsen" aria-label="Linkedin" target="_blank"><BiLogoLinkedinSquare size="40" /></Link>
        <RenderThemeChanger />
      </div>
    </nav>
  );
};

export default Navbar;
