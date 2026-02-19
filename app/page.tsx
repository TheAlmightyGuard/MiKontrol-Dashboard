import Navbar from './lib/components/Navbar';
import Image from 'next/image';
import logo from "@/public/navbarIcon.svg";

export default function Home() {

  return (
    <div className='background'>
      <header>
        <Navbar/>
      </header>
      <main className='main-content'>
        <section className='introduction-area'>
          <div className='introduction-text'>
            <h1 className='introduction-heading'>MiKontrol</h1>
            <h2 className='introduction-sub'>The simplest, yet advanced way to moderation and connectivity</h2>
            <p className='introduction-paragraph'>Centralized Discord moderation, real-time server analytics, and cross-platform connections to grow and manage your community.</p>
          </div>
          <div className='introduction-logo'>
            <Image src={logo} alt="MiKontrol" width={400}/>
          </div>
        </section>
      </main>
    </div>
  );
}
