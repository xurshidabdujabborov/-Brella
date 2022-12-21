import React from 'react'
import car5 from "../../assets/card 5.png" 
import "./Bottom.css"

function Bottom() {
    return (
        <div className='Bottom'>
            <div className="box">
                <div className="img">
                    <img src={car5} alt="" />
                </div>
                <div className="card">
                    <h2 className="title">Ready to explore Brella’s <br /> supplemental health <br /> solution?</h2>
                    <h2 className="title">Let’s talk.</h2>
                    <button>Get in touch</button>
                </div>
            </div>
        </div>
    )
}

export default Bottom
