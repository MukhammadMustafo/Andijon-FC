import React from 'react'
import { Link } from "react-router-dom";
import './Store.scss'
import CollectImg from "../../assets/image/collect-img.jpg"
import CollectImg2 from "../../assets/image/collect-img2.jpg"
import CollectImg3 from "../../assets/image/collect-img3.jpg"
import CollectImg4 from "../../assets/image/collect-img4.jpg"
import CollectImg5 from "../../assets/image/collect-img5.jpg"
import CollectImg6 from "../../assets/image/collect-img6.jpg"
import CollectImg7 from "../../assets/image/collect-img7.jpg"
import CollectImg8 from "../../assets/image/collect-img8.jpg"
import shirtLogo1 from "../../assets/image/shirt-img1.png"
import shirtLogo2 from "../../assets/image/shirt-img2.png"
import shirtLogo3 from "../../assets/image/shirt-img3.png"
import shirtLogo4 from "../../assets/image/shirt-img4.png"
import shirtLogo5 from "../../assets/image/shirt-img5.png"
import shirtStars from "../../assets/image/shirt-stars.svg"

function Store() {
  return (
    <div>
        <div className="container hero-wrapper">
      <div className="hero-first__wrapper">
        <h4>New Shirt from ROMA FC</h4>
        <Link>Buy Now</Link>
      </div>
      <div>
        <div className="hero-secund__wrapper">
          <h4>New Cap from ROMA FC</h4>
          <Link>Buy Now</Link>
        </div>
        <div className="hero-third-and-fourth_wrapper">
          <div className="hero-third__wrapper">
            <h4>New accessories</h4>
            <Link>Buy Now</Link>
          </div>
          <div className="hero-fourth__wrapper">
            <h4>New Bag</h4>
            <Link>Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
    <div className='container collect-wrapper'>
            <div className='collect-item'><Link><img src={CollectImg} alt="" /></Link></div>
            <div className='collect-item'><Link><img src={CollectImg2} alt="" /></Link></div>
            <div className='collect-item'><Link><img src={CollectImg3} alt="" /></Link></div>
        </div>
        <h2>Collections</h2>
        <div className='container collect-wrapper2'>
            <Link><img src={CollectImg4} alt="" /></Link>
            <Link><img src={CollectImg5} alt="" /></Link>
            <Link><img src={CollectImg6} alt="" /></Link>
            <Link><img src={CollectImg7} alt="" /></Link>
            <Link><img src={CollectImg8} alt="" /></Link>
        </div>
        <div className='shirt-title__wrapper'>
            <span></span>
            <h3 className='shirt-title'>RECOMMENDATIONS FOR YOU</h3>
            <span></span>
        </div>
        <div className='container'>
          <ul className='shirt-list'>
            <li className='shirt-item'>
              <img className='shirt_img' src={shirtLogo1} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img className='shirt_star' src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
            <li className='shirt-item'>
              <img className='shirt_img' src={shirtLogo2} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img className='shirt_star' src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
            <li className='shirt-item'>
              <img className='shirt_img' src={shirtLogo3} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img className='shirt_star' src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
            <li className='shirt-item'>
              <img className='shirt_img' src={shirtLogo4} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img className='shirt_star' src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
            <li className='shirt-item'>
              <img className='shirt_img' src={shirtLogo5} alt="" />
              <h3 className='shirt-lorem'>Lorem ipsum</h3>
              <img className='shirt_star' src={shirtStars} alt="" />
              <span>
                <h3 className='shirt-last__value'>$19.20</h3>
                <h3 className='shirt-first__value'>$21.20</h3>
              </span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Store