"use client"
import { Icon } from '@iconify/react';
import styles from './styles.module.scss'
import Title from '@/components/Title'


export default function WriteMe() {
  const email = "anhurtado@outlook.com";

  const handleSend = () => {
    window.open(`mailto:${email}`)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
      <section className={styles.emailBox}>
        <p className={styles.email}>{email}</p>
        <section className={styles.buttonBox}>
          <button className={styles.button} onClick={handleSend}>
            <Icon icon="material-symbols:send" width="1rem" height="1rem"  style={{color: 'white'}} />
          </button>
          <button className={styles.button} onClick={handleCopy}>
            <Icon icon="ph:copy-bold" width="1rem" height="1rem"  style={{color: 'white'}} />
          </button>
        </section>
      </section>
  )
}