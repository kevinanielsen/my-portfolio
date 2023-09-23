const Title = () => {
  return (
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
  );
};

export default Title;
