import React from "react";
import destCSS from './../Dest/Dest.module.css';

function Dest() {
    return (
        <div id="dest" className={destCSS.Pictures}>
            <h1 className="section-heading">Destinations</h1>
            <div className={destCSS.row}>
                <div className={destCSS.capt}>
                    <img src="itc-royal-bengal.png" alt="Kolkata"></img>
                    <div className={destCSS.caption}>Kolkata</div>
                </div>
                <div className={destCSS.capt}>
                    <img src="itc-kohenur.png" alt="Hyderabad"></img>
                    <div className={destCSS.caption}>Hyderabad</div>
                </div>
                <div className={destCSS.capt}>
                    <img src="itc-ratnadipa.jpg" alt="Ratnadipa"></img>
                    <div className={destCSS.caption}>Ratnadipa</div>
                </div>
                <div className={destCSS.capt}>
                    <img src="26indias-best-hotels6.webp" alt="Mumbai"></img>
                    <div className={destCSS.caption}>Mumbai</div>
                </div>
            </div>
            <div className={destCSS.row}>
                <div className={destCSS.capt}>
                    <img src="welcomhotel-tavleen-chail.png" alt="Chail"></img>
                    <div className={destCSS.caption}>Chail</div>
                </div>
                <div className={destCSS.capt}>
                    <img src="5-Star-Hotels06_01_19.jpg" alt="Goa"></img>
                    <div className={destCSS.caption}>Goa</div>
                </div>
                <div className={destCSS.capt}>
                    <img src="welcomhoteljabalpur.jpg" alt="Jabalpur"></img>
                    <div className={destCSS.caption}>Jabalpur</div>
                </div>
                <div className={destCSS.capt}>
                    <img src="welcomhotel-khimsar.jpg" alt="Khimsar"></img>
                    <div className={destCSS.caption}>Khimsar</div>
                </div>
            </div>
        </div>
    );
}

export default Dest;