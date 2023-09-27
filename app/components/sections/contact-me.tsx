const ContactMe = () => {
  return (
    <section
      id="contact"
      className="
            p-8
            flex
            flex-col
            gap-4
            items-center
          "
    >
      <div className="max-w-7xl gap-4 flex flex-col p-8 w-full">
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <form className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full">
            <div>
              <label htmlFor="subject" className="flex-col flex">
                Subject
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="min-w-[20ch] w-full sm:w-10/12"
                />
              </label>
            </div>

            <div>
              <label htmlFor="message" className="block">
                Your Message
                <textarea
                  name="message"
                  id="message"
                  className="w-full h-full"
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
                  id="email"
                  className="w-full"
                />
              </label>
            </div>

            <div>
              <label htmlFor="name">
                Full Name
                <input type="text" name="name" id="name" className="w-full" />
              </label>
            </div>

            <button
              className="
                  font-bold
                  p-2
                  bg-main
                  dark:text-dark
                  rounded-md
                  text-lg
                "
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
