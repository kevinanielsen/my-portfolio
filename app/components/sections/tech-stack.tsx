import {
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiVuedotjs
} from 'react-icons/si'
import TechLink from '../TechLink'
import { Section } from '../section'

const TechStack = () => {
  return (
    <Section dark>
      <h2 className="text-4xl font-bold">My Stack</h2>
      <div className="grid w-full items-center justify-center">
        <ul
          className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-4
                pt-2
                md:gap-8
              "
        >
          <TechLink span="Node.js" href="https://nodejs.org/en">
            <SiNodedotjs size={48} />
          </TechLink>
          <TechLink span="Typescript" href="https://www.typescriptlang.org/">
            <SiTypescript size={48} />
          </TechLink>
          <TechLink span="Next.js" href="https://nextjs.org/">
            <SiNextdotjs size={48} />
          </TechLink>
          <TechLink span="React.js" href="https://react.dev/">
            <SiReact size={48} />
          </TechLink>
          <TechLink span="Vue" href="https://vuejs.org/">
            <SiVuedotjs size={48} />
          </TechLink>
          <TechLink span="TailwindCSS" href="https://tailwindcss.com/">
            <SiTailwindcss size={48} />
          </TechLink>
        </ul>
      </div>
      <p>
        I use a lot of tools and technologies when developing web apps, but
        these are the ones I excel in and want to highlight. My primary focus is
        on frontend development, however, I also love working on the backend and
        working with tools like MongoDB, Express.js, Prisma, and many more.
      </p>
    </Section>
  )
}

export default TechStack
