import Image from 'next/image'
import styles from './page.module.css'
import MainPage from './page/main-page/main-page'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage></MainPage>
    </main>
  )
}
