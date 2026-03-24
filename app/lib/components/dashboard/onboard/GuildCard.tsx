import Image from 'next/image'

import { Guild } from "@/app/lib/interfaces/user";
import { redirect, RedirectType } from 'next/navigation';

export default function GuildCard({data} : {data : Guild}) {
    
    return (
        <button className="dashboard-onboard-guild-btn" onClick={(e) => {redirect(`/dashboard/${data.id}/overview`, RedirectType.push)}}>
            <Image key={`img_${data.id}`} src={data.icon} alt='' width={100} height={100}/>
            <h1 key={data.id} className='dashboard-onboard-guild-header'>{data.name}</h1>
        </button>
    )
}