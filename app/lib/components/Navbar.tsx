import Image from 'next/image';
import logo from "@/public/navbar-logo.svg";
import NavbarNews from './NavbarNews';
import HamburgerMenu from './HamburgerMenu';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
    return (
        <>
            <HamburgerMenu/>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <Image src={logo} alt="MiKontrol" width={180}/>
                    </div>

                    <div className="navbar-map">
                        <button className="navbar-mapbtn">About MiKontrol</button>
                        <button className="navbar-mapbtn">Features</button>
                        <button className="navbar-mapbtn">Discord Server</button>
                        <button className="navbar-mapbtn">Project Status</button>
                    </div>

                    <button className="navbar-login">Login with Discord</button>
                    <button className="navbar-hamburger">
                        <GiHamburgerMenu/>
                    </button>
                </div>
                <NavbarNews/>
            </nav>
        </>
    )
}