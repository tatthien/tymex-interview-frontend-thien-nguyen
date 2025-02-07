import Link from 'next/link'
import cx from 'clsx'

import styles from '@/components/ui/Button/Button.module.css'

export default function Home() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div className="container">Coming soon</div>
      <Link href="/marketplace" className={cx(styles.root, styles.primary)}>
        Visit Marketplace
      </Link>
    </div>
  )
}
