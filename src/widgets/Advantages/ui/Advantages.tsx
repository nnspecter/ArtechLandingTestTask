import { OneAdvantage } from './OneAdvantage/OneAdvantage';
import { items } from '../data/advantagesData';
import styles from './Advantages.module.scss'

export const Advantages = () => {
  return (
    <section className="section" id="advantages">
      <div className="section-inner">
        <h2 className="section-title">Обещания вслух ничего не<br /> значат — цифры значат всё</h2>

        <div className={styles.advantagesGrid}>
          {items.map((item, i) => (
            <OneAdvantage item={item} index={i}/>
          ))}
        </div>
      </div>
    </section>
  )
}