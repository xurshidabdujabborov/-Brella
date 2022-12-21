import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Flex.css"

function Flex() {
    return (
        <div className='Flex'>
            <div className="box">
                <div className="card">
                    <a href="#">brella brings</a>
                    <h2 className="title">Customizable benefits <ArrowForwardIcon />  </h2>
                    <p>Paperless install & admin</p>
                    <p>Effortless enrollment</p>
                    <p>Easy claims experience</p>
                    <p>Fast benefit payouts</p>
                    <p>Concierge support</p>
                </div>
                <div className="card1">
                    <p className="text">Every Brella plan comes with a benefit for Moderate, <br /> Severe, and Catastrophic conditions. Employees can <br /> select the payout amounts that fit their needs and <br /> their budget.</p>
                    <br />
                    <br />
                    <br />
                    <p className="text">Employers can fund part or all of the premiums—or <br /> offer Brella as a voluntary benefit. The choice is up to <br /> you.</p>
                </div>
            </div>
        </div>
    )
}

export default Flex
