import React from 'react'
import { Container , Grid } from '@mui/material'
import xx from "../../assets/xx.png"
import hh from "../../assets/hh.png"
import "./Main.css"

function Main() {
    return (
        <main>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="left">
                            <span>Why Brella?</span>
                            <h2 className="title">Today, any health insurance deductible can feel like a high deductible.</h2>
                            <p className="text">Brella's supplemental health plan enhances your health benefit strategy to ensure that health hardships don't become financial burdens.</p>
                            <a href="#">See our plan</a>
                        </div>
                    </Grid>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="right">
                            <div className="card">
                                <h1>60%</h1>
                                <p>of Americanswould have to borrow <br /> to cover an unexpected $1000 <br /> expense</p>
                            </div>
                            <div className="img">
                                <img src={xx} alt="" />
                                <img src={hh} alt="" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default Main
