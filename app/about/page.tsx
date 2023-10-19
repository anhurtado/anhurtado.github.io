import Profile from "@/components/Profile"
import SocialNetwork from "@/components/SocialNetwork"
import styles from './styles.module.scss'
import Link from "next/link"

export default function About() {
  return (
    <section>
      <Link href="/" className={styles.a}>Regresar</Link>
      <Profile />
      <section className="text-left mt-4">
        <h2 className={styles.title}>Sobre mí</h2>
        <p className={styles.p}>¡Hola! Mi nombre es Anthony Hurtado y soy un apasionado ingeniero de software. Me encanta resolver problemas y crear soluciones innovadoras utilizando código, con una taza de café al lado, me sumerjo en el mundo de la programación y disfruto cada desafío que se me presenta.</p>
        <p className={styles.p}>Durante mi carrera profesional, he trabajado en una variedad de proyectos emocionantes que me han permitido adquirir habilidades en diferentes áreas de desarrollo de software. He trabajado con lenguajes como JavaScript, Python, Java, PHP y C#, y he tenido la oportunidad de trabajar en proyectos de desarrollo web, aplicaciones móviles, bases de dato, entre otros.</p>
        <p className={styles.p}>Además de la programación, tengo una pasión por el aprendizaje continuo y el crecimiento personal. Siempre estoy buscando oportunidades para ampliar mis conocimientos y mantenerme actualizado con las últimas tendencias tecnológicas. También disfruto compartir mis conocimientos con otros y aprender de la comunidad de desarrolladores.</p>
        <p className={styles.p}>Mi enfoque principal es escribir código limpio y eficiente, siguiendo las mejores prácticas de desarrollo. Creo firmemente en la importancia de la colaboración y la comunicación efectiva en equipos de desarrollo. Me esfuerzo por crear soluciones que sean escalables, mantenibles y de alta calidad.</p>
        <p className={styles.p}>Cuando no estoy programando, me gusta ver series, animes y explorar nuevas tecnologías. También disfruto de la música, la lectura y las finanzas personales.</p>
        <p className={styles.p}>¡Gracias por visitar mi página 🎉! Acá abajo te dejo mis redes sociales para que puedas contactarme</p>
      </section>
      <SocialNetwork />
    </section>
  )
}