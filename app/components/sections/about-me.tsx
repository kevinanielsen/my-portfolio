const AboutMe = () => {
  return (
    <section
      id="about"
      className="
            bg-lightest
            dark:bg-darkLight
            flex flex-col items-center
          "
    >
      <div className="max-w-7xl gap-4 flex flex-col p-8">
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
          along the way. I'm always looking for new technologies and frameworks
          to explore, and I'm open to working with clients from any industry or
          background.
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
          If you're looking for a front-end web developer who's passionate about
          creating beautiful, functional, and user-friendly websites and web
          applications, I'd love to hear from you!
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
      </div>
    </section>
  );
};

export default AboutMe;
