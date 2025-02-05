import Image from 'next/image'

import styles from './HeroSection.module.css'

const nftCards = [
  {
    name: 'Assassin',
    image: '/assets/assassin.webp',
  },
  {
    name: 'Neon Guy',
    image: '/assets/neon-guy.webp',
  },
  {
    name: 'Mafia England',
    image: '/assets/mafia-england.webp',
  },
  {
    name: 'Bassketball Girl',
    image: '/assets/bassketball-girl.webp',
  },
]

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

        <svg
          viewBox="0 0 1920 30"
          style={{ marginBottom: '-10px' }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 13 0 0v300h1920V13h-14l-4-4-4 4h-113.5L1774 24h-28l-24-24-13 13h-257l-10 11h-7l-3-4h-26l-20-20h-55l-12 13h-27l-3-3-5 6-3-3h-271L997 0h-51l-24 24h-6l-10-11H621l-5 5-11-10-5 5H470l-10 11h-6L430 0l-13 13H214l-4 5-4-5h-25L168 0h-50L98 20H73l-7-7H13Z"
            fill="#FBC625"
          />
        </svg>
        <div className={styles.nftCardsWrapper}>
          <div className="container" style={{ position: 'relative' }}>
            <div className={styles.nftCards}>
              {nftCards.map(({ name, image }) => (
                <NFTCard key={name} name={name} image={image} />
              ))}
            </div>

            <div className={styles.nftCardFeatured}>
              <Image
                className={styles.nftCardFeaturedImage}
                src="/assets/the-dj.webp"
                alt="the dj"
                width={471}
                height={655}
                objectFit="cover"
              />
              {/*
            <div className={styles.nftCardFeaturedName}>
              <span>
                The DJ
              </span>
            </div>
            */}
            </div>
          </div>
        </div>
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

type NFTCardProps = {
  image: string
  name: string
}

function NFTCard({ image, name }: NFTCardProps) {
  return (
    <div className={styles.nftCard}>
      <div className={styles.nftCardImageWrapper}>
        <Image
          src={image}
          className={styles.nftCardImage}
          alt={name}
          width={200}
          height={200}
        />
      </div>
      <p className={styles.nftCardName}>{name}</p>
    </div>
  )
}
