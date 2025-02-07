import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './RangeSlider.module.css'

type RangeSliderProps = {
  label?: string
  min: number
  max: number
  minLabel?: string
  maxLabel?: string
  value?: { min: number; max: number }
  onChange?: (values: { min: number; max: number }) => void
  step?: number
}

export function RangeSlider({
  label,
  min,
  max,
  minLabel,
  maxLabel,
  value,
  onChange,
  step = 1,
}: RangeSliderProps) {
  const [leftValue, setLeftValue] = useState(value ? value.min : min)
  const [rightValue, setRightValue] = useState(value ? value.max : max)
  const [isDragging, setIsDragging] = useState<'left' | 'right' | null>(null)

  const trackRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const leftThumbRef = useRef<HTMLDivElement>(null)
  const rightThumbRef = useRef<HTMLDivElement>(null)
  const leftLabelRef = useRef<HTMLSpanElement>(null)
  const rightLabelRef = useRef<HTMLSpanElement>(null)

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return

      const { left, width } = trackRef.current.getBoundingClientRect()
      const position = Math.max(0, Math.min(clientX - left, width))
      const percentage = position / width
      const value = Math.round((percentage * (max - min) + min) / step) * step

      if (isDragging === 'left' && value < rightValue) {
        setLeftValue(value)
        onChange?.({ min: value, max: rightValue })
      } else if (isDragging === 'right' && value > leftValue) {
        setRightValue(value)
        onChange?.({ min: leftValue, max: value })
      }
    },
    [isDragging, leftValue, rightValue, min, max, step, onChange]
  )

  const handleMouseDown = (handle: 'left' | 'right') => {
    setIsDragging(handle)
  }

  useEffect(() => {
    setLeftValue(value?.min ?? min)
    setRightValue(value?.max ?? max)
  }, [value])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      e.preventDefault()
      updatePosition(e.clientX)
    }

    const handleMouseUp = () => {
      setIsDragging(null)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, updatePosition])

  useEffect(() => {
    const leftPercent = ((leftValue - min) / (max - min)) * 100
    const rightPercent = ((rightValue - min) / (max - min)) * 100

    if (barRef.current) {
      barRef.current.style.left = `${leftPercent}%`
      barRef.current.style.width = `${rightPercent - leftPercent}%`
    }

    if (leftThumbRef.current) {
      leftThumbRef.current.style.left = `${leftPercent}%`
    }

    if (rightThumbRef.current) {
      rightThumbRef.current.style.left = `${rightPercent}%`
    }

    if (leftLabelRef.current) {
      leftLabelRef.current.style.left = `${leftPercent}%`
    }

    if (rightLabelRef.current) {
      rightLabelRef.current.style.left = `${rightPercent}%`
    }
  }, [leftValue, rightValue, min, max])

  return (
    <div className={styles.root}>
      {label && <label className={styles.label}>{label}</label>}
      <div ref={trackRef} className={styles.track}>
        <div ref={barRef} className={styles.bar} />
        <div
          ref={leftThumbRef}
          className={styles.thumb}
          onMouseDown={() => handleMouseDown('left')}
          role="slider"
          aria-label="Minimum value"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={leftValue}
          tabIndex={0}
        />
        <div
          ref={rightThumbRef}
          className={styles.thumb}
          onMouseDown={() => handleMouseDown('right')}
          role="slider"
          aria-label="Maximum value"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={rightValue}
          tabIndex={0}
        />
        <span ref={leftLabelRef} className={styles.floatingLabel}>
          {leftValue}
        </span>
        <span ref={rightLabelRef} className={styles.floatingLabel}>
          {rightValue}
        </span>
      </div>
      <div className={styles.minMaxLabel}>
        <span>{minLabel ?? leftValue}</span>
        <span>{maxLabel ?? rightValue}</span>
      </div>
    </div>
  )
}
