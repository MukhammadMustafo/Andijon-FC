import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import navLogo from "../../assets/image/logo.png"

function Header() {
  return (
    <header>
        <div className='container nav-wrapper'>
            <ul className='nav-list'>
                <li className='nav-item'><Link to={'/'}  className='nav-link'>Bosh sahifa</Link></li>
                <li className='nav-item'><Link to={'/news'} className='nav-link'>Yangiliklar</Link></li>
                <li className='nav-item'><Link to={"/media"} className='nav-link'>Media</Link></li>
                <li className='nav-item'><Link to={"/dokon"} className='nav-link'>Do’kon</Link></li>
            </ul>
            <div className='nav_logo'><img src={navLogo} alt="" /></div>
            <ul className='nav-list2'>
                <li className='nav-item2'><Link to={'/klub'} className='nav-link2'>Klub</Link></li>
                <li className='nav-item2'><Link to={'/muxlislar'} className='nav-link2'>Muxlislar</Link></li>
                <li className='nav-item2'><Link to={'/academy'} className='nav-link2'>Akademiya</Link></li>
                <li className='nav-item2'><Link to={'/homiylar'} className='nav-link2'>Homiylar</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header