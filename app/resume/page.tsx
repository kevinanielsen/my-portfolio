const Resume = () => {
  return (
    <object
      data="/Resume.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
      className="h-screen w-screen"
    >
      <p>
        Unable to display PDF file. <a href="/Resume.pdf">Download</a> instead.
      </p>
    </object>
  );
};

export default Resume;
