import React, { useState } from "react";
import navCSS from './../Nav/Nav.module.css';
import { HashLink } from "react-router-hash-link";

function Nav() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className={navCSS.nav_wrapper}>
            <div className={navCSS.logo}>
                <img src="Emerald Inn.webp" width="100px" height="80px" alt="Emerald Inn Logo"></img>
            </div>
            <ul className={showNav ? navCSS.showNav : ""}>
                <li><HashLink smooth to="/#about">About Us</HashLink></li>
                <li><HashLink smooth to="/#dest">Destinations</HashLink></li>
                <li><HashLink smooth to="/#Rooms">Rooms & Suites</HashLink></li>
                <li><HashLink smooth to="/#Amenities">Amenities</HashLink></li>
                <li><HashLink smooth to="/#dining">Dining</HashLink></li>
            </ul>
            <div className={navCSS.Nav_btns}>
                <button className={navCSS.book_now_btn} onClick={() => window.open("/booking", "_blank")}><b>Book Now</b></button>
                <i className={`bx bx-menu menuIcon ${navCSS.bars}`} onClick={toggleNav}></i>
            </div>
        </div>
    );
}

export default Nav;