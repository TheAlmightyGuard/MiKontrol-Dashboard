"use server"

import Dashboard_Onboard from "@/app/dashboard/dashboard_onboarding"

import Footer from "../lib/components/Footer";
import Navbar from "../lib/components/Navbar";
import { redirect } from "next/navigation"

import { getUser, getMutual } from "@/app/lib/functions/cookies";

export default async function Dashboard() {

  const userData = await getUser()
  const mutuals = await getMutual()

  if (userData == null || mutuals == null) {
    redirect(process.env.NEXT_PUBLIC_AUTH_LOGIN!)
  }

  return (
    <div className='background'>
      <header>
        <Navbar data={userData}/>
      </header>
      <main>
        <Dashboard_Onboard data={mutuals}/>
      </main>
      <Footer/>
    </div>
  )
}
