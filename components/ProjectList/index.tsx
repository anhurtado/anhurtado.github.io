import styles from './styles.module.scss'
import { projectData } from '@/data/project.data'

export default function ProjectList() {
  return (
    <section>
      {projectData.projects.map((item) => (
        <a className="flex mb-4" href={item.url} target="_blank" key={item.url}>
          <section className="text-left">
            <p className="uppercase">{item.title}</p>
            <p>{item.subtitle}</p>
            <p>
              {item.tech.map((tech) => (
              <span className="bg-gray-300 text-black pl-2 pr-2 mr-2 rounded" key={tech}>{tech}&nbsp;</span>
            ))}
            </p>
          </section>
        </a>
      ))}
    </section>
  )
}