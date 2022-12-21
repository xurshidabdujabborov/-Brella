import React from 'react'
import { Container, Grid } from '@mui/material'
import fot from "../../assets/logo.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="fotlogo">
                            <img src={fot} alt="" />
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <ul>
                            <h4>Join Brella</h4>
                            <li>
                                <a href="#">Our Plan</a>
                            </li>
                            <li>
                                <a href="#">Employers</a>
                            </li>
                            <li>
                                <a href="#">Brokers </a>
                            </li>
                            <li>
                                <a href="#">Members</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <ul>
                            <h4>Company</h4>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="end">
                            <span>Get the latest</span>
                            <p>Sign up to receive benefits news and insights in your inbox once a month.</p>
                        <form action="#">
                            <input type="text" placeholder='Email*' />
                            <ArrowForwardIcon/>
                        </form>
                        <div className="icon">
                            <TwitterIcon/>
                            <InstagramIcon/>
                            <FacebookIcon/>
                        </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
