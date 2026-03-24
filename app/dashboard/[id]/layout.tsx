"use server"

import DashboardSidenav from "@/app/lib/components/dashboard/DashboardSidenav";
import DashboardNavbar from "@/app/lib/components/dashboard/DashboardNavbar";

import { redirect } from "next/navigation"

import { getUser, getMutuals } from "@/app/lib/functions/cookies";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {

    const { id } = await params

    const userData = await getUser()
    const mutuals = await getMutuals()

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
        <div className="background">
            <DashboardSidenav/>
            <header>
                <DashboardNavbar userData={userData} guildData={selectedGuild}/>
            </header>
            <main className="min-h-screen mx-40 mt-35">
                {children}
            </main>
        </div>
    )
}