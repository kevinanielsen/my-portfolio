'use client'
import handleClickScroll from '@/actions/handleClickScroll'
import { motion } from 'framer-motion'
import { Section } from '../section'

const AboutMe = () => {
  return (
    <Section id="about">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <p>
        Hello, I&apos;m Kevin - a self-taught front-end web developer with a
        passion for building beautiful, user-friendly websites and web
        applications. I specialize in using technologies like React.js,
        TailwindCSS, TypeScript, and Next.js to create intuitive interfaces and
        engaging user experiences.
        <br />
        <br />
        When it comes to problem-solving, I believe in looking at challenges
        from multiple angles to find the best possible solution. My typical
        workflow involves brainstorming features, designing layouts with Figma,
        setting up the backend, coding components, and writing tests along the
        way. I&apos;m always looking for new technologies and frameworks to
        explore, and I&apos;m open to working with clients from any industry or
        background.
        <br />
        <br />
        Although I&apos;m still relatively new to the field of front-end
        development, I&apos;m proud of the progress I&apos;ve made so far.
        I&apos;ve completed courses on test-driven development, and building web
        apps with React.js, HTML, and Typescript. I&apos;ve also developed a
        workout tracker with features such as tracking your progression on a
        chosen exercise.
        <br />
        <br />
        If you&apos;re looking for a front-end web developer who&apos;s
        passionate about creating beautiful, functional, and user-friendly
        websites and web applications, I&apos;d love to hear from you!
      </p>
      <div className="flex gap-4">
        <motion.button
          whileHover={{
            scale: 1.2,
            rotateZ: 10 - Math.round(Math.random() * 15 + 5)
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => handleClickScroll('contact')}
          className="
            font-bold
            p-2
            bg-main
            w-fit
            rounded-md
            text-lg
          "
        >
          Contact
        </motion.button>
        <motion.a
          whileHover={{
            scale: 1.2,
            rotateZ: 10 - Math.round(Math.random() * 15 + 5)
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          target="_blank"
          href="/resume"
          className="
            font-bold
            p-2
            bg-main
            w-fit
            rounded-md
            text-lg
          "
        >
          Resume
        </motion.a>
      </div>
    </Section>
  )
}

export default AboutMe
