import {
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiCypress,
} from "react-icons/si";
import TechLink from "../TechLink";

const TechStack = () => {
  return (
    <section
      id="my_stack"
      className="
            p-8
            flex
            flex-col
            gap-4
            items-center
          "
    >
      <div className="max-w-7xl gap-4 flex flex-col pt-8 w-full">
        <h2 className="text-4xl font-bold">My Stack</h2>
        <div className="w-full grid justify-center items-center">
          <ul
            className="
                flex 
                justify-between 
                items-center 
                pt-2
                flex-wrap
                gap-4
                md:gap-8
              "
          >
            <TechLink span="Node.js" href="https://nodejs.org/en">
              <SiNodedotjs size={48} />
            </TechLink>
            <TechLink span="Typescript" href="https://www.typescriptlang.org/">
              <SiTypescript size={48} />
            </TechLink>
            <TechLink span="Next.js" href="https://nextjs.org/">
              <SiNextdotjs size={48} />
            </TechLink>
            <TechLink span="React.js" href="https://react.dev/">
              <SiReact size={48} />
            </TechLink>
            <TechLink span="Cypress" href="https://www.cypress.io/">
              <SiCypress size={48} />
            </TechLink>
            <TechLink span="TailwindCSS" href="https://tailwindcss.com/">
              <SiTailwindcss size={48} />
            </TechLink>
          </ul>
        </div>
        <p>
          I use a lot of tools and technologies when developing web apps, but
          these are the ones I excel in and want to highlight. My primary focus
          is on frontend development, however, I also love working on the
          backend and working with tools like MongoDB, Express.js, Prisma, and
          many more.
        </p>
      </div>
    </section>
  );
};

export default TechStack;
