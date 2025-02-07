'use client'

import { useId } from 'react'

import styles from './Select.module.css'

type SelectProps = {
  label?: string
  data:
    | {
        value: string
        label: string
      }[]
    | string[]
  onChange?: (value: string) => void
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>

export function Select({ label, data, onChange, ...props }: SelectProps) {
  const id = useId()

  const options = data.map((option) => {
    if (typeof option === 'string') {
      return {
        value: option,
        label: option,
      }
    }

    return option
  })

  return (
    <div className={props.className}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        className={styles.input}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
