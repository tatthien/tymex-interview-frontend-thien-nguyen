import Image from 'next/image'

import styles from './HeroSection.module.css'

type NewArrivalNftCardProps = {
  image: string
  name: string
}

export function NewArrivalNftCard({ image, name }: NewArrivalNftCardProps) {
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
