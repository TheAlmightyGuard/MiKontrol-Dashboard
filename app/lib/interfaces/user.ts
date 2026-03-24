export interface User {
    name: string,
    id: number,
    avatar: string,
    bot: boolean
}

export interface GuildChannelBreakdown {
    name: string,
    amount: number
}

export interface Guild {
    name: string,
    id: string,
    icon: string,
    channels: GuildChannelBreakdown[],
    owner: User,
    totalMembers: number,
    createdAt: number,
    nsfw_level: number

}

// Important, structure is based on charts structure
export interface GuildMemberCountByRole {
    name: string,
    amount: number
}

export interface GuildMemberCount {
    by_role: GuildMemberCountByRole[],
    total: number
}

export interface Mutuals {
    mutual_guilds: Guild[],
    mutual_count: number
}