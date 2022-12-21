import { Container } from '@mui/material'
import React from 'react'
import "./Header.css"

function Header() {
    return (
        <header>
            <Container maxWidth="xl">
                <div className="left">
                    <h2 className="title">Give your team peace of mind <br /> with supplemental health <br /> insurance from Brella.</h2>
                    <p>I'm wondering...</p>
                    <form action="#">
                        <input type="text" placeholder='how Brellas plan works ' />
                        <button>Find out</button>
                    </form>
                </div>
            </Container>
        </header>
    )
}

export default Header
