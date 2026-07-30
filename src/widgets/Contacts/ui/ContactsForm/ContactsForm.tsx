import { useState } from 'react'
import styles from './ContactsForm.module.scss'

const topics = ['Заказ', 'Гарантия', 'Возврат', 'Другое'] as const
type Topic = (typeof topics)[number]

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [topic, setTopic] = useState<Topic>(topics[0])
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError('Заполните все поля')
      return
    }

    setError('')
    setSent(true)
  }

  return (
    <div className={styles.formSection}>
      {sent ? (
        <div className={styles.successState}>
          <div>
            <h3 className={styles.successTitle}>Сообщение отправлено</h3>
            <p className={styles.successText}>
              Инженер свяжется с вами в течение рабочего дня.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <h3 className={styles.cardTitle}>Задать вопрос</h3>

          <div className={styles.fieldGrid}>
            <label className={styles.field}>
              <span>Имя</span>
              <input
                type="text"
                placeholder="Как к вам обращаться"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className={styles.field}>
              <span>Телефон или почта</span>
              <input
                type="text"
                placeholder="Куда ответить"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.field}>
            <span>Тема обращения</span>
            <div
              className={styles.topicGroup}
              role="radiogroup"
              aria-label="Тема обращения"
            >
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  role="radio"
                  aria-checked={topic === t}
                  className={`${styles.topicChip} ${
                    topic === t ? styles.topicChipActive : ''
                  }`}
                  onClick={() => setTopic(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <label className={styles.field}>
            <span>Сообщение</span>
            <textarea
              rows={4}
              placeholder="Расскажите, что случилось или что хотите узнать"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          {error && <span className={styles.errorText}>{error}</span>}

          <button type="submit" className={`btn ${styles.submit}`}>
            Отправить сообщение
          </button>
        </form>
      )}
    </div>
  )
}