import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      <Reveal>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="section-title mt-5 text-balance">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={90}>
          <p
            className={`body-text mt-5 text-balance ${isCenter ? 'mx-auto' : ''}`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
      {action ? <Reveal delay={150}>{action}</Reveal> : null}
    </div>
  )
}
