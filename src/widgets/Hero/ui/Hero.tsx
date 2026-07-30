import { motion } from 'framer-motion'
import ArtTechDarkLogo from '@shared/assets/images/logos/ArtTechDarkLogo.png'
import ArtTechLightLogo from '@shared/assets/images/logos/ArtTechLogo.png'

import styles from './Hero.module.scss'
import { useTheme } from '@/app/context/useTheme'

export const Hero = () => {
  const{theme} = useTheme();

  const ArtTechLogo = theme === "dark" ? ArtTechDarkLogo : ArtTechLightLogo;
  return (
    <section className={styles.hero} id="top">
      <div className={`${styles.heroInner} section-inner`}>
        <div className={styles.heroText}>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Техника <br/>без секретов
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            ArtTech проектирует наушники, компрессоры, охлаждение и умные
            устройства с открытым протоколом испытаний — вы видите точные
            цифры, а не рекламные обещания.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <a href="#products" className="btn btn-primary">Смотреть товары</a>
          </motion.div>
        </div>
        <div className={styles.heroVisual}>
          <motion.img
          
            src={ArtTechLogo} 
            alt="ArtTech Logo"
            className={styles.heroLogoImg}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          />
        </div>
      </div>

    </section>
  )
}