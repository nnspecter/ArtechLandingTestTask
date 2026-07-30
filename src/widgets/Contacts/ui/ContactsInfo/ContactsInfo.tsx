import styles from './ContactsInfo.module.scss'

interface ContactItem {
  label: string
  value: string
  href: string | null
}

const contactInfo: ContactItem[] = [
  { label: 'Телефон', value: '+7 700 783 08 88', href: 'tel:+77007830888' },
  { label: 'Почта', value: 'support@arttech.kz', href: 'mailto:support@arttech.kz' },
  {
    label: 'Адрес',
    value: 'Костанай, ул. Алтынсарина 122',
    href: 'https://maps.google.com/?q=Москва+ул.Тестовая+14',
  },
  { label: 'Часы работы', value: 'Пн–Пт, 9:00–18:00 по Астане', href: null },
]

export const ContactInfo = () => {
  return (
    <div className={styles.infoSection}>
      <div>
        <p className={styles.infoTitle}>Контакты</p>
        <dl className={styles.infoList}>
          {contactInfo.map((item) => (
            <div className={styles.infoRow} key={item.label}>
              <dt>{item.label}</dt>
              <dd>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.socials}>
        <p className={styles.infoTitle}>Мы в соцсетях</p>
        <div className={styles.socialRow}>
          <a href="https://www.instagram.com/arttech.kz" aria-label="ArtTech в Instagram">Instagram</a>
          <a href="https://t.me/+Kj7aC6HKDY5hZWI6" aria-label="ArtTech в Телеграм">Telegram</a>
        </div>
      </div>
    </div>
  )
}