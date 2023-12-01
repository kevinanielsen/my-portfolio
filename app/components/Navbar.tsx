import NavLink from "@/components/NavLink";
import RenderThemeChanger from "@/components/RenderThemeChanger";
import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full p-8">
      <h3 className="text-dark dark:text-lightest font-bold text-4xl">
        {"<KN />"}
      </h3>
      <div className="gap-12 text-2xl hidden sm:flex">
        <NavLink href="about" text="About" />
        <NavLink href="projects" text="Projects" />
        <NavLink href="contact" text="Contact" />
      </div>
      <div className="flex gap-2">
        <Link
          href="mailto:kevinanielsen@outlook.com"
          aria-label="Email"
          target="_blank"
        >
          <MdEmail size="40" />
        </Link>
        <Link
          href="https://linkedin.com/in/kevinanielsen"
          aria-label="Linkedin"
          target="_blank"
        >
          <BiLogoLinkedinSquare size="40" />
        </Link>
        <Link
          href="https://github.com/kevinanielsen"
          aria-label="Github"
          target="_blank"
        >
          <BiLogoGithub size="40" />
        </Link>
        <RenderThemeChanger />
      </div>
    </nav>
  );
};

export default Navbar;
