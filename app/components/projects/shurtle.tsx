import {
  SiDaisyui,
  SiGithub,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import TechLink from "../TechLink";
import { BiLinkExternal } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import Image from "next/image";

const Shurtle: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center flex-wrap">
      <div className="md:max-w-xl">
        <h3 className="text-xl font-bold">
          Shurtle - The simple and modern URL-shortener
        </h3>
        <p>
          A database for Seiko wristwatches with a build-in identifying tool to
          get the exact model-number of your Seiko watch
        </p>
        <ul className="list-disc pl-4">
          <li>A well-trained AI-model to accurately identify your Seiko</li>
          <li>A long list of watches with well-written descriptions</li>
          <li>
            <b>Coming soon:</b> A like feature to save your favorite Seikos
          </li>
        </ul>
        {/* Links & Technologies */}
        <ul className="flex justify-between items-center pt-8 md:max-w-xl">
          <TechLink
            span="Github"
            href="https://github.com/kevinanielsen/seiko-identifier"
            offset="10"
          >
            <SiGithub size={40} />
          </TechLink>
          <TechLink
            span="Live demo"
            href="https://seiko-identifier.vercel.app/"
            offset="10"
          >
            <BiLinkExternal size={40} />
          </TechLink>
          <li>
            <RxDividerVertical size={48} />
          </li>
          <TechLink span="NextJS" href="https://nextjs.org/" offset="10">
            <SiNextdotjs size={40} />
          </TechLink>
          <TechLink span="React.js" href="https://react.dev/">
            <SiReact size={40} />
          </TechLink>
          <TechLink span="Typescript" href="https://typescriptlang.org/">
            <SiTypescript size={40} />
          </TechLink>
          <TechLink span="Prisma" href="https://prisma.io/">
            <SiPrisma size={40} />
          </TechLink>
          <TechLink span="ML5.js" href="https://ml5js.org/">
            <Image
              src="/icons/ml5-logo-white.png"
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
        width={250}
        height={500}
      />
    </div>
  );
};

export default Shurtle;
