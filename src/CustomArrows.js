import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

// Custom Next Arrow Component
function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <GrNext 
                style={{ 
                    marginTop: "320px",
                    color: "black", 
                    fontSize: "40px" 
                }} 
            />
        </div>
    );
}

// Custom Prev Arrow Component
function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <GrPrevious 
                style={{ 
                    marginTop: "320px",
                    marginLeft: "1100px",
                    color: "black", 
                    fontSize: "40px" 
                }} 
            />
        </div>
    );
}

export { NextArrow, PrevArrow };
