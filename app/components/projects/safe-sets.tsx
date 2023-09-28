import {
  SiCypress,
  SiGithub,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import TechLink from "../TechLink";
import { BiLinkExternal } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import Image from "next/image";
import ProjectLinks from "../project-links";

const SafeSets: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center flex-wrap lg:flex-nowrap max-w-7xl w-full">
      {/* 1st Section */}
      <div className="md:max-w-xl">
        <h3 className="text-xl font-bold">
          Safe Sets - A complete workout tracker
        </h3>
        <p>
          A workout tracker with all the features you need to track your
          progress at the gym.
        </p>
        <ul className="list-disc pl-4">
          <li>A comprehensive exercise list to choose from.</li>
          <li>Automatic 1 rep max tracking for your favorite exercise.</li>
          <li>Full history of all your workouts.</li>
        </ul>
        {/* Links & Technologies */}
        <ProjectLinks
          demoLink="https://safe-sets.netlify.app/"
          githubLink="https://github.com/kevinanielsen/safe-sets"
        >
              <TechLink span="React.js" href="https://react.dev/">
                <SiReact size={40} />
              </TechLink>
              <TechLink
                span="TailwindCSS"
                href="https://tailwindcss.com/"
                offset="10"
              >
                <SiTailwindcss size={40} />
              </TechLink>
              <TechLink span="Vite" href="https://vitejs.dev/" offset="10">
                <SiVite size={40} />
              </TechLink>
              <TechLink
                span="Cypress"
                href="https://www.cypress.io/"
                offset="10"
              >
                <SiCypress size={40} />
              </TechLink>
              <TechLink
                span="React Router"
                href="https://reactrouter.com/"
                offset="10"
              >
                <SiReactrouter size={40} />
              </TechLink>
        </ProjectLinks>
      </div>
      <Image
        src="/images/safe-sets-demo-phone.png"
        alt="demo image"
        width={500}
        height={1000}
        className="w-[250px]"
      />
    </div>
  );
};

export default SafeSets;
