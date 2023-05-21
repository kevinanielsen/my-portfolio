import NavLink from "./NavLink";
import RenderThemeChanger from "./RenderThemeChanger";

const Navbar = () => {

  return (
    <nav className="flex justify-between align-center w-full p-8">
      <h1 className="text-dark dark:text-lightest font-bold text-4xl">{"<KN />"}</h1>
      <div className="flex gap-12 text-2xl">
        <NavLink href="#about" text="About" />
        <NavLink href="#projects" text="Projects" />
        <NavLink href="#contact" text="Contact" />
        <RenderThemeChanger />
      </div>
    </nav>
  );
};

export default Navbar;
