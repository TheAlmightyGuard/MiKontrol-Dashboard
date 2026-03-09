"use client"

import { Mutuals, MutualGuild } from "@/app/lib/interfaces/user";
import GuildCard from "@/app/lib/components/dashboard/onboard/GuildCard";

import { IoIosAddCircleOutline } from "react-icons/io";
import { redirect } from "next/navigation";

export default function Dashboard_Onboard({data} : {data : Mutuals}) {

    var guilds : MutualGuild[] = []

    data.mutual_guilds.forEach((data) => {
        guilds.push(data)
    })

    return (
        <>  
            <main className="dashboard-onboard-content">
                <section className="dashboard-onboard-header">
                    <h1 className="font-bold w-full text-center">Choose your server</h1>
                </section>
                <section className="dashboard-onboard-guilds">
                    {guilds.length == 0 ? 
                        <></> 
                    : 
                        guilds.map((guild) => (
                            <GuildCard key={guild.id} data={guild}/>
                        ))
                    }

                    <button className="dashboard-onboard-guild-btn" onClick={(e) => {redirect(process.env.NEXT_PUBLIC_WEB_SETUP!)}}>
                        <div className="flex items-center justify-center text-9xl w-25 h-25">
                            <IoIosAddCircleOutline/>
                        </div>
                        <h1 className='dashboard-onboard-guild-header'>Add to your Server!</h1>
                    </button>
                </section>
            </main>
        </>
    );
}