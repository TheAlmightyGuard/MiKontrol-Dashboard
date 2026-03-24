"use client"

import { DonutChart } from "@/app/lib/components/ChartComponents/DonutChart";
import { GuildMemberCount } from "@/app/lib/interfaces/user";

export default function Overview_MemberCount({data} : {data : GuildMemberCount}) {

    return (
        <>
            <div className="overview-section">
                <h1 className="overview-section-header">
                    Member Distribution by Roles
                </h1>
                <div className="flex-1 w-full max-h-[200px] flex items-center justify-center py-5">
                    <DonutChart
                        data={data.by_role}
                        className="w-full h-full"
                        variant="pie"
                        category="name"
                        value="amount"
                        
                    />
                </div>

                <p className="overview-section-p mb-5">
                    Total Members: {data.total}
                </p>
            </div>

        </>
    )
}