import { ReactNode } from "react";
import TechLink from "@/components/TechLink";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import Link from "next/link";

interface ProjectLinksProps {
  children: ReactNode | string;
  demoLink: string;
  githubLink: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  children,
  demoLink,
  githubLink,
}) => {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="md:hidden flex text-main gap-4 w-full items-center justify-evenly text-lg">
        <Link href={demoLink}>Live Demo</Link>
        <Link href={githubLink}>Github Repo</Link>
      </div>
      <ul className="flex justify-between items-center">
        <TechLink span="Github" href={githubLink} offset="10" hide>
          <SiGithub size={40} />
        </TechLink>
        <TechLink span="Live demo" href={demoLink} offset="10" hide>
          <BiLinkExternal size={40} />
        </TechLink>
        <RxDividerVertical size={48} className="hidden md:flex" />
        {children}
      </ul>
    </div>
  );
};

export default ProjectLinks;
