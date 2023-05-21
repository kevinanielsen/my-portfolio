type NavLinkProps = {
  text: string;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="font-light text-center"
    >
      {text}
    </a>
  );
};

export default NavLink;
