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
                        <button className="navbar-mapbtn" onClick={() => redirect('/about')}>About MiKontrol</button>
                        <button className="navbar-mapbtn" onClick={() => redirect('/features')}>Features</button>
                        <button className="navbar-mapbtn" onClick={() => redirect('https://docs.mikontrol.ca')}>Documentation</button>
                        <button className="navbar-mapbtn" onClick={() => redirect('https://support.mikontrol.ca')}>Support</button>
                        <button className="navbar-mapbtn" onClick={() => redirect('https://status.mikontrol.ca')}>System Status</button>
                    </div>

                    <button className="navbar-login" onClick={() => redirect('https://api.mikontrol.ca/auth/login')}>Login with Discord</button>
                    <button className="navbar-hamburger" onClick={() => setHamburger(!isOpen)}>
                        <GiHamburgerMenu/>
                    </button>
                </div>
                <NavbarNews/>
            </nav>
        </>
    )
}