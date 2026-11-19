import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  style,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(
    () => !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const node = ref.current

    if (!node || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Element = as

  return (
    <Element
      {...props}
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Element>
  )
}
