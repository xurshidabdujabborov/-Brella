import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/card.png"
import car1 from "../../assets/card 1.png"
import './Plan.css'

function Plan() {
    return (
        <div className='Plan'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={5} sm={12} xs={12}>
                        <div className="left">
                            <a href="#">one plan, more coverage</a>
                            <h2 className="title">No one can predict which health issues might come their way.</h2>
                            <p className="text">Our broad supplemental coverage gets rid of the guesswork and puts cash in your team’s pockets for most conditions that require urgent medical attention.</p>
                        </div>
                    </Grid>
                    <Grid md={7} sm={12} xs={12}>
                        <div className="img">
                            <img src={car} alt="" />
                        </div>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <Grid container alignItems={"center"} spacing="12">
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <h1>5K</h1>
                            <p>covered injuries and illnesses from <br /> fractures and appendicitis to cancer</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <h1>1K</h1>
                            <p>covered injuries and illnesses from <br /> fractures and appendicitis to cancer</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <h1>40%</h1>
                            <p>covered injuries and illnesses from <br /> fractures and appendicitis to cancer</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <h1>0</h1>
                            <p>covered injuries and illnesses from <br /> fractures and appendicitis to cancer</p>
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems={"center"}>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="img1">
                            <img src={car1} alt="" />
                        </div>
                    </Grid>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="left">
                            <a href="#">a better claims experience</a>
                            <h2 className="title">Give your people a plan that pays in hours—not weeks.</h2>
                            <p className="text">Your team can’t wait for peace of mind. Brella pays on diagnosis, so members can file a claim sooner and get paid faster via our Member Portal or mobile app.</p>
                            <a href="#">Play Video</a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Plan
