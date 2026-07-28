import Reveal from './Reveal'

export default function SectionHeading({ index, title, note }) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-baseline justify-between gap-6 border-b border-[var(--rule)] pb-4">
        <div className="flex items-baseline gap-4">
          <span className="label">{index}</span>
          <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        </div>
        {note && <span className="label hidden shrink-0 sm:block">{note}</span>}
      </div>
    </Reveal>
  )
}
