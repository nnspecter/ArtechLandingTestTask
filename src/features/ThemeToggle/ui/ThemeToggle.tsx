import React from 'react';
import { LuSun, LuMoon } from 'react-icons/lu';
import styles from './ThemeToggle.module.scss';
import { useThemeContext } from '@/app/context/ThemeProvider';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Переключить на ${isDark ? 'светлую' : 'тёмную'} тему`}
      title={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
    >
      <span className={styles.icon} aria-hidden="true">
        <LuSun />
      </span>
      <span className={styles.icon} aria-hidden="true">
        <LuMoon />
      </span>
      <span className={styles.thumb} />
    </button>
  );
};