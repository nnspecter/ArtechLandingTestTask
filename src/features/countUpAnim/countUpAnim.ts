import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `target` whenever `active` becomes true.
 * Returns the current formatted value as a string.
 */
export function useCountUp(
  target: number,
  active: boolean,
  decimals: number = 0,
  duration: number = 900
): string {
  const [value, setValue] = useState<number>(0)
  const frame = useRef<number | null>(null)
  const start = useRef<number | null>(null)

  useEffect(() => {
    start.current = null

    if (!active) {
      if (frame.current !== null) cancelAnimationFrame(frame.current)
      return
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      requestAnimationFrame(() => setValue(target))
      return
    }

    const step = (timestamp: number): void => {
      if (start.current === null) start.current = timestamp
      const elapsed = timestamp - start.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setValue(target * eased)

      if (progress < 1) {
        frame.current = requestAnimationFrame(step)
      }
    }

    frame.current = requestAnimationFrame(step)

    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [active, target, duration])

  const displayValue = active ? value : 0

  return displayValue.toFixed(decimals)
}