"use client"

import { Mutuals, MutualGuild } from "@/app/lib/interfaces/user";
import Image from "next/image";

export default function Dashboard_Onboard({data} : {data : Mutuals}) {

    var guilds : MutualGuild[] = []

    data.mutual_guilds.forEach((data) => {
        guilds.push(data)
    })

    return (
        <>  
            <h1 className="font-bold w-full text-center">Pick a Discord Server to Modify</h1>
            <div className="dashboard-onboard-guilds">
                {guilds.length == 0 ? 
                    <></> 
                : 
                    guilds.map((guild) => (
                        <button className="dashboard-onboard-guild-btn">
                            <Image key={`img_${guild.id}`} src={guild.icon} alt='' width={100} height={100}/>
                            <h1 key={guild.id}>{guild.name}</h1>
                        </button>
                        
                    ))
                }
            </div>
        </>
    );
}