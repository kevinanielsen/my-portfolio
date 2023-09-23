import SafeSets from "@/components/projects/safe-sets";
import SeikoIdentifier from "@/components/projects/seiko-identifier";
import Shurtle from "@/components/projects/shurtle";

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
      <Shurtle />
      <div className="border border-b-2 border-b-main my-4" />
      <SeikoIdentifier />
      <div className="border border-b-2 border-b-main my-4" />
      <SafeSets />
    </section>
  );
};

export default Projects;
