"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";

const ContactMe = () => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const formRef = useRef<HTMLFormElement | null>(null);

  const inputClasses =
    "p-2 invalid:border-red-500 border dark:bg-dark border-slate-200 rounded-md ";

  const handleEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify({
        service_id: "default_service",
        template_id: "template_ly8thbk",
        user_id: "rp9xi9AypeLjzdYUk",
        template_params: {
          subject: subject,
          message: message,
          reply_to: email,
          from_name: name,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Message sent!");
        } else {
          toast.error("An error occurred!");
        }
      })
      .catch((error: any) => {
        console.log(error);
        toast.error("An error occurred!");
      })
      .finally(() => {
        setEmail("");
        setMessage("");
        setName("");
        setSubject("");
      });
  };

  return (
    <section id="contact" className="p-8 flex flex-col gap-4 items-center">
      <div className="max-w-7xl gap-4 flex flex-col p-8 w-full">
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <form className="flex flex-col sm:flex-row gap-4" ref={formRef}>
          <div className="flex flex-col gap-4 w-full">
            <div>
              <label htmlFor="subject" className="flex-col flex">
                Subject
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className={inputClasses + "min-w-[20ch] w-full"}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label htmlFor="message" className="block">
                Your Message
                <textarea
                  name="message"
                  id="message"
                  className={inputClasses + "w-full h-full"}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                  id="email"
                  className={inputClasses + "w-full"}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label htmlFor="name">
                Full Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className={inputClasses + "w-full"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>

            <button
              onClick={(e) => handleEmail(e)}
              className="
                font-bold
                p-2
                bg-main
                dark:text-dark
                rounded-md
                text-lg
                w-fit
                disabled:opacity-50
              "
              disabled={
                email.length === 0 ||
                name.length === 0 ||
                message.length === 0 ||
                subject.length === 0
              }
              type="submit"
              id="submit"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
