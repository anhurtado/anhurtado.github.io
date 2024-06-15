import Profile from '@/components/Profile'
import SocialNetwork from '@/components/SocialNetwork'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WriteMe from '@/components/WriteMe'
import Title from '@/components/Title'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <article>
      <section className={styles.spacer}>
        <Profile />
      </section>
      {/* <section className={styles.spacer}>
        <Title icon="entypo:email" title="@anhurtadop" />
      </section>
      <section className={styles.spacer}>
        <Navbar />
      </section> */}
      <section className={styles.spacer}>
        <Title icon="entypo:email" title="Contacto" />
      </section>
      <section className={styles.spacer}>
        <SocialNetwork />
      </section>
      <section className={styles.spacer}>
        <WriteMe />
      </section>
      <section className={styles.spacer}>
        <Footer />
      </section>
    </article>
  )
}
