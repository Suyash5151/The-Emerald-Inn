import React from "react";
import diningCSS from './../Dining/Dining.module.css';

function Dining(){
    return(
    <div id="dining" className={diningCSS.dining}>
        <h1 className="section-heading">Dining</h1>
        <div style={{ display: "flex", flexDirection: "row", gap:"40px"}}>
            <div className={diningCSS.diningText}>
                <p className={diningCSS.text}>Savor the flavors of the world at our gourmet restaurants.</p>
                <p className={diningCSS.text}>From traditional Indian dishes to international cuisine,</p>
                <p className={diningCSS.text}>our chefs create culinary masterpieces.</p>
            </div>
            
            <div className={diningCSS.box}>
                <div className={diningCSS.column}>
                    <img src="food2.jpg" />
                    <img src="hotel14.avif" />
                    <img src="food4.webp"/>
                </div>
                <div className={diningCSS.column}>
                    <img src="food6.jpg" />
                    <img src="hotel13.avif" />
                    <img src="food7.jpg"/>
                    
                </div>
                <div className={diningCSS.column}>
                    <img src="food8.jpg" />
                    <img src="food10.jpg"/>
                    <img src="food11.jpeg"/>
                </div>
            </div>            
        </div>
    </div>
    )
}

export default Dining;