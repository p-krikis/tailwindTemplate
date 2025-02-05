import { useState, useEffect } from 'react';
import { LuChevronsDown } from "react-icons/lu";

export default function ScrollDown() {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowArrow(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleScroll = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div>
            <div 
                onClick={handleScroll} 
                className="cursor-pointer fixed right-4 bottom-4 transition-opacity duration-1000"
                style={{
                    opacity: showArrow ? 1 : 0,
                    pointerEvents: showArrow ? 'auto' : 'none'
                }}
            >
                <LuChevronsDown size={50} color="white"/>
            </div>
        </div>
    )
}