import Link from 'next/link'

import { IconComment } from '@/components/icons/IconComment'
import { IconHandset } from '@/components/icons/IconHandset'
import { Button } from '@/components/ui/Button'
import { TextInput } from '@/components/ui/TextInput'

import styles from './Footer.module.css'

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
  {
    href: '#faqs',
    label: 'FAQs',
  },
  {
    href: '#news',
    label: 'News',
  },
  {
    href: '#community',
    label: 'Community',
  },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.sections}>
          <div className={styles.section}>
            <h4>Navigation</h4>
            <nav className={styles.navList}>
              {links.map(({ href, label }) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.section}>
            <h4>Contact us</h4>
            <div>
              <div className={styles.contactItem}>
                <IconHandset />
                <a href="tel:01234567890">01234567890</a>
              </div>
              <div className={styles.contactItem}>
                <IconComment />
                <a href="mailto:tymex-talent@tyme.com">tymex-talent@tyme.com</a>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h4>Subcribe to receive our latest update</h4>
            <div className={styles.newsletter}>
              <TextInput
                type="email"
                placeholder="Your email address"
                className={styles.emailInput}
              />
              <Button>Subcribe</Button>
            </div>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.copyrightSection}>
          <p className={styles.copyright}>
            ©2023 Tyme - Edit. All Rights reserved.
          </p>
          <nav className={styles.legalNav}>
            <Link href="#">Security</Link>
            <Link href="#">Legal</Link>
            <Link href="#">Privacy</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
