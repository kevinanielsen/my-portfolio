import Link from "next/link";

interface TechLinkProps {
  span: string;
  href: string;
  offset?: string;
  children: React.ReactNode;
}

const TechLink: React.FC<TechLinkProps> = ({ span, href, offset, children }) => {
  return (
    <li>
      <span className="sr-only">{span}</span>
      <Link
        href={href}
        target="_blank"
        className={`focus:outline-2 focus:outline-main focus:outline-offset-[${offset ? offset : '12'}px] rounded-full`}
      >
        {children}
      </Link>
    </li>
  );
};

export default TechLink;
