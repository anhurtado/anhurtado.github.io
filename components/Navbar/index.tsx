import styles from './styles.module.scss'
import { linkData } from '@/data/link.data'

export default function Navbar() {
  return (
    <section>
      <section className={styles.navItem}>
        {linkData.links.map((item) => (
          <a href={item.url} target={item.target} key={item.title} className={styles.button}>
            {item.title}
          </a>
        ))}
      </section>
    </section>
  )
}