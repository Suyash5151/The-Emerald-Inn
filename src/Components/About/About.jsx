import React from 'react';
import aboutCSS from './../About/About.module.css';

function About() {
    return (
        <div id="about" className={`${aboutCSS.section} ${aboutCSS.abttext}`}>
            <div>
                <img src="Emerald Inn.webp" height="300px" width="300px" alt="Emerald Inn" />
            </div>
            <div>
                <h1 >About Us</h1>
                <p>
                    Welcome to Emerald Inn, where luxury meets comfort in the heart of the city. Our elegantly designed rooms, world-class amenities, and warm hospitality ensure a truly unforgettable stay.

                    Relax in our spacious suites, indulge in gourmet dining, and experience top-tier service tailored to your needs.

                    With a commitment to excellence, we strive to make every stay special. Your comfort is our priority. Welcome to Emerald Inn.
                </p>
            </div>
        </div>
    );
}

export default About;
