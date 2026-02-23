import Navbar from '@/app/lib/components/Navbar';
import Footer from '@/app/lib/components/Footer';

export default function Dashboard() {

  return (
    <div className='background'>
      <header>
        <Navbar/>
      </header>
      <Footer/>
    </div>
  );
}
