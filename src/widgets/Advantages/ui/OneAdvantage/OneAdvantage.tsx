import { motion } from 'framer-motion'
import styles from "./OneAdvantage.module.scss"
import type { Advantage } from '../../data/advantagesData'

interface OneAdvantageProps {
  item: Advantage;
  index: number;
}


export const OneAdvantage = ({ item, index }: OneAdvantageProps) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={item.title}
      className={styles.advantagesCard}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={styles.advantagesIcon}>
        <Icon size={20} className="button-icon" />
      </div>
      <h3>{item.title}</h3>
      <p className='section-sub'>{item.text}</p>
    </motion.div>
  )
}