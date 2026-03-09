"use client"

import Image from 'next/image';
import { redirect, RedirectType } from 'next/navigation';
import logo from "@/public/navbar-logo.svg";
import { IoLogoDiscord, IoLogoGithub } from 'react-icons/io5';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="footer-logo" onClick={() => redirect('/', RedirectType.push)}>
                    <Image src={logo} alt="MiKontrol" width={220}/>
                </div>
                <main className='footer-map'>
                    <section className='footer-section'>
                        <h1 className='footer-section-h1'>MiKontrol</h1>
                        <button className='footer-section-btn' onClick={() => redirect(process.env.NEXT_PUBLIC_BOT_INVITE!, RedirectType.push)}>Add to your Discord Server</button>
                        <button className='footer-section-btn' onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_DOCS ?? "/", RedirectType.push)}>Documentation</button>
                        <button className='footer-section-btn' onClick={() => redirect(process.env.NEXT_PUBLIC_BOT_INVITE ?? "/", RedirectType.push)}>System Status</button>
                    </section>

                    <section className='footer-section'>
                        <h1 className='footer-section-h1'>Developer</h1>
                        <button className='footer-section-btn' onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_DEVELOPER ?? "/", RedirectType.push)}>Developer Portal</button>
                        <button className='footer-section-btn' onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_SUPPORT ?? "/", RedirectType.push)}>Support</button>
                    </section>

                    <section className='footer-section'>
                        <h1 className='footer-section-h1'>Legal</h1>
                        <button className='footer-section-btn' onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_PRIVACY ?? "/", RedirectType.push)}>Privacy Policy</button>
                        <button className='footer-section-btn' onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_TERMS ?? "/", RedirectType.push)}>Terms of Service</button>
                        <button className='footer-section-btn' onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_COOKIES ?? "/", RedirectType.push)}>Cookies Policy</button>
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