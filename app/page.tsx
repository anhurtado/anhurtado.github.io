import SocialNetwork from '@/components/SocialNetwork'
import Profile from '@/components/Profile'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="mb-5">
         <Profile />
      </section>
      <section className="mb-5">
      <SocialNetwork />
      </section>
      <section className="w-full mb-5">
        <Navbar />
      </section>
      <footer className="text-center">CREADO CON ❤️ Y CAFÉ</footer>
    </main>
  )
}
