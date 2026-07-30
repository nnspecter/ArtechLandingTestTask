import { motion } from 'framer-motion'
import styles from './Testimonials.module.scss'
import { testimonials } from '../data/testimonialsData'

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-inner">
        <h2 className="section-title">Что говорят покупатели</h2>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <blockquote className='section-sub'>&laquo;{t.quote}&raquo;</blockquote>
              <figcaption>
                <span className={styles.avatar}>{t.initials}</span>
                <span className={styles.meta}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}