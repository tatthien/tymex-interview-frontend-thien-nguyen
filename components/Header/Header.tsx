'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'clsx'

import { IconChevronDown } from '@/components/icons/IconChevronDown'
import { IconGlobe } from '@/components/icons/IconGlobe'
import { Button } from '@/components/ui/Button'

import styles from './Header.module.css'

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about-us',
    label: 'About us',
  },
  {
    href: '/our-teams',
    label: 'Our teams',
  },
  {
    href: '/marketplace',
    label: 'Marketplace',
  },
  {
    href: '/roadmap',
    label: 'Roadmap',
  },
  {
    href: '/whitepaper',
    label: 'Whitepaper',
  },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <nav className={styles.nav}>
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cx(
                    styles.navLink,
                    pathname.includes(href) && styles.activeNavLink
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.rightActions}>
            <Button className={styles.connectWalletButton}>
              Connect Wallet
            </Button>
            <Button variant="ghost" size="icon">
              <IconGlobe />
            </Button>
            <Button variant="ghost" size="icon">
              <IconChevronDown />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
