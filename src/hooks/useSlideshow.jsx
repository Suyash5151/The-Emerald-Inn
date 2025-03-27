import { useState, useEffect } from 'react';    

export const useSlideshow=(limit)=>{
    const [index, setIndex] = useState(0);
    
        useEffect(() => {
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % limit);
            }, 3000); // Change image every 3 seconds
    
            return () => clearInterval(interval); // Cleanup function
        }, []);
        return [index, setIndex]
}