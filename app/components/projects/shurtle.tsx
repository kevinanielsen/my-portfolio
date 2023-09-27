import {
  SiExpress,
  SiGithub,
  SiMongodb,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import TechLink from "../TechLink";
import { BiLinkExternal } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import Image from "next/image";

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
        <ul className="flex justify-between items-center pt-8">
          <TechLink
            span="Github"
            href="https://github.com/kevinanielsen/shurtle"
            offset="10"
          >
            <SiGithub size={40} />
          </TechLink>
          <TechLink
            span="Live demo"
            href="https://app.shurtle.site/"
            offset="10"
          >
            <BiLinkExternal size={40} />
          </TechLink>
          <li>
            <RxDividerVertical size={48} />
          </li>
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
        </ul>
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
