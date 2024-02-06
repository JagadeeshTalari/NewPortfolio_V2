import React from 'react'
import "./Circles.css"

const Circles = ({activeClass="inactive"}) => {
    return (
        <>
            <div className={`${activeClass} circles`}>
                <div className={`${activeClass} innerCircle`}></div>
            </div>
        </>
    )
}

export default Circles