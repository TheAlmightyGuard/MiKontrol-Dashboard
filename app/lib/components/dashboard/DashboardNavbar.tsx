"use client"

import Image from 'next/image';
import logo from "@/public/navbarIcon.svg";
import NavbarNews from '../NavbarNews';
import HamburgerMenu from '../HamburgerMenu';

import { logout } from '@/app/lib/functions/cookies';

import { IoPersonCircleOutline, IoSettingsOutline, IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { GiHamburgerMenu } from 'react-icons/gi';

import { redirect, RedirectType } from 'next/navigation';

import { useState } from 'react';

import { User, MutualGuild } from "@/app/lib/interfaces/user";

export default function DashboardNavbar({userData, guildData} : {userData : User | null, guildData : MutualGuild | null}) {

    if (userData == null || guildData == null) {
        redirect('/dashboard', RedirectType.push)
    }

    const [isOpen, setHamburger] = useState(false)
    const [profileOpen, setProfileBox] = useState(false)

    return (
        <>
            <HamburgerMenu isOpen={isOpen}/>
            <nav className="navbar-dashboard">
                <div className="navbar-dashboard-container">
                    <div className="navbar-logo" onClick={() => redirect('/', RedirectType.push)}>
                        <Image src={logo} alt="MiKontrol" width={50}/>
                    </div>

                    <div className="navbar-dashboard-map">
                        <button className="navbar-mapbtn text-base!" onClick={() => redirect('/dashboard', RedirectType.push)}>
                            <IoHome/>
                        </button>
                        <section className='navbar-dashboard-nav'>
                            <div className="navbar-dashboard-arrow">
                                <IoIosArrowForward/>
                            </div>
                            <button className="navbar-dashboard-mapbtn" onClick={() => redirect(`/dashboard/${guildData.id}`, RedirectType.push)}>{guildData.name}</button>
                        </section>
                    </div>

                    {userData != null ? 
                        <div className='navbar-profile-container'>
                            <button className='navbar-dashboard-profile' onClick={() => {
                                setProfileBox(!profileOpen)
                            }}>
                                <Image className='rounded-full select-none' src={userData.avatar} alt={''} width={50} height={50}/>
                            </button>

                            <main className={`navbar-profile-dropbox ${profileOpen ? 'visible!' : 'hidden!'}`}>
                                <section className='navbar-profile-card'>
                                    <button className='navbar-profile cursor-auto!'>
                                        <Image className='rounded-full' src={userData.avatar} alt={''} width={50} height={50}/>
                                    </button>
                                    <h1 className='navbar-profile-greetings'>Hello, {userData.name}!</h1>
                                </section>

                                <section className='navbar-profile-map'>
                                    <button className='navbar-profile-button'>
                                        <div className='navbar-profile-button-icon'>
                                            <IoPersonCircleOutline/>
                                        </div>
                                        Profile
                                    </button>
                                    <button className='navbar-profile-button'>
                                        <div className='navbar-profile-button-icon'>
                                            <IoSettingsOutline/>
                                        </div>
                                        Settings
                                    </button>
                                    <button className='navbar-profile-button'>
                                        <div className='navbar-profile-button-icon'>
                                            <RxQuestionMarkCircled/>
                                        </div>
                                        Help
                                    </button>
                                    <button className='navbar-profile-button' onClick={async () => await logout()}>
                                        <div className='navbar-profile-button-icon'>
                                            <FaArrowRightLong/>
                                        </div>
                                        Logout
                                    </button>
                                </section>
                            </main>
                            
                        </div>
                        :
                        <>
                            <button className="navbar-login" onClick={() => redirect(process.env.NEXT_PUBLIC_AUTH_LOGIN!, RedirectType.push)}>Login with Discord</button>
                            <button className="navbar-hamburger" onClick={() => setHamburger(!isOpen)}>
                                <GiHamburgerMenu/>
                            </button>
                        </>
                        
                    }
                    

                    
                </div>
            </nav>
            <div className="dashboard-map">
                <button className="navbar-mapbtn text-base!" onClick={() => redirect('/dashboard', RedirectType.push)}>
                    <IoHome/>
                </button>
                <section className='navbar-dashboard-nav'>
                    <div className="navbar-dashboard-arrow">
                        <IoIosArrowForward/>
                    </div>
                    <button className="navbar-dashboard-mapbtn" onClick={() => redirect(`/dashboard/${guildData.id}`, RedirectType.push)}>{guildData.name}</button>
                </section>
            </div>
        </>
    )
}