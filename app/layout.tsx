import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import styles from './styles.module.scss'

const nunito = Nunito({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Anthony Hurtado',
  description: 'Anthony Hurtado. Software Engineer / Moldeado por códigos y café',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-VE">
      <body className={`${nunito.className} ${styles.body}`}>{children}</body>
    </html>
  )
}
