import Navbar from "./components/Navbar";
import {
  SiCypress,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import TechLink from "./components/TechLink";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Title */}
        <section
          id="title"
          className="
            flex 
            flex-col 
            justify-center 
            items-center 
            h-full 
            pt-8
          "
        >
          <div className="relative top-24">
            <h2
              className="
                text-4xl
                text-lightMain
                font-bold
                text-left
              "
            >
              Frontend Developer
            </h2>
            <h1
              className="
                text-left
                text-3xl
                font-light
              "
            >
              Kevin Alex Nielsen
            </h1>
          </div>
          <img
            src="/wave.svg"
            alt="wave"
            className="relative -z-10 dark:opacity-10"
          />
        </section>
        {/* About Me */}
        <section
          id="about"
          className="
            bg-lightest
            dark:bg-darkLight
            p-8
            flex
            flex-col
            gap-4
          "
        >
          <h2 className="text-4xl font-bold">About Me</h2>
          <p>
            Hello, I'm Kevin - a self-taught front-end web developer with a
            passion for building beautiful, user-friendly websites and web
            applications. I specialize in using technologies like React.js,
            TailwindCSS, TypeScript, and Next.js to create intuitive interfaces
            and engaging user experiences.
            <br />
            <br />
            When it comes to problem-solving, I believe in looking at challenges
            from multiple angles to find the best possible solution. My typical
            workflow involves brainstorming features, designing layouts with
            Figma, setting up the backend, coding components, and writing tests
            along the way. I'm always looking for new technologies and
            frameworks to explore, and I'm open to working with clients from any
            industry or background.
            <br />
            <br />
            Although I'm still relatively new to the field of front-end
            development, I'm proud of the progress I've made so far. I've
            completed courses on test-driven development, and building web apps
            with React.js, HTML, and Typescript. I've also developed a workout
            tracker with features such as tracking your progression on a chosen
            exercise.
            <br />
            <br />
            If you're looking for a front-end web developer who's passionate
            about creating beautiful, functional, and user-friendly websites and
            web applications, I'd love to hear from you!
          </p>
          <a
            href="#contact"
            className="
              font-bold
              p-2
              text-lightest
              bg-main
              w-fit
              rounded-md
              text-lg
            "
          >
            Contact
          </a>
        </section>
        {/* Tech Stack */}
        <section
          id="my_stack"
          className="
            p-8
            flex
            flex-col
            gap-4
          "
        >
          <h2 className="text-4xl font-bold">My Stack</h2>
          <ul
            className="
              flex 
              justify-between 
              items-center 
              pt-2
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
          <p>
            I use a lot of tools and technologies when developing web apps, but
            these are the ones I excel in and want to highlight. My primary
            focus is on frontend development, however, I also love working on
            the backend and working with tools like MongoDB, Express.js, Prisma,
            and many more.
          </p>
        </section>
        {/* Projects */}
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
                <li>
                  Automatic 1 rep max tracking for your favorite exercise.
                </li>
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
        {/* Contact Me */}
        <section
          id="contact"
          className="
            p-8
            flex
            flex-col
            gap-4
          "
        >
          <h2 className="text-4xl font-bold text-center">Contact Me</h2>
          <form className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full">
              <div>
                <label htmlFor="subject" className="block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="min-w-[20ch] w-full sm:w-10/12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" className="w-full" />
              </div>

              <button
                className="
                  font-bold
                  p-2
                  text-lightest
                  bg-main
                  rounded-md
                  text-lg
                "
              >
                Send message
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Home;
