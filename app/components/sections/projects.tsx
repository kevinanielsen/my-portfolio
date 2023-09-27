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
            items-center
          "
    >
      <h2 className="text-4xl font-bold">Projects</h2>
      <Shurtle />
      <div className="border-b-4 border-b-dark my-4 w-full" />
      <SeikoIdentifier />
      <div className="border-b-4 border-b-dark my-4 w-full" />
      <SafeSets />
    </section>
  );
};

export default Projects;
