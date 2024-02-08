import React from 'react'
import "./Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => 
{
    return (
        <nav className='navbar d-flex'>
            <h3 className='logo'>JT</h3> 
            <div>
                <ul className='navLinks d-flex'>
                    <li><a href="#workHistory">Work history</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="mailto:talarijagadeesh55@gmail.com">Contact me</a></li>
                    <li><a href="#articles">Articles</a></li>
                </ul>
                <div className="mobileNavLinks">
                    <RxHamburgerMenu className='hamBurgerMenu'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar