"use server"

import Home from "@/app/homepage"
import Navbar from './lib/components/Navbar';
import Footer from './lib/components/Footer';

import { getUser } from "@/app/lib/functions/cookies";

export default async function Page() {

    const userData = await getUser()

    return (
        <div className='background'>
            <header>
                <Navbar data={userData}/>
            </header>
            <Home/>
            <Footer/>
        </div>
    )
}