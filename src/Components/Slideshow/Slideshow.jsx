import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // Import CSS for styling

const images = [
    "7hotel.jpg",
    "3hotel.jpg",
    "5hotel.jpg",
    "1hotel.jpg"
    

    
];

function Slideshow({}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup function
    }, []);

    return (
        <div className="slideshow-container">
            <img src={images[index]} alt="Hotel View" className="slideshow-image" />
            <div className="overlay">
                <h2>Welcome to Emerald Inn</h2>
                <p>Experience unmatched luxury & comfort</p>
            </div>
        </div>
    );
}

export default Slideshow;
