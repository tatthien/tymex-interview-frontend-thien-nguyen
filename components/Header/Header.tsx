'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'clsx'

import { IconChevronDown } from '@/components/icons/IconChevronDown'
import { IconGlobe } from '@/components/icons/IconGlobe'
import { IconMenu } from '@/components/icons/IconMenu'
import { Button } from '@/components/ui/Button'
import { useDisclosure } from '@/hooks/useDisclosure'

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
  const {
    opened: mobileNavOpened,
    open: openMobileNav,
    close: closeMobileNav,
  } = useDisclosure()

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
                    pathname === href && styles.activeNavLink
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile */}
            <div className={styles.mobileNavButton}>
              <Button variant="ghost" size="icon" onClick={openMobileNav}>
                <IconMenu />
              </Button>
            </div>

            <div className={styles.drawer} data-opened={mobileNavOpened}>
              <Button
                variant="ghost"
                size="icon"
                className={styles.drawerClose}
                onClick={closeMobileNav}
              >
                x
              </Button>
              <nav className={styles.mobileNav}>
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cx(
                      styles.navLink,
                      pathname === href && styles.activeNavLink
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
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
