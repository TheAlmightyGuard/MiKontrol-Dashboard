import logo from "@/public/navbar-logo.svg";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function HamburgerMenu({isOpen} : {isOpen : boolean}) {

    return (
        <>
            <nav className={`hamburger-menu ${isOpen ? "" : "hidden"}`}>
                <div className="hamburger-container">
                    <div className="hamburger-logo" onClick={() => redirect('/')}>
                        <Image src={logo} alt="MiKontrol" width={140}/>
                    </div>
                    <div className="hamburger-map">
                        <button className="hamburger-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_ABOUT!)}>About MiKontrol</button>
                        <button className="hamburger-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_FEATURES!)}>Features</button>
                        <button className="hamburger-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_DOCS!)}>Documentation</button>
                        <button className="hamburger-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_SUPPORT!)}>Support</button>
                        <button className="hamburger-mapbtn" onClick={() => redirect(process.env.NEXT_PUBLIC_WEB_STATUS!)}>System Status</button>
                    </div>

                    <button className="hamburger-login" onClick={() => redirect(process.env.NEXT_PUBLIC_AUTH_LOGIN!)}>Login with Discord</button>
                </div>
            </nav>
        </>
    )
}