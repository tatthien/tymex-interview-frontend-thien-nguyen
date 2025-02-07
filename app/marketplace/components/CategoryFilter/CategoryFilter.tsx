'use client'

import { useEffect, useState } from 'react'
import cx from 'clsx'

import { useProductFilter } from '../../providers/useProductFilter'

import styles from './CategoryFilter.module.css'

const categories = [
  'Upper Body',
  'Lower Body',
  'Hat',
  'Shoes',
  'Accessory',
  'Legendary',
  'Mythic',
  'Epic',
  'Rare',
]

export function CategoryFilter() {
  const { setQuery } = useProductFilter()
  const [selectedCategories, setSelectedCategories] = useState('')

  useEffect(() => {
    const category = selectedCategories ? selectedCategories : undefined
    setQuery((query) => ({ ...query, category }))
  }, [selectedCategories, setQuery])

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={cx(styles.button, {
          [styles.selected]: selectedCategories === '',
        })}
        onClick={() => setSelectedCategories('')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={cx(styles.button, {
            [styles.selected]: selectedCategories === category,
          })}
          onClick={() => setSelectedCategories(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
