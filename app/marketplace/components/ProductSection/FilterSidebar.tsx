import { Button } from '@/components/ui/Button'
import { TextInput } from '@/components/ui/TextInput'

import styles from './FilterSidebar.module.css'

export function FilterSidebar() {
  return (
    <div className={styles.root}>
      <form>
        <div className={styles.formStack}>
          <TextInput type="search" placeholder="Quick search" />
          <div className={styles.actions}>
            <Button variant="ghost" type="button">
              Reset filter
            </Button>
            <Button type="submit">Search</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
