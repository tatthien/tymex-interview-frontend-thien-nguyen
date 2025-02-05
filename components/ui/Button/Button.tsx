import cx from 'clsx'

import styles from './Button.module.css'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  size?: 'small' | 'medium' | 'icon'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cx(
        styles.root,
        styles[variant],
        styles[size],
        props.className
      )}
    >
      {children}
    </button>
  )
}
