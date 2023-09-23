import Navbar from "./components/Navbar";
import Title from "./components/sections/title";
import AboutMe from "./components/sections/about-me";
import TechStack from "./components/sections/tech-stack";
import Projects from "./components/sections/projects";
import ContactMe from "./components/sections/contact-me";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Title */}
        <Title />
        {/* About Me */}
        <AboutMe />
        {/* Tech Stack */}
        <TechStack />
        {/* Projects */}
        <Projects />
        {/* Contact Me */}
        <ContactMe />
      </main>
    </>
  );
};

export default Home;
