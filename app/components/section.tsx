export const Section = ({
  children,
  dark = false
}: {
  children: React.ReactNode
  dark?: boolean
}) => {
  return (
    <section
      className={`w-full ${dark ? 'dark:bg-dark' : 'bg-lightest dark:bg-darkLight'}`}
    >
      <div className="w-full gap-4 flex flex-col p-8 max-w-5xl">{children}</div>
    </section>
  )
}
