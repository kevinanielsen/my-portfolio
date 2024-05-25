import Image from 'next/image'
import {
  SiDeno,
  SiDocker,
  SiTypescript,
  SiVitest,
  SiVuedotjs
} from 'react-icons/si'
import TechLink from '../TechLink'
import { Section } from '../section'

const Experience: React.FC = () => {
  return (
    <Section id="experience" dark>
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div className="flex gap-4 flex-col">
        <div className="flex flex-col gap-8 items-center justify-evenly">
          <div className="w-full flex gap-8 items-center">
            <div className="flex-shrink-0">
              <Image
                src="/fysiofresh.png"
                height="200"
                width="200"
                alt="Fysiofresh Logo"
                className="h-32 w-32"
              />
            </div>
            <div className="">
              <div className="flex flex-col">
                <h4 className="text-xl">Fysiofresh</h4>
                <div className="mb-2">
                  <h3 className="text-lg font-bold">Software Developer</h3>
                  <h5>May 2024 - Today</h5>
                </div>
                <div className="">
                  <h3 className="text-lg">Software Developer Intern</h3>
                  <h5>January 2024 - May 2024</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p>
              At Fysiofresh, I helped build a platform to connect
              physiotherapists with clients.
            </p>
            <p>
              I helped build the integration with payment- and bookkeeping
              systems through edge functions, webhooks and APIs.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <ul className="flex flex-wrap gap-4 justify-evenly">
              <li>
                <TechLink span="Vue" href="https://vuejs.org/">
                  <SiVuedotjs size={48} />
                </TechLink>
              </li>
              <li>
                <TechLink
                  span="Typescript"
                  href="https://www.typescriptlang.org/"
                >
                  <SiTypescript size={48} />
                </TechLink>
              </li>
              <li>
                <TechLink span="Deno" href="https://www.deno.land/">
                  <SiDeno size={48} />
                </TechLink>
              </li>
              <li>
                <TechLink span="Vitest" href="https://www.vitest.dev/">
                  <SiVitest size={48} />
                </TechLink>
              </li>
              <li>
                <TechLink span="Docker" href="https://www.docker.com/">
                  <SiDocker size={48} />
                </TechLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Experience
