"use client"

import Image from 'next/image';
import logo from "@/public/navbar-logo.svg";
import NavbarNews from './NavbarNews';
import HamburgerMenu from './HamburgerMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { redirect } from 'next/navigation';

import { useState } from 'react';

export default function Navbar() {

    const [isOpen, setHamburger] = useState(false)

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

                    <button className="navbar-login" onClick={() => redirect(process.env.NEXT_PUBLIC_AUTH_LOGIN!)}>Login with Discord</button>
                    <button className="navbar-hamburger" onClick={() => setHamburger(!isOpen)}>
                        <GiHamburgerMenu/>
                    </button>
                </div>
                <NavbarNews/>
            </nav>
        </>
    )
}