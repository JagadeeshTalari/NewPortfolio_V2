import React from 'react'
import "./Navbar.css"

const Navbar = () => 
{
    return (
        <nav className='d-flex' style={{justifyContent: "space-between"}}>
            <h3 className='logo'>JT</h3>
            <h3>Navbar</h3> 
            <div>
                <ul className='d-flex' style={{gap: "2rem"}}>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Certifications</li>
                    <li>Articles</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar