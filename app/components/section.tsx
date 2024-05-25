export const Section = ({
  children,
  id,
  dark = false
}: {
  children: React.ReactNode
  id: string
  dark?: boolean
}) => {
  return (
    <section
      id={id}
      className={`w-full ${dark ? 'dark:bg-dark' : 'bg-lightest dark:bg-darkLight'}`}
    >
      <div className="w-full gap-4 flex flex-col p-8 max-w-5xl">{children}</div>
    </section>
  )
}
