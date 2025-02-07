'use client'

import { type FormEvent, useState } from 'react'

import { IconResetFilter } from '@/components/icons/IconResetFilter'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { TextInput } from '@/components/ui/TextInput'

import { useProductFilter } from '../../providers/useProductFilter'

import styles from './FilterSidebar.module.css'

const DEFAULT_FORM_VALUE = {
  tier: '',
  theme: '',
  time: 'desc',
  price: '',
}

const getSort = (time: string, price: string) => {
  let sortBy = ''
  sortBy = time === 'asc' ? 'createdAt' : '-createdAt'

  if (price) {
    sortBy = price === 'asc' ? 'price' : '-price'
  }

  return sortBy
}

export function FilterSidebar() {
  const { setQuery } = useProductFilter()

  const [formValue, setFormValue] = useState(DEFAULT_FORM_VALUE)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setQuery((query) => ({
      ...query,
      ...{
        tier: formValue.tier,
        theme: formValue.theme,
        _sort: getSort(formValue.time, formValue.price),
      },
    }))
  }

  const handleReset = () => {
    setFormValue(DEFAULT_FORM_VALUE)
    setQuery((query) => ({ ...query, ...DEFAULT_FORM_VALUE, ...{ _sort: '' } }))
  }

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formStack}>
          <TextInput type="search" placeholder="Quick search" />
          <div className={styles.fieldGroup}>
            <Select
              label="Tier"
              data={[
                {
                  label: 'All',
                  value: '',
                },
                {
                  label: 'Basic',
                  value: 'Basic',
                },
                {
                  label: 'Premium',
                  value: 'Premium',
                },
                {
                  label: 'Deluxe',
                  value: 'Deluxe',
                },
              ]}
              value={formValue.tier}
              onChange={(value) =>
                setFormValue((formValue) => ({ ...formValue, tier: value }))
              }
            />
            <Select
              label="Theme"
              data={[
                {
                  label: 'All',
                  value: '',
                },
                {
                  label: 'Halloween',
                  value: 'Halloween',
                },
                {
                  label: 'Colorful',
                  value: 'Colorful',
                },
                {
                  label: 'Light',
                  value: 'Light',
                },
                {
                  label: 'Dark',
                  value: 'Dark',
                },
              ]}
              value={formValue.theme}
              onChange={(value) =>
                setFormValue((formValue) => ({ ...formValue, theme: value }))
              }
            />
          </div>
          <div className={styles.fieldGroup}>
            <Select
              label="Time"
              data={[
                {
                  label: 'Latest',
                  value: 'desc',
                },
                {
                  label: 'Oldest',
                  value: 'asc',
                },
              ]}
              value={formValue.time}
              onChange={(value) =>
                setFormValue((formValue) => ({ ...formValue, time: value }))
              }
            />
            <Select
              label="Price"
              data={[
                {
                  label: 'Default',
                  value: '',
                },
                {
                  label: 'Low to high',
                  value: 'asc',
                },
                {
                  label: 'High to low',
                  value: 'desc',
                },
              ]}
              value={formValue.price}
              onChange={(value) =>
                setFormValue((formValue) => ({ ...formValue, price: value }))
              }
            />
          </div>
          <div className={styles.actions}>
            <Button
              variant="ghost"
              type="button"
              onClick={handleReset}
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <IconResetFilter />
              Reset filter
            </Button>
            <Button type="submit">Search</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
