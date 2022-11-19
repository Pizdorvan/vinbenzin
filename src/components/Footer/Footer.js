/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Footer.module.scss'
import Logo from '../Logo/Logo'
import TelegramSvg from './TelegramSvg/TelegramSvg'
import EmailSvg from './EmailSvg/EmailSvg'

const Footer = () => (
  <footer className={styles.footerWrap}>
    <div className="container">
      <div className={styles.footer} id="contact">
        <div className={styles.logo}>
          <Logo />
          <p>VinBenzin</p>
        </div>
        <a href="http://t.me/VinBenz1n" className={styles.telegram}>
          <TelegramSvg />
          telegram
        </a>
        <a href="mailto: vinbenzin@inbox.lt" className={styles.email}>
          <EmailSvg />
          email
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
