import { products } from '../data/productsData'
import {ProductCard} from './ProductCard/ProductCard'
import styles from './Products.module.scss'

export const Products = () => {
  return (
    <section className="section products" id="products">
      <div className="section-inner">
        <div className={styles.productsHeader}>
          <div>
            <h2 className="section-title">Популярные товары</h2>
            <p className="section-sub">
              Наведите курсор на карточку, чтобы увидеть данные последнего
              теста устройства вместо стандартного маркетингового описания.
            </p>
          </div>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}