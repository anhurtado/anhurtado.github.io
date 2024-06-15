import Image from 'next/image'
import styles from './styles.module.scss'
import { socialNetworkData } from '@/data/social-network.data'

export default function SocialNetwork() {
  return (
    <section>
      <section className={styles.socialItem}>
        {socialNetworkData.networks.map((item) => (
          <a href={item.url} target="_blank" key={item.alt}>
            <Image
              className={styles.socialIcon}
              src={`/icons/${item.icon}`}
              alt={item.alt}
              title={item.alt}
              width={30}
              height={30} />
          </a>
        ))}
      </section>
    </section>
  )
}