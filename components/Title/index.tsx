import styles from './styles.module.scss'

interface TitleProps {
  icon: string
  title: string
}

export default function Title({icon, title}: Readonly<TitleProps>) {
  return (
    <section className={styles.title}>
      <h3>{title}</h3>
    </section>
  )
}