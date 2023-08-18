import styles from './page.module.css'
import Insta from '../components/insta'
import UserLogin from '../components/auth/user'
export default function Home() {
  return (
    <main className={styles.main}>
      <UserLogin />
        <Insta />
    </main>
  )
}
