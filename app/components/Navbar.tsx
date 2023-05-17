import RenderThemeChanger from "./RenderThemeChanger";

const Navbar = () => {

  return (
    <nav className="flex justify-between w-full p-8">
      <h1 className="font-bold text-4xl">{"<KN />"}</h1>
      <div className="flex gap-12 text-2xl">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <RenderThemeChanger />
      </div>
    </nav>
  );
};

export default Navbar;
