import React from 'react'
import { Container, Grid } from '@mui/material'
import car2 from "../../assets/card 2.png"
import car3 from "../../assets/card 3.png"
import car4 from "../../assets/card 4.png"
import "./Work.css"

function Work() {
    return (
        <div className='Work'>
            <Container maxWidth="xl">
                <Grid container >
                <Grid md={4} sm={6} xs={12}>
                    <div className="box">
                        <img src={car2} alt="" />
                        <a href="#">Podcast</a>
                         <h4>Better Voluntary Benefits with NFP <br /> Voluntary Benefits Practice Leader, <br /> Kim Heald</h4>
                    </div>
                </Grid>
                <Grid md={4} sm={6} xs={12}>
                    <div className="box">
                        <img src={car3} alt="" />
                        <a href="#">Insurance Innovation</a>
                         <h4>How to Design Simpler Insurance <br /> Benefits</h4>
                    </div>
                </Grid>
                <Grid md={4} sm={12} xs={12}>
                    <div className="box">
                        <img src={car4} alt="" />
                        <a href="#">Benefits Strategy</a>
                         <h4>Executive Benefits Outlook with Dan <br /> Aceti</h4>
                    </div>
                </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Work
