import React from 'react'
import { Container, Grid } from '@mui/material'
import nav from "../../assets/nav.png"
import "./Nav.css"

function Nav() {
    return (
        <nav>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={1} sm={12} xs={12}>
                        <div className="img">
                            <img src={nav} alt="" />
                        </div>
                    </Grid>
                    <Grid md={11} sm={12} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Our Plan</a>
                            </li>
                            <li>
                                <a href="#">Employers</a>
                            </li>
                            <li>
                                <a href="#">Brokers</a>
                            </li>
                            <li>
                                <a href="#">Members</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <button>Request a demo</button>
                            <li>
                                <a href="#">Login</a>
                            </li>
                            <form action="#">
                                <select name="#" id="#">
                                    <option value="#">EN</option>
                                    <option value="#">RU</option>
                                    <option value="#">UZ</option>
                                </select>
                            </form>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </nav>
    )
}

export default Nav
