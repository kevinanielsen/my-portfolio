import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactMe = () => {
  return (
    <section id="contact" className="p-8 flex flex-col gap-4 items-center">
      <div className="max-w-7xl gap-4 flex flex-col p-8 w-full text-center">
        <h2 className="font-bold text-3xl">Contact Info</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex justify-center items-center">
            <Link
              href="https://linkedin.com/in/kevinanielsen"
              aria-label="Linkedin"
              target="_blank"
            >
              <BiLogoLinkedinSquare size="48" />
            </Link>
            <Link
              href="https://github.com/kevinanielsen"
              aria-label="Github"
              target="_blank"
            >
              <BiLogoGithub size="48" />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="mailto:kevinanielsen@outlook.com"
              className="flex gap-2"
              target="_blank"
            >
              <MdEmail size="24" />
              kevinanielsen@outlook.com
            </Link>
            <Link
              href="https://maps.app.goo.gl/CJQMkCRmBHJPydrZA"
              target="_blank"
              className="flex gap-2"
            >
              <MdLocationOn size="24" />
              Køge, Denmark
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
