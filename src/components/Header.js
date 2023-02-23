import React from 'react'
import styles from './Header.module.css';
export const Header = () => {
  return (
    <div>
        <nav className={styles.navbar}>
            <img className={styles.img} src='https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png'></img>
        </nav>
    </div>
  )
}
