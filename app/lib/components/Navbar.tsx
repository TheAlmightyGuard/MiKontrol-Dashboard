"use client"

import Image from 'next/image';
import logo from "@/public/navbar-logo.svg";
import NavbarNews from './NavbarNews';
import HamburgerMenu from './HamburgerMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { redirect } from 'next/navigation';

import { useState, use } from 'react';

import { User } from "@/app/lib/interfaces/user";

export default function Navbar({data} : {data : User | null}) {

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

                    {data != null ? 
                        <button className='navbar-profile'>
                            <Image className='rounded-full' src={data.avatar} alt={''} width={50} height={50}/>
                        </button>
                        
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