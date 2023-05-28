import NavLink from "./NavLink";
import RenderThemeChanger from "./RenderThemeChanger";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full p-8">
      <h3 className="text-dark dark:text-lightest font-bold text-4xl">{"<KN />"}</h3>
      <div className="gap-12 text-2xl hidden sm:flex">
        <NavLink href="#about" text="About" />
        <NavLink href="#projects" text="Projects" />
        <NavLink href="#contact" text="Contact" />  
      </div>
      <RenderThemeChanger />
    </nav>
  );
};

export default Navbar;
