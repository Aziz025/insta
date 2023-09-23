import styles from './page.module.css'
import Register from './register/page'
export default function Home() {
  return (
    <main className={styles.main}>
      <Register />
    </main>
  )
}
