import type { Metadata } from 'next'
import Link from 'next/link'
import ProjectList from '@/components/ProjectList'
import SocialNetwork from '@/components/SocialNetwork'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'Mis Proyectos - @anhurtadop'
}

export default function Projects() {
  return (
    <section>
      <Link href="/" className={styles.backLink}>Regresar</Link>
      <section className="text-left mt-4 mb-4">
        <h2 className={styles.titlePage}>Mis Proyectos</h2>
        <p className={styles.subtitle}>En esta sección podrás ver los proyectos que he realizado</p>
        <ProjectList />
      </section>
      <SocialNetwork />
    </section>
  )
}