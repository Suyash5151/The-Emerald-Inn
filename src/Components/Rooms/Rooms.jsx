import React from "react";
import roomsCSS from './../Rooms/Rooms.module.css';

function Rooms(){
    return(
        <div id="Rooms" className={roomsCSS.roomsdisplay}>
            <h1>Rooms & Suites</h1>
            <div className={roomsCSS.roomContainer}>
                <div className={roomsCSS.room}>
                    <h2>Emerald Premium Room</h2>
                    
                    <ul>
                        <li>Size: 400 sq. ft.</li>
                        <li>Features: Elegant furnishings, private balcony, plush bedding</li>
                        <li>View: Pool or skyline</li>
                        <li>Amenities: Complimentary breakfast, espresso machine, luxury toiletries</li>
                        <li>From ₹10,000 per night</li>
                    </ul>
                </div>
                <img src="2hotel.jpg" alt="Emerald Premium Room" className={roomsCSS.roomImage} />
            </div>

            <div className={roomsCSS.roomContainer}>
                <div className={roomsCSS.room}>
                    <h2>Executive Suite</h2>
                    
                    <ul>
                        <li>Size: 550 sq. ft.</li>
                        <li>Features: Separate living area, stylish interiors, private balcony</li>
                        <li>View: Ocean or garden view</li>
                        <li>Amenities: 24/7 butler service, in-room dining, bathtub, premium minibar</li>
                        <li>From ₹20,000 per night</li>
                    </ul>
                </div>
                <img src="5-Star-room.png" alt="Executive Suite" className={roomsCSS.roomImage} />
            </div>

            <div className={roomsCSS.roomContainer}>
                <div className={roomsCSS.room}>
                    <h2>Royal Emerald Suite</h2>
                    
                    <ul>
                        <li>Size: 800 sq. ft.</li>
                        <li>Features: Spacious living room, dining space, private jacuzzi</li>
                        <li>View: Panoramic city/ocean view</li>
                        <li>Amenities: Personal concierge, luxury bathrobes, premium wine selection</li>
                        <li>From ₹50,000 per night</li>
                    </ul>
                </div>
                <img src="Burj-Al-Arab-Panoramic-Suite.jpg" alt="Royal Emerald Suite" className={roomsCSS.roomImage} />
            </div>

            <div className={roomsCSS.roomContainer}>
                <div className={roomsCSS.room}>
                    <h2>The Grand Presidential Suite</h2>
                    
                    <ul>
                        <li>Size: 1,200 sq. ft.</li>
                        <li>Features: Two bedrooms, private terrace, dedicated workspace</li>
                        <li>View: Exclusive rooftop skyline view</li>
                        <li>Amenities: Private chef service, chauffeur-driven car, spa access, personalized butler</li>
                        <li>From ₹80,000 per night</li>
                    </ul>
                </div>
                <img src="burj-al-arab-1.jpeg" alt="The Grand Presidential Suite" className={roomsCSS.roomImage} />
            </div>
        </div>
    )
}

export default Rooms;