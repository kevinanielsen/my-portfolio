import {
  SiExpress,
  SiGithub,
  SiMongodb,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import TechLink from "@/components/TechLink";
import { BiLinkExternal } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import Image from "next/image";
import ProjectLinks from "@/components/project-links";

const Shurtle: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center flex-wrap lg:flex-nowrap max-w-7xl w-full">
      {/* 1st Section */}
      <div className="md:max-w-xl">
        <h3 className="text-xl font-bold">
          Shurtle - The simple and modern URL-shortener
        </h3>
        <p>An easy to use and fast tool for shortening long links.</p>
        <ul className="list-disc pl-4">
          <li>A minimalistic and fast user interface</li>
          <li>Multiple language support</li>
          <li>Fast response time</li>
        </ul>
        {/* Links & Technologies */}
        <ProjectLinks
          githubLink="https://github.com/kevinanielsen/shurtle"
          demoLink="https://app.shurtle.site/"
        >
          <TechLink span="React.js" href="https://react.dev/">
            <SiReact size={40} />
          </TechLink>
          <TechLink span="Typescript" href="https://typescriptlang.org/">
            <SiTypescript size={40} />
          </TechLink>
          <TechLink span="MongoDB" href="https://mongodb.com/">
            <SiMongodb size={40} />
          </TechLink>
          <TechLink span="ExpressJS" href="https://mongodb.com/">
            <SiExpress size={40} />
          </TechLink>
          <TechLink span="Shadcn/ui" href="https://ui.shadcn.com/">
            <Image
              src="/icons/shadcn/ui-original.png"
              width={48}
              height={48}
              alt="ML5"
            />
          </TechLink>
        </ProjectLinks>
      </div>

      <Image
        src="/images/shurtle-demo.jpeg"
        alt="demo image"
        width={500}
        height={1000}
        className="w-[250px]"
      />
    </div>
  );
};

export default Shurtle;
