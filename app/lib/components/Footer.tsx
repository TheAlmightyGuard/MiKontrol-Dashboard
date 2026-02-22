"use client"

import Image from 'next/image';
import { redirect } from 'next/navigation';
import logo from "@/public/navbar-logo.svg";
import { IoLogoDiscord, IoLogoGithub } from 'react-icons/io5';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="footer-logo" onClick={() => redirect('/')}>
                    <Image src={logo} alt="MiKontrol" width={220}/>
                </div>
                <main className='footer-map'>
                    <section className='footer-section'>
                        <h1 className='footer-section-h1'>MiKontrol</h1>
                        <button className='footer-section-btn'>Add to your Discord Server</button>
                        <button className='footer-section-btn'>Documentation</button>
                        <button className='footer-section-btn'>System Status</button>
                    </section>

                    <section className='footer-section'>
                        <h1 className='footer-section-h1'>Developer</h1>
                        <button className='footer-section-btn'>Developer Portal</button>
                        <button className='footer-section-btn'>Support</button>
                    </section>

                    <section className='footer-section'>
                        <h1 className='footer-section-h1'>Legal</h1>
                        <button className='footer-section-btn'>Privacy Policy</button>
                        <button className='footer-section-btn'>Terms of Service</button>
                        <button className='footer-section-btn'>Cookies Policy</button>
                    </section>

                    <section className='footer-section'>
                        <h1 className='footer-section-h1'>Project Mikoto™</h1>
                        <button className='footer-section-btn'>Project Information</button>
                        <button className='footer-section-btn'>Contributors</button>
                        <button className='footer-section-btn'>Contact Information</button>
                    </section>
                </main>

                <main className='footer-socials'>
                    <button className='footer-social-btn'>
                        <IoLogoDiscord/>
                    </button>

                    <button className='footer-social-btn'>
                        <IoLogoGithub/>
                    </button>

                    <button className='footer-social-btn'>
                        <FaSquareXTwitter/>
                    </button>
                </main>

                <p className='footer-copyright'>© Copyright 2026 Project Mikoto Ltd.</p>
            </footer>
        </>
    )
}