import Image from 'next/image'
import styles from './styles.module.scss'

export default function Profile() {
  return (
    <section className="text-center">
      <Image
          src="/images/profile.jpg"
          alt="Anthony Hurtado"
          className={styles.image}
          width={200}
          height={200}
          priority
        />
      <h1 className={styles.title}>Anthony Hurtado</h1>
      <p>Software Engineer / Moldeado por códigos y café</p>
    </section>
  )
}