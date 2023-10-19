import styles from './styles.module.scss'
import { linkData } from '@/data/link.data'

export default function Navbar() {
  return (
    <section className="flex flex-col w-full text-center">
      {linkData.links.map((item) => (
        <a href={item.url} target={item.target} key={item.title} className={styles.button}>
          {item.title}
        </a>
      ))}
    </section>
  )
}