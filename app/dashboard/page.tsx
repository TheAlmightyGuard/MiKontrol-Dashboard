"use server"

import Footer from "@/app/lib/components/Footer";
import Navbar from "@/app/lib/components/Navbar";
import Dashboard_Onboard from "@/app/dashboard/props/dashboard_onboarding"

import { getUser, getMutuals } from "@/app/lib/functions/cookies";

import { redirect } from "next/navigation"

export default async function Dashboard_Main() {

    const userData = await getUser()
    const mutuals = await getMutuals()

    if (userData == null || mutuals == null) {
        redirect(process.env.NEXT_PUBLIC_AUTH_LOGIN!)
    }

    return (
        <>
            <div className="background">
                <header>
                    <Navbar data={userData}/>
                </header>
                <Dashboard_Onboard data={mutuals}/>
                <Footer/>
            </div>
        </>
    )
}