import React from "react";
import footerCSS from './../Footer/Footer.module.css';

function Footer(){
    return(
    <div id="footer" className={footerCSS.footer}>
        <div className={footerCSS.col}>
            <h2>Explore</h2>
            <a href="#explore">Explore</a>
            <a href="#hotels-resorts">Hotels & Resorts</a>
            <a href="#dining">Dining</a>
            <a href="#responsible-luxury">Responsible Luxury</a>
            <a href="#offers-experiences">Offers & Experiences</a>
            <a href="#meetings-socials">Meetings & Socials</a>
            <a href="#weddings">Weddings</a>
            <a href="#wellness">Wellness</a>
            <a href="#new-upcoming-hotels">New & Upcoming Hotels</a>
            
            <a href="#luxury-collection">The Luxury Collection</a>
        </div>
        <div className={footerCSS.col}>
            <h2>Corporate</h2>
            <a href="#corporate-home">Corporate Home</a>
            <a href="#about-us">About Us</a>
            <a href="#media-room">Media Room</a>
            <a href="#investor-relations">Investor Relations</a>
            <a href="#sustainability">Sustainability</a>
        </div>
        <div className={footerCSS.col}>
            <h2>Connect With Us</h2>
            <a href="#assistance">Assistance</a>
            <a href="#feedback">Feedback</a>
            <a href="#x-concierge">X Concierge</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#hotel-development">Hotel Development</a>
        </div>
        <div className={footerCSS.col}>
            <h2>Top Destinations</h2>
            <a href="#new-delhi-hotels">New Delhi Hotels</a>
            <a href="#mumbai-hotels">Mumbai Hotels</a>
            <a href="#chennai-hotels">Chennai Hotels</a>
            <a href="#bengaluru-hotels">Bengaluru Hotels</a>
            <a href="#goa-hotels-resorts">Goa Hotels & Resorts</a>
            <a href="#hyderabad-hotels">Hyderabad Hotels</a>
            <a href="#kolkata-hotels">Kolkata Hotels</a>
            <a href="#jaipur-hotels">Jaipur Hotels</a>
            <a href="#agra-hotels">Agra Hotels</a>
            <a href="#all-destinations">All Destinations</a>
        </div>
        <div className={footerCSS.col}>
            <h2>LOYALTY</h2>
            <a href="#club-itc">Club Emerald</a>
            <a href="#club-itc-culinaire">Club Emerald Culinaire</a>
            <a href="#welcomlink">Welcomlink</a>
            <a href="#gift-card">Gift Card</a>
            <a href="#mobile-app">Mobile App</a>
        </div>
        <div className={footerCSS.socialMedia}>
            <h2>Visit Our Social Handles</h2>
            <div className="social-icons">
            <a href="https://www.instagram.com/suyash5151" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/suyashparkash/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
            </div>
        </div>
    </div>
    )
}

export default Footer