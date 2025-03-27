import React from "react";
import diningCSS from './../Dining/Dining.module.css';

function Dining(){
    return(
    <div id="dining" className={diningCSS.dining}>
        <h1 className={diningCSS.heading}>Dining</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={diningCSS.dining}>
                
            <div>
                <p>Savor the flavors of the world at our gourmet restaurants.</p>
                <p>From traditional Indian dishes to international cuisine, our chefs create culinary masterpieces.</p>
            </div>

        
        </div>
            
            <div class={diningCSS.box}>
                <div class={diningCSS.column}>
                    <img src="food2.jpg" />
                    <img src="hotel14.avif" />
                    <img src="food4.webp"/>
                    
                </div>
                <div class={diningCSS.column}>
                    <img src="food6.jpg" />
                    <img src="food7.jpg"/>
                    <img src="food5.jpg" height="143px"/>
                </div>
                <div class={diningCSS.column}>
                    <img src="food8.jpg" />
                    <img src="food10.jpg"/>
                    <img src="food11.jpeg"/>
                </div>
    
    </div>            
    </div>
</div>
)
    
}

export default Dining