"use client"

import { DonutChart } from "@/app/lib/components/ChartComponents/DonutChart";
import { Guild } from "@/app/lib/interfaces/user";

export default function ChannelDistribution({data} : {data : Guild}) {

    var totalChannels = 0;

    for (let index = 0; index < data.channels.length; index++) {
        totalChannels += data.channels[index].amount    
    }

    return (
        <>
            <div className="overview-section">
                <h1 className="overview-section-header">
                    Channel Distribution
                </h1>
                <div className="flex-1 w-full max-h-[200px] flex items-center justify-center py-5">
                    <DonutChart
                        data={data.channels}
                        className="w-full h-full"
                        variant="pie"
                        category="name"
                        value="amount"
                        
                    />
                </div>

                <p className="overview-section-p mb-5">
                    Total Members: {totalChannels}
                </p>
            </div>

        </>
    )
}