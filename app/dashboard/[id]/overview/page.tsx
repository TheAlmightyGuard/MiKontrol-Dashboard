"use server"

import { getGuildMembers, getMutuals, getUser } from "@/app/lib/functions/cookies"
import { redirect } from "next/navigation"
import Image from 'next/image';
import Overview_MemberCount from "./props/MemberCount";
import MemberJoinLeave from "./props/ChannelDistribution";
import GuildInformation from "./props/GuildInformation";

export default async function Dashboard_Overview({
  params,
}: {
  params: Promise<{ id: string }>
}) {

    const { id } = await params
    const userData = await getUser()
    const mutuals = await getMutuals()

    const guild = mutuals!.mutual_guilds.find((e) => {
        return e.id.toString() == id
    }) || null

    if (guild == null || userData == null) {
        redirect(`/dashboard`)
    }

    const countData = await getGuildMembers(guild.id)

    if (countData == null) {
        redirect(`/dashboard`)
    }

    return (
        <>
            <header className="overview-header">
                <section className="overview-header-info">
                    <h2 className="overview-header-welcome">WELCOME BACK, {userData.name.toUpperCase()}!</h2>
                    <h1 className="overview-header-name">{guild.name}</h1>
                    <p className="overview-header-id">Server ID: {guild.id}</p>
                </section>
                <div className="overview-header-icon">
                    <Image src={guild.icon} alt="Guild Icon" width={130} height={130}/>
                </div>
            </header>
            <section className="overview-grid">
                <Overview_MemberCount data={countData}/>
                <MemberJoinLeave data={guild}/>
                <GuildInformation data={guild}/>
                
                <div className="overview-section"></div>
            </section>
        </>
    )
}