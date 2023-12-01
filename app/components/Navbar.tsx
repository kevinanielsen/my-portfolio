"use client";

import NavLink from "@/components/NavLink";
import RenderThemeChanger from "@/components/RenderThemeChanger";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-full p-8">
        <motion.h3
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          className="text-dark dark:text-lightest font-bold text-4xl"
        >
          {"<KN />"}
        </motion.h3>
        <motion.div className="gap-12 text-2xl hidden sm:flex">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <NavLink href="about" text="About" />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <NavLink href="projects" text="Projects" />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <NavLink href="contact" text="Contact" />
          </motion.div>
        </motion.div>
        <div className="flex gap-2">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link
              href="mailto:kevinanielsen@outlook.com"
              aria-label="Email"
              target="_blank"
            >
              <MdEmail size="40" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Link
              href="https://linkedin.com/in/kevinanielsen"
              aria-label="Linkedin"
              target="_blank"
            >
              <BiLogoLinkedinSquare size="40" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Link
              href="https://github.com/kevinanielsen"
              aria-label="Github"
              target="_blank"
            >
              <BiLogoGithub size="40" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 5 }}
            transition={{ delay: 1.6 }}
          >
            <RenderThemeChanger />
          </motion.div>
        </div>
      </nav>
      <noscript>
        <nav className="flex justify-between items-center w-full p-8">
          <h3 className="text-dark dark:text-lightest font-bold text-4xl">
            {"<KN />"}
          </h3>
          <div className="gap-12 text-2xl hidden sm:flex">
            <NavLink href="about" text="About" />
            <NavLink href="projects" text="Projects" />
            <NavLink href="contact" text="Contact" />
          </div>
          <div className="flex gap-2">
            <Link
              href="mailto:kevinanielsen@outlook.com"
              aria-label="Email"
              target="_blank"
            >
              <MdEmail size="40" />
            </Link>
            <Link
              href="https://linkedin.com/in/kevinanielsen"
              aria-label="Linkedin"
              target="_blank"
            >
              <BiLogoLinkedinSquare size="40" />
            </Link>
            <Link
              href="https://github.com/kevinanielsen"
              aria-label="Github"
              target="_blank"
            >
              <BiLogoGithub size="40" />
            </Link>
            <RenderThemeChanger />
          </div>
        </nav>
      </noscript>
    </>
  );
};

export default Navbar;
