import React from 'react'
import "./Reklama.scss"
import { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom'
import reklamaLogo1 from "../../assets/image/Adidas.png"
import reklamaLogo2 from "../../assets/image/futboltv.png"
import reklamaLogo3 from "../../assets/image/dinamo.png"
import reklamaLogo4 from "../../assets/image/Chevrolet.png"
import reklamaLogo5 from "../../assets/image/sporttv.png"

function Reklama() {
    const sliderRef = useRef();

    useEffect(() => {
        const slider = sliderRef.current;
        let slideWidth = slider.clientWidth;
        let currentSlide = 0;

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slider.children.length;
            slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
        };

        const interval = setInterval(nextSlide, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className='container'>
            <hr />
            {/* <div className='reklama-wrapper'>
                <Link to={"https://www.adidas.com/us"}>
                    <img src={reklamaLogo1} alt="" />
                </Link>
                <Link to={"https://futboltv.asia/"}>
                    <img src={reklamaLogo2} alt="" />
                </Link>
                <Link to={"https://fcdinamo.uz/"}>
                    <img src={reklamaLogo3} alt="" />
                </Link>
                <Link to={"https://chevrolet.uz/damas"}>
                    <img src={reklamaLogo4} alt="" />
                </Link>
                <Link to={"https://www.sporttv.pt/"}>
                    <img src={reklamaLogo5} alt="" />
                </Link>
            </div> */}
            <div className="logo-slider">
                <div className="slider-wrapper" ref={sliderRef}>
                    <div className="slide"><img  src={reklamaLogo2} alt="Client 1" /></div>
                    <div className="slide"><img src={reklamaLogo1} alt="Client 2" /></div>
                    <div className="slide"><img src={reklamaLogo3} alt="Client 3" /></div>
                    <div className="slide"><img src={reklamaLogo4} alt="Client 4" /></div>
                    <div className="slide"><img src={reklamaLogo5} alt="Client 5" /></div>
                    
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Reklama