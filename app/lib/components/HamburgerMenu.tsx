import logo from "@/public/navbar-logo.svg";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function HamburgerMenu() {
    return (
        <>
            <nav className="hamburger-menu">
                <div className="hamburger-container">
                    <div className="hamburger-logo" onClick={() => redirect('/')}>
                        <Image src={logo} alt="MiKontrol" width={140}/>
                    </div>
                    <div className="hamburger-map">
                        <button className="hamburger-mapbtn" onClick={() => redirect('/about')}>About MiKontrol</button>
                        <button className="hamburger-mapbtn" onClick={() => redirect('/features')}>Features</button>
                        <button className="hamburger-mapbtn" onClick={() => redirect('https://docs.mikontrol.ca')}>Documentation</button>
                        <button className="hamburger-mapbtn" onClick={() => redirect('/support')}>Support</button>
                        <button className="hamburger-mapbtn" onClick={() => redirect('https://status.mikontrol.ca')}>System Status</button>
                    </div>

                    <button className="hamburger-login" onClick={() => redirect('https://api.mikontrol.ca/auth/login')}>Login with Discord</button>
                </div>
            </nav>
        </>
    )
}