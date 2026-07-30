import { motion } from 'framer-motion'
import styles from './Contacts.module.scss'
import { ContactForm } from './ContactsForm/ContactsForm'
import { ContactInfo } from './ContactsInfo/ContactsInfo'

export const Contacts = () => {
  return (
    <section className={styles.page} id="contacts">
      <div className={styles.intro}>
        <h1 className={`section-title ${styles.heading}`}>
          Есть вопросы по устройству или заказу?
        </h1>
        <p className={`section-sub ${styles.sub}`}>
          Пишите напрямую инженерам техподдержки — без автоответчиков и очередей в
          чат-боте. Отвечаем в течение рабочего дня.
        </p>
      </div>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <ContactForm />
        <ContactInfo />
      </motion.div>
    </section>
  )
}