import SafeSets from '@/components/projects/safe-sets'
import SeikoIdentifier from '@/components/projects/seiko-identifier'
import Shurtle from '@/components/projects/shurtle'
import GoFastCDN from '@/components/projects/go-fast-cdn'
import { Section } from '../section'

const Projects = () => {
  return (
    <Section>
      <h2 className="text-4xl font-bold">Projects</h2>
      <GoFastCDN />
      <Shurtle />
      <SeikoIdentifier />
      <SafeSets />
    </Section>
  )
}

export default Projects
