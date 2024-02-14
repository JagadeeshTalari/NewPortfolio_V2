import React, { useState } from 'react'
import "./Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => 
{
    const [menuActive, setMenuActive] = useState(false)

    const toggle = () => {
        setMenuActive(!menuActive)
    }

    const close = () => {
        setMenuActive(false)
    }

    return (
        <nav className='navbar d-flex'>
            <h3 className='logo' onClick={close}>JT</h3> 
            <div>
                <ul className='navLinks d-flex'>
                    <li><a href="#workHistory">Work history</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="mailto:talarijagadeesh55@gmail.com">Contact me</a></li>
                    {/* <li><a href="#articles">Articles</a></li> */}
                </ul>
                <div className="mobileNavLinks" onClick={toggle}>
                    {
                        
                        menuActive ?<RxCross2 onClick={() => setMenuActive(!menuActive)} className='hamBurgerMenu'/>: <RxHamburgerMenu onClick={() => setMenuActive(!menuActive)} className='hamBurgerMenu'/>
                        
                    }
                    {
                        
                    menuActive ?  (<ul className="mobileNavLinks__Menu">
                    <li onClick={close}><a href="#workHistory">Work history</a></li>
                    <li onClick={close}><a href="#projects">Projects</a></li>
                    <li onClick={close}><a href="mailto:talarijagadeesh55@gmail.com">Contact me</a></li>
                    {/* <li onClick={close}><a href="#articles">Articles</a></li> */}
                </ul>) : null 
                        
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar