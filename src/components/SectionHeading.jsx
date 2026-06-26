import Reveal from './Reveal'

export default function SectionHeading({ index, kicker, title }) {
  return (
    <Reveal className="mb-12">
      <p className="font-hand text-2xl text-[var(--ink-soft)]">
        <span className="text-red-marker">{index}.</span> {kicker}
      </p>
      <h2 className="mt-1 inline-block font-marker text-4xl text-red-marker scribble sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
