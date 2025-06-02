import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import "../assets/css/contact.css"
import "../assets/css/Responsive/ResponsiveContact.css"
import "../assets/css/midResponsive/midContactResponsive.css"
import "../assets/css/laptopResponsive/laptopContactResponsive.css"
import "../assets/css/largeLaptop/largeLapContRespon.css"
import "../assets/css/extraLargeLaptop/extraLargeLaptopContactRespon.css"
import "../assets/css/normalDesktop/homeResponsive.css"
import "../assets/css/normalDesktop/contactResponsive.css"
import "../assets/css/largeDesktop/contactDesktopResponsive.css"
import "../assets/css/largerDesktop/contactLargerDesktopResponsive.css"
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar active={"contact"}/>
      <div className="ContactUsSection">
        <div className="leftSide">
          <div className="form">
            <h1>Contact Us</h1>
            <form action="https://formsubmit.co/aaliyandev786@gmail.com" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="rightSide">
          <div className="contactInfo">
            <div className="infoSection">
              <a className="icon" href="https://google.com">
                <IoIosMail className='contactIcon' />
              </a>
              <p>aaliyandev786@gmail.com</p>
            </div>
            <div className="infoSection">
              <a className="icon" href="https://google.com">
                <FaPhoneAlt className='contactIcon' />
              </a>
              <p>+92 332 3037860</p>
            </div>
            <div className="infoSection">
              <a className="icon" href="https://www.facebook.com/share/199q3Ya7QS/">
                <FaFacebook className='contactIcon' />
              </a>
              <p>Aaliyan Ahmed Shaikh</p>
            </div>
            <div className="infoSection">
              <a className="icon" href="https://www.instagram.com/aaliyan_as786?igsh=MTNkc3U0djNoODdjbQ==">
                <FaInstagram className='contactIcon' />
              </a>
              <p>aaliyan_as786</p>
            </div>
            <div className="infoSection">
              <a className="icon" href="https://github.com/Aaliyan-prog">
                <FaGithub className='contactIcon' />
              </a>
              <p>Aaliyan-prog</p>
            </div>
            <div className="infoSection">
              <a className="icon" href="https://www.linkedin.com/in/aaliyan-ahmed-sheikh-99465b349">
                <FaLinkedin className='contactIcon' />
              </a>
              <p>Aaliyan Ahmed Sheikh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact