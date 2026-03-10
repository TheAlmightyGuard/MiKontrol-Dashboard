"use server"

import Dashboard_Onboard from "@/app/dashboard/[[...id]]/props/dashboard_onboarding"
import Dashboard from "./dashboard";

import Footer from "@/app/lib/components/Footer";
import Navbar from "@/app/lib/components/Navbar";
import DashboardNavbar from "@/app/lib/components/dashboard/DashboardNavbar";
import { redirect } from "next/navigation"

import { getUser, getMutual } from "@/app/lib/functions/cookies";
import DashboardSidenav from "@/app/lib/components/dashboard/DashboardSidenav";

export default async function Dashboard_Main({
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

  const selectedGuild = mutuals.mutual_guilds.find((e) => {
    return e.id.toString() == id
  }) || null

  if (selectedGuild == null && id != null) {
    // Will make a popup instead of redirect
    redirect('/dashboard')
  }

  return (
    <div className='background'>

      {
        id == null ? 

        // If no selected

        <>
          <header>
            <Navbar data={userData}/>
          </header>
          <Dashboard_Onboard data={mutuals}/>
          <Footer/>
        </>
        
        :

        // If selected

        <>
          <DashboardSidenav/>
          <header>
            <DashboardNavbar userData={userData} guildData={selectedGuild}/>
          </header>
          <Dashboard/>
        </>
      }
    </div>
  )
}
