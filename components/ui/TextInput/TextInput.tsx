import { useId } from 'react'
import cx from 'clsx'

import styles from './TextInput.module.css'

type TextInputProps = {
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function TextInput({ label, ...props }: TextInputProps) {
  const id = useId()

  return (
    <div className={props.className}>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...props} id={id} className={cx(styles.input)} />
    </div>
  )
}
