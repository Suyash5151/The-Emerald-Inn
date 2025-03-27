import amenitiesCSS from './../Amenities/Amenities.module.css';
import React, { useState, useEffect } from "react";
import { useSlideshow } from "../../hooks/useSlideshow";


const amenitiesImages = [
   "8hote.webp", 
   "7hotel.jpg",
    "13hotel.jpg",
    "12hotel.jpg",  
    
    "5star2.avif",
    "5star4.jpg",
];

const amenitiesPool=[
    "pool.jpg",
    "spa.jpg",
    "gym.jpg",
    "privatebeach.avif",
    "pool3.jpg"]



function Amenities() {
    const [index, setIndex] = useSlideshow(amenitiesImages.length);
    const [index1, setIndex1] = useSlideshow(amenitiesPool.length);


    return (
        
        <div id="Amenities" className={amenitiesCSS.amenitiestotal}>
            <h1 className="section-heading">Amenities</h1>
            
            <div className={amenitiesCSS.display}>
                <div className={amenitiesCSS.roomamenities}>
                    
                    <h2>Room Amenities</h2>
                    <ul className={amenitiesCSS.amenitiesList}>
                        <li>Spacious, elegantly designed suites</li>
                        <li>King-size beds with premium linens</li>
                        <li>Smart TVs with international channels</li>
                        <li>High-speed WiFi</li>
                        <li>24-hour room service</li>
                        <li>Personalized minibar</li>
                        <li>Private balcony with scenic views</li>
                    </ul>
                </div>
                <div className={amenitiesCSS.slideimage}>
                    <img src={amenitiesImages[index]} alt="Hotel View" className="imgcss" />
                </div>
                
            </div>  

            <div className={amenitiesCSS.display}>
                <div className={amenitiesCSS.roomamenities}>    
                    <h2>Recreation Amenities</h2>
                    <ul className={amenitiesCSS.amenitiesList}>
                            <li>Infinity pool with poolside bar</li>
                            <li>Exclusive spa with sauna & steam rooms</li>
                            <li>Fully equipped fitness center</li>
                            <li>Private beach access </li>
                    </ul>
                </div>
                <div className={amenitiesCSS.slideimage}>
                    <img src={amenitiesPool[index1]} alt="Hotel View" className="imgcss" />
                </div>


                
            </div>
        </div>
    );
}

export default Amenities