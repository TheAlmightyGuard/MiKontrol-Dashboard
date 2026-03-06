"use server"

import Navbar from '@/app/lib/components/Navbar'
import Footer from '@/app/lib/components/Footer';
import Support from '@/app/support/support';
import { getUser } from "@/app/lib/functions/cookies";

export default async function Page() {

  const userData = await getUser()

  return (
    <div className='background'>
        <header>
            <Navbar data={userData}/>
        </header>
        <Support/>
        <Footer/>
    </div>
  );
}
