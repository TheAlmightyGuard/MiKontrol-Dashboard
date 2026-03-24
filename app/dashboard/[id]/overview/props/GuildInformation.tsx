"use client"

import { Guild } from "@/app/lib/interfaces/user";

export default function GuildInformation({data} : {data : Guild}) {

    return (
        <>
            <div className="overview-section gap-3">
                <h1 className="overview-section-header mb-3">
                    Guild Information
                </h1>

                <p className="overview-section-p text-balance font-normal!">
                    Owner: {data.owner.name} ({data.owner.id})
                </p>
                <p className="overview-section-p text-balance font-normal!">
                    Total Members: {data.totalMembers} Members (including Bots)
                </p>
                <p className="overview-section-p text-balance font-normal!">
                    NSFW Level: Level {data.nsfw_level}
                </p>
                <p className="overview-section-p text-balance font-normal!">
                    Created At: {new Date(data.createdAt * 1000).toDateString()}
                </p>
            </div>

        </>
    )
}