"use server"

import Dashboard_Onboard from "@/app/dashboard/[[...id]]/props/dashboard_onboarding"

import Footer from "@/app/lib/components/Footer";
import Navbar from "@/app/lib/components/Navbar";
import { redirect } from "next/navigation"

import { getUser, getMutual } from "@/app/lib/functions/cookies";

export default async function Dashboard({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params
  
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

      {
        id == null ? <Dashboard_Onboard data={mutuals}/>
        :
        <></>
      }
      
      <Footer/>
    </div>
  )
}
