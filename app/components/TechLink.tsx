import Link from 'next/link'

interface TechLinkProps {
  span: string
  href: string
  offset?: string
  children: React.ReactNode
  hide?: boolean
}

const TechLink: React.FC<TechLinkProps> = ({
  span,
  href,
  offset,
  hide,
  children
}) => {
  return (
    <li className={`${hide && 'hidden md:flex'}`}>
      <Link
        href={href}
        target="_blank"
        className={`focus:outline-2 focus:outline-main focus:outline-offset-[${
          offset ? offset : '12'
        }px] rounded-full `}
        aria-label={span}
      >
        <span className="sr-only">{span}</span>
        {children}
      </Link>
    </li>
  )
}

export default TechLink
