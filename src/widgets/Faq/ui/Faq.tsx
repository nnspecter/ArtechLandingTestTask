import { useState } from 'react'
import { motion } from 'framer-motion'

import styles from './FAQ.module.scss'
import { faqs } from '../data/faqData'

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={`section ${styles.faq}`} id="faq">
      <div className={`section-inner ${styles.faqInner}`}>
        <div className={styles.faqIntro}>
          <div>
          <h2 className="section-title">Частые вопросы</h2>
          <p className="section-sub">
            Не нашли ответ? Напишите инженеру напрямую в разделе «Контакты» —
            отвечаем в течение рабочего дня.
          </p>
          </div>
        </div>

        <div className={styles.faqList}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.q}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`${styles.faqIndex} mono`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{textAlign: "left"}}>{item.q}</span>

                </button>
                <motion.div
                  className={styles.faqAnswerWrap}
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className={styles.faqAnswer} style={{textAlign: "left"}}>{item.a}</p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}