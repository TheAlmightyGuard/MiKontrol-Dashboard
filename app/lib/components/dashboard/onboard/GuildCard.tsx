import Image from 'next/image'

import { MutualGuild } from "@/app/lib/interfaces/user";

export default function GuildCard({data} : {data : MutualGuild}) {
    return (
        <button className="dashboard-onboard-guild-btn">
            <Image key={`img_${data.id}`} src={data.icon} alt='' width={100} height={100}/>
            <h1 key={data.id} className='dashboard-onboard-guild-header'>{data.name}</h1>
        </button>
    )
}