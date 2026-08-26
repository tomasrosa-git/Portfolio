import Reveal from './Reveal'

export default function SectionHeading({ title, description }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="accent-rule mb-8" />
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-xl text-base text-[var(--text-secondary)]">{description}</p>
      )}
    </Reveal>
  )
}
