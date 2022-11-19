/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.scss'
import Logo from '../Logo/Logo'
import TelegramSvg from '../Footer/TelegramSvg/TelegramSvg'
import EmailSvg from '../Footer/EmailSvg/EmailSvg'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  function showMenu() {
    setActiveMenu(!activeMenu)
  }

  return (
    <header className={styles.headerWrap}>
      <div className="container">
        <div className={styles.header}>
          <Link href="/">
            <a className={styles.logo}>
              <button type="button" onClick={showMenu}>
                <Logo />
                <p>VinBenzin</p>
              </button>
            </a>
          </Link>
          <nav className={activeMenu ? `${styles.menu} ${styles.active}` : styles.menu}>
            <ul>
              <li>
                <Link href="/catalogue">
                  <a>
                    <button type="button" onClick={showMenu}>
                      Каталог
                    </button>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a>
                    <button type="button">
                      Услуги
                    </button>
                  </a>
                </Link>
              </li>
              <li>
                <a href="http://t.me/VinBenz1n" className={styles.telegram}>
                  <TelegramSvg />
                </a>
              </li>
              <li>
                <a href="mailto: vinbenzin@inbox.lt" className={styles.email}>
                  <EmailSvg />
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className={styles.languages}>
          <p>ru?</p>
          <p>en?</p>
        </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
