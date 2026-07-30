import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { ThemeToggle } from '@/features/ThemeToggle'

const links = [
  { href: '#advantages', label: 'Преимущества' },
  { href: '#products', label: 'Товары' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Контакты' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.headerInner}>
        <a href="#top" className={styles.headerLogo} aria-label="ArtTech, на главную">
          <span>ArtTech</span>
        </a>

        <nav className={styles.headerNav} aria-label="Основная навигация">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <ThemeToggle/>
        
        {/*Меню для моб адаптива*/}
        <button
          className={`${styles.headerBurger} ${open ? styles.headerBurgerOpen : ''}`}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.headerMobile} ${open ? styles.headerMobileOpen : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>{link.label}</a>
        ))}
      </div>
    </header>
  )
}