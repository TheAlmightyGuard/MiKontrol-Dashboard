"use client"

import Image from 'next/image';
import logo from "@/public/navbar-logo.svg";
import NavbarNews from './NavbarNews';
import HamburgerMenu from './HamburgerMenu';

import { logout } from '@/app/lib/functions/cookies';

import { IoPersonCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { GiHamburgerMenu } from 'react-icons/gi';

import { redirect } from 'next/navigation';

import { useState } from 'react';

import { User } from "@/app/lib/interfaces/user";

export default function Navbar({data} : {data : User | null}) {

    const [isOpen, setHamburger] = useState(false)
    const [profileOpen, setProfileBox] = useState(false)

    return (
        <>
            <HamburgerMenu isOpen={isOpen}/>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" onClick={() => redirect('/')}>
                        <Image src={logo} alt="MiKontrol" width={180}/>
                    </div>

                    <div className="navbar-map">
                        <button className="navbar-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_ABOUT!)}>About MiKontrol</button>
                        <button className="navbar-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_FEATURES!)}>Features</button>
                        <button className="navbar-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_DOCS!)}>Documentation</button>
                        <button className="navbar-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_SUPPORT!)}>Support</button>
                        <button className="navbar-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_STATUS!)}>System Status</button>
                    </div>

                    {data != null ? 
                        <div className='navbar-profile-container'>
                            <button className='navbar-profile' onClick={() => {
                                setProfileBox(!profileOpen)
                            }}>
                                <Image className='rounded-full select-none' src={data.avatar} alt={''} width={50} height={50}/>
                            </button>

                            <main className={`navbar-profile-dropbox ${profileOpen ? 'visible!' : 'hidden!'}`}>
                                <section className='navbar-profile-card'>
                                    <button className='navbar-profile cursor-auto!'>
                                        <Image className='rounded-full' src={data.avatar} alt={''} width={50} height={50}/>
                                    </button>
                                    <h1 className='navbar-profile-greetings'>Hello, {data.name}!</h1>
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
                            <button className="navbar-login" onClick={() => redirect(process.env.NEXT_PUBLIC_AUTH_LOGIN!)}>Login with Discord</button>
                            <button className="navbar-hamburger" onClick={() => setHamburger(!isOpen)}>
                                <GiHamburgerMenu/>
                            </button>
                        </>
                        
                    }
                    

                    
                </div>
                <NavbarNews/>
            </nav>
        </>
    )
}