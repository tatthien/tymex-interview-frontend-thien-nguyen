import Image from 'next/image'

import { NewArrivalNftCards } from './NewArrivalNftCards'

import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section className={styles.wrapper}>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className={styles.content}>
            <img
              className={styles.newArrival}
              src="/assets/new-arrival.svg"
              alt="new arrival"
            />
          </div>
        </div>
        <NewArrivalNftCards />
      </div>

      <div className={styles.overlay} />
      <Image
        src="/assets/hero.webp"
        fill
        objectFit="cover"
        alt="Marketplace hero image"
      />
    </section>
  )
}
