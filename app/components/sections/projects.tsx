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

const Projects = () => {
  return (
    <section
      id="projects"
      className="
          bg-lightest
          dark:bg-darkLight
            p-8
            flex
            flex-col
            gap-4
          "
    >
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center flex-wrap">
        {/* 1st Section */}
        <div className="md:max-w-md">
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
          <ul className="flex justify-between items-center pt-8">
            <TechLink
              span="Github"
              href="https://github.com/kevinanielsen/safe-sets"
              offset="10"
            >
              <SiGithub size={40} />
            </TechLink>
            <TechLink
              span="Live demo"
              href="https://safe-sets.netlify.app/"
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
            <TechLink span="Cypress" href="https://www.cypress.io/" offset="10">
              <SiCypress size={40} />
            </TechLink>
            <TechLink
              span="React Router"
              href="https://reactrouter.com/"
              offset="10"
            >
              <SiReactrouter size={40} />
            </TechLink>
          </ul>
        </div>
        <Image
          src="/images/safe-sets-demo-phone.png"
          alt="demo image"
          width={250}
          height={500}
        />
      </div>
    </section>
  );
};

export default Projects;
