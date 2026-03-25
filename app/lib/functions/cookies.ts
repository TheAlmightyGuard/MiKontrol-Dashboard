"use server"

import { cookies } from "next/headers"
import { User, Mutuals, Guild, GuildMemberCount } from "@/app/lib/interfaces/user"
import { redirect } from "next/navigation"

export async function getUser() : Promise<User | null> {

    const cookieStore = await cookies()

    const user = await fetch(process.env.NEXT_PUBLIC_API_USER!, {
    headers: {
        cookie : `session=${cookieStore.get('session')?.value}`
    }
    })

    var data : User | null = null

    if (user.status == 200) {
        data  = await user.json()
    }

    return data
}

export async function getMutuals() : Promise<Mutuals|null> {

    const cookieStore = await cookies()

    var mutuals = await fetch(process.env.NEXT_PUBLIC_API_MUTUALS!, {
        headers: {
        cookie : `session=${cookieStore.get('session')?.value}`
        }
    })

    var data : Mutuals | null = null

    if (mutuals.status == 200) {
        data  = await mutuals.json()
    }

    return data
}

export async function getGuildMembers(guildId : string) : Promise<GuildMemberCount|null> {

    const cookieStore = await cookies()

    var memberCount = await fetch(process.env.NEXT_PUBLIC_API_GUILDCOUNT!, {
        headers: {
        cookie : `session=${cookieStore.get('session')?.value}; guild=${guildId.toString()}`
        }
    })

    var data : GuildMemberCount | null = null

    if (memberCount.status == 200) {
        data  = await memberCount.json()
    }

    return data
}

export async function getGuild(guildId : string) : Promise<Guild|null> {

    const cookieStore = await cookies()

    var memberCount = await fetch(process.env.NEXT_PUBLIC_API_GUILD!, {
        headers: {
        cookie : `session=${cookieStore.get('session')?.value}; guild=${guildId.toString()}`
        }
    })

    var data : Guild | null = null

    if (memberCount.status == 200) {
        data  = await memberCount.json()
    }

    return data
}

export async function logout() {
    const isProduction = process.env.NODE_ENV == "production"

    const cookieStore = await cookies()
    cookieStore.delete({
        name: 'session',
        path: '/',
        sameSite: 'lax',
        domain: isProduction ? '.mikontrol.ca' : undefined,
        secure: isProduction
    })
    redirect('/')
}