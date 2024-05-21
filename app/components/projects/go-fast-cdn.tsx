import { SiReact, SiSqlite, SiTailwindcss, SiVite } from 'react-icons/si'
import TechLink from '../TechLink'
import Image from 'next/image'
import ProjectLinks from '../project-links'
import { BiLogoGoLang } from 'react-icons/bi'

const GoFastCDN: React.FC = () => {
  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-between gap-8 lg:flex-row lg:flex-nowrap lg:gap-0">
      {/* 1st Section */}
      <div className="lg:w-2/5 w-full h-64 relative flex-shrink-0 pr-4">
        <Image
          src="/images/go-fast-cdn-demo.png"
          alt="demo image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="md:max-w-xl lg:w-1/2">
        <h3 className="text-xl font-bold">
          Go-Fast CDN - An easy-to-use, fast, and simple CDN
        </h3>
        <p>
          Not meant to be a full-fledged CDN, but it is a good starting point
          for anyone who wants to learn more about CDNs, and containerizing
          backends with Docker.
        </p>
        <ul className="list-disc pl-4">
          <li>
            Great documentation written with{' '}
            <a className="text-sky-500 underline" href="https://astro.build/">
              Astro
            </a>{' '}
            and{' '}
            <a
              className="text-sky-500 underline"
              href="https://starlight.astro.build/"
            >
              Starlight
            </a>
            .
          </li>
          <li>OpenAPI 3.0 documentation.</li>
          <li>A clean and minimalistic user interface.</li>
        </ul>
        {/* Links & Technologies */}
        <ProjectLinks
          demoLink="https://kevinanielsen.github.io/go-fast-cdn/"
          githubLink="https://github.com/kevinanielsen/go-fast-cdn"
        >
          <TechLink span="React.js" href="https://react.dev/">
            <SiReact size={40} />
          </TechLink>
          <TechLink span="Go" href="https://go.dev/">
            <BiLogoGoLang size={72} />
          </TechLink>
          <TechLink span="Vite" href="https://vitejs.dev/" offset="10">
            <SiVite size={40} />
          </TechLink>
          <TechLink span="TailwindCSS" href="https://tailwindcss.com/">
            <SiTailwindcss size={40} />
          </TechLink>
          <TechLink span="SQLite" href="https://www.sqlite.org/">
            <SiSqlite size={40} />
          </TechLink>
        </ProjectLinks>
      </div>
    </div>
  )
}

export default GoFastCDN
