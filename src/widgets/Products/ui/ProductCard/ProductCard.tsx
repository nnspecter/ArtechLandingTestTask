import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './ProductCard.module.scss'
import { useCountUp } from '@/features/countUpAnim/countUpAnim'
import type { Product } from '../../data/productsData'

//Отдельно выделил каждую линию чтоб переиспользовать)
const SpecRow = ({ spec, active }: { spec: any; active: boolean }) => {
  const value = useCountUp(spec.value, active, spec.decimals)
  
  return (
    <div className={styles.productCardSpec}>
      <span className={styles.productCardSpecLabel}>{spec.label}</span>
      <span className={`${styles.productCardSpecValue} mono`}>
        {value}
        <span className={styles.productCardSpecUnit}>{spec.unit}</span>
      </span>
    </div>
  )
}


export const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      className={styles.productCard}
      style={{ '--card-accent': product.accent } as React.CSSProperties}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      <div className={styles.productCardMedia}>
        <div className={styles.productCardGlyph}>
        <img src={product.image}/>
        </div>
          

        <div className={styles.productCardReadout}>
          <span className={styles.productCardReadoutLabel}>Диагностика</span>
          {product.specs.map((spec: any) => (
            <SpecRow key={spec.label} spec={spec} active={isHovered} />
          ))}
        </div>
      </div>

      <div className={styles.productCardBody}>
        <span className={styles.productCardCategory}>{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
        
        <div className={styles.productCardFooter}>
          <span className={styles.productCardPrice}>{product.price}</span>
        </div>
      </div>
    </motion.article>
  )
}