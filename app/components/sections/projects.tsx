import SafeSets from "@/components/projects/safe-sets";
import SeikoIdentifier from "@/components/projects/seiko-identifier";
import Shurtle from "@/components/projects/shurtle";
import GoFastCDN from "@/components/projects/go-fast-cdn";

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
            items-center
          "
    >
      <h2 className="text-4xl font-bold">Projects</h2>
      <GoFastCDN />
      <Shurtle />
      <SeikoIdentifier />
      <SafeSets />
    </section>
  );
};

export default Projects;
