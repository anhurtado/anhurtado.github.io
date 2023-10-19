import type { Metadata } from 'next'
import Script from 'next/script'
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
      <body className={`${nunito.className} ${styles.body}`}>
        {children}

        {/** Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z4B8PL1ZD0" />
        <Script src="/scripts/ga.js" />
        <Script src="/scripts/gtm.js" />
      </body>
    </html>
  )
}
