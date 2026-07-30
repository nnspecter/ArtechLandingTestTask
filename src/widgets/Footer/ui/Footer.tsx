import styles from './Footer.module.scss'

const navLinks = [
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Товары', href: '#products' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
]

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <a href="#top" className={styles.footerLogo}>
            <span>ArtTech</span>
          </a>

          <nav className={styles.footerNav} aria-label="Основная навигация">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p>© {year} ArtTech. Все права защищены.</p>
          <div className={styles.footerLegal}>
            <a href="#">Конфиденциальность</a>
            <a href="#">Условия</a>
            <a href="#">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  )
}