"use server"

import { cookies } from "next/headers"
import { User, Mutuals } from "@/app/lib/interfaces/user"
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

export async function getMutual() : Promise<Mutuals|null> {

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

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
    redirect('/')
}