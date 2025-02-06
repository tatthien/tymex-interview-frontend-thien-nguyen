import { FilterSidebar } from './FilterSidebar'
import { ProductGrid } from './ProductGrid'
import { Wave } from './Wave'

import styles from './ProductSection.module.css'

export function ProductSection() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <FilterSidebar />
          </aside>
          <main>
            <ProductGrid />
          </main>
        </div>
      </div>
      <Wave />
      <div className={styles.background} />
    </section>
  )
}
