"use client"

import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline, IoTicketOutline} from "react-icons/io5";
import { MdOutlinePeopleAlt, MdOutlineMarkEmailRead } from "react-icons/md";
import { FaHammer } from "react-icons/fa6";

import { useState } from "react";

export default function DashboardSidenav() {

    const [hover, setHover] = useState(false)
    return (
        <nav className="sidenav" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <section className="sidenav-section">
                <main className="sidenav-button">
                    <div className="sidenav-button-icon">
                        <AiOutlineHome/>
                    </div>
                    <div className={`sidenav-button-h1-container`}>
                        <h1 className={`sidenav-button-h1 ${hover ? 'visible!' : 'hidden!'}`}>Guild Overview</h1>
                    </div>
                </main>

                <main className="sidenav-button">
                    <div className="sidenav-button-icon">
                        <IoSettingsOutline/>
                    </div>
                    <div className={`sidenav-button-h1-container`}>
                        <h1 className={`sidenav-button-h1 ${hover ? 'visible!' : 'hidden!'}`}>Guild Settings</h1>
                    </div>
                </main>

                <main className="sidenav-button">
                    <div className="sidenav-button-icon">
                        <MdOutlinePeopleAlt/>
                    </div>
                    <div className={`sidenav-button-h1-container`}>
                        <h1 className={`sidenav-button-h1 ${hover ? 'visible!' : 'hidden!'}`}>Guild Members</h1>
                    </div>
                </main>
            </section>

            <section className="sidenav-section">
                <main className="sidenav-button">
                    <div className="sidenav-button-icon">
                        <FaHammer/>
                    </div>
                    <div className={`sidenav-button-h1-container`}>
                        <h1 className={`sidenav-button-h1 ${hover ? 'visible!' : 'hidden!'}`}>Moderation</h1>
                    </div>
                </main>

                <main className="sidenav-button">
                    <div className="sidenav-button-icon">
                        <IoTicketOutline/>
                    </div>
                    <div className={`sidenav-button-h1-container`}>
                        <h1 className={`sidenav-button-h1 ${hover ? 'visible!' : 'hidden!'}`}>Ticket System</h1>
                    </div>
                </main>

                <main className="sidenav-button">
                    <div className="sidenav-button-icon">
                        <MdOutlineMarkEmailRead/>
                    </div>
                    <div className={`sidenav-button-h1-container`}>
                        <h1 className={`sidenav-button-h1 ${hover ? 'visible!' : 'hidden!'}`}>Email Verification</h1>
                    </div>
                </main>
            </section>
        </nav>
    )
}