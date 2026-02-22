import Navbar from './lib/components/Navbar';
import Image from 'next/image';
import logo from "@/public/navbarIcon.svg";

import { FaHammer, FaRobot } from 'react-icons/fa6';
import { IoIosGlobe } from 'react-icons/io';
import { IoTicketSharp } from 'react-icons/io5';
import { MdMiscellaneousServices, MdOutlineMarkEmailRead } from 'react-icons/md';
import { GiRadarDish } from 'react-icons/gi';
import { BsThreeDots } from 'react-icons/bs';
import { FaShieldAlt } from 'react-icons/fa';
import Footer from './lib/components/Footer';

export default function Home() {

  return (
    <div className='background'>
      <header>
        <Navbar/>
      </header>
      <main className='main-content'>
        <section className='introduction-area'>
          <div className='introduction-text'>
            <h1 className='introduction-heading'>MiKontrol</h1>
            <h2 className='introduction-sub'>The simplest, yet advanced way to moderation and connectivity</h2>
            <p className='introduction-paragraph'>Centralized Discord moderation, real-time server analytics, and cross-platform connections to grow and manage your community.</p>
          </div>
          <div className='introduction-logo'>
            <Image src={logo} alt="MiKontrol" width={400}/>
          </div>
        </section>

        <section className='information-area'>
          <h1 className='information-heading'>Advanced Discord Management & Integration</h1>
          <h2 className='information-sub'>Our team focuses on improving essential features while adding new features from imagination to reality</h2>
          <main className='information-grid'>
            <div className='information-grid-container'>
              <div className='information-grid-image'>
                <FaHammer/>
              </div>
              <h1 className='information-grid-header'>Moderation Ready</h1>
              <p className='information-grid-paragraph'>After setting up the bot through our dashboard, your discord bot will be ready to tackle moderation duties including slash commands.</p>
            </div>
            <div className='information-grid-container'>
              <div className='information-grid-image'>
                <IoIosGlobe/>
              </div>
              <h1 className='information-grid-header'>Cross-Server Connectivity</h1>
              <p className='information-grid-paragraph'>Moderation actions can be sent to the global network so other servers are aware of any users who have tripped our sensory system for possible violaters.</p>
            </div>
            <div className='information-grid-container'>
              <div className='information-grid-image'>
                <IoTicketSharp/>
              </div>
              <h1 className='information-grid-header'>Ticketing System</h1>
              <p className='information-grid-paragraph'>Need a ticket system? You can enable the system to be able to use the ticketing system for moderation, development and other purposes!</p>
            </div>
            <div className='information-grid-container'>
              <div className='information-grid-image'>
                <MdOutlineMarkEmailRead/>
              </div>
              <h1 className='information-grid-header'>Domain-Verified Access</h1>
              <p className='information-grid-paragraph'>Evolve your server into an exclusive access server through certain email domains, generally ideal for club organizations.</p>
            </div>
            <div className='information-grid-container'>
              <div className='information-grid-image'>
                <GiRadarDish/>
              </div>
              <h1 className='information-grid-header'>Visual Nexus Control</h1>
              <p className='information-grid-paragraph'>Receive live notifications, ticket viewer with logging and statistics within the all in one, web-based, next-generation MiKontrol Nexus Centre.</p>
            </div>
            <div className='information-grid-container'>
              <div className='information-grid-image'>
                <FaRobot/>
              </div>
              <h1 className='information-grid-header'>Automation</h1>
              <p className='information-grid-paragraph'>Let MiKontrol handle any automated actions by our robust auto-moderation system while getting live notification sent to the Nexus Centre.</p>
            </div>
            <div className='information-grid-container'>
              <div className='information-grid-image'>
                <MdMiscellaneousServices/>
              </div>
              <h1 className='information-grid-header'>Miscellaneous</h1>
              <p className='information-grid-paragraph'>MiKontrol can handle any of your miscellaneous needs such as giveaway, Twitch / YouTube alerts, birthday alerts and more!</p>
            </div>
            <div className='information-grid-container'>
              <div className='information-grid-image'>
                <BsThreeDots/>
              </div>
              <h1 className='information-grid-header'>And Many More!</h1>
              <p className='information-grid-paragraph'>The MiKontrol continues to grow with more ideas turning into reality in the all-in-one MiKontrol! Stay tuned!</p>
            </div> 
          </main>
        </section>

        <section className='privacy-banner-area'>
          <div className='privacy-banner-icon'><FaShieldAlt/></div>
          <main className='privacy-banner-text'>
            <h1 className='privacy-banner-header'>Your Privacy is Our Priority</h1>
            <p className='privacy-banner-paragraph'>We protect your data with enterprise-grade security by MongoDB. For details on how we handle your information, please read our Privacy Policy.</p>
          </main>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
