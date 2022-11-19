import styles from './Advantage.module.scss'
import Wallet from './Wallet/Wallet'
import Profile from './Profile/Profile'
import Time from './Time/Time'
import Message from './Message/Message'

const Advantage = () => (
  <section>
    <div className="container">
      <div className={styles.advantage}>
        <div className={styles.image}>
          <img src="./img/bmw.png" alt="BMW" />
        </div>
        <div className={styles.description}>
          <h3>Получите доступ к истории вашего авто</h3>
          <h2>Если вы давно хотели купить авто из США</h2>
          <ul className={styles.list}>
            <li>
              <div className={styles.icon}>
                <Wallet />
              </div>
              <div className={styles.text}>
                <p>Стоит проверить его еще до осмотра</p>
                <p>Кто знает по какой причине он был продан?</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}>
                <Profile />
              </div>
              <div className={styles.text}>
                <p>Получите данные о пробеге</p>
                <p>Кто знает о настоящих цифрах?</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}>
                <Time />
              </div>
              <div className={styles.text}>
                <p>Узнайте степень повреждения авто</p>
                <p>Будьте готовы</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}>
                <Message />
              </div>
              <div className={styles.text}>
                <p>Достаточно большая информация по авто</p>
                <p>Собираем самое важное</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Advantage
