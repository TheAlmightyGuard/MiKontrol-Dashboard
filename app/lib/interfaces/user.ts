export interface User {
    name: string,
    id: number,
    avatar: string,
    bot: boolean
}

export interface MutualGuild {
    name: string,
    id: number,
    icon: string
}

export interface Mutuals {
    mutual_guilds: MutualGuild[],
    mutual_count: number
}