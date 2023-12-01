"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./hiddenRef.css";

const Title = () => {
  const divElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divElement.current) {
      divElement.current.hidden = true;
    }
  });

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
      <div ref={divElement} className="text-center" id="hidden-ref">
        <h1 className="text-3xl">Kevin Alex Nielsen</h1>
        <h2 className="text-2xl">Welcome to my portfolio</h2>
        <p className="text-xl max-w-2xl text-center">
          <br />
          It looks like you have Javascript disabled or it is somehow
          misfunctioning. <br />
          <br /> If you want to view my page anyway, but without the fancy
          animations, you can{" "}
          <a className="underline text-sky-500" href="/static.html">
            click here
          </a>
        </p>
      </div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 80, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 2 }}
        className="relative top-24"
      >
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
      </motion.div>
      <img
        src="/wave.svg"
        alt="wave"
        className="relative -z-10 dark:opacity-10"
      />
    </section>
  );
};

export default Title;
