import { useState, useEffect } from 'react'

const cursorStyle = `
@keyframes tw-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
`

export default function Typewriter({
  text = '',
  speed = 60,
  delay = 0,
  className = '',
  hideCursorOnDone = false,
}) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)

    const startTimeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, speed, delay])

  return (
    <span className={className}>
      <style>{cursorStyle}</style>
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '0.85em',
          backgroundColor: '#a5b4fc',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          borderRadius: '1px',
          // solid while typing, classic hard-blink once done
          animation: done && !hideCursorOnDone
            ? 'tw-blink 0.53s step-end infinite'
            : 'none',
          opacity: done && hideCursorOnDone ? 0 : 1,
        }}
      />
    </span>
  )
}
