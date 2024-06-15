import Image from 'next/image'
import styles from './styles.module.scss'

export default function Profile() {
  return (
    <section>
      <Image
        src="/images/profile.jpg"
        alt="Anthony Hurtado"
        className={styles.profileImage}
        width={200}
        height={200}
        priority />
      <h1 className={styles.profileTitle}>Anthony Hurtado</h1>
      <h2 className={styles.profileSubtitle}>Software Engineer / Moldeado por códigos y café</h2>
      <hr className={styles.profileDivider} />
      <p className={styles.profileContent}>¡Hola mundo! Soy un Ingeniero de Software con más de 13 años de experiencia en la creación de aplicaciones web. Me especializo en liderar equipos multidisciplinarios en startups de alto rendimiento</p>
    </section>
  )
}