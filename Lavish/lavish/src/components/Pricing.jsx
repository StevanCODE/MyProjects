import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import {BsXDiamondFill} from "react-icons/bs"
import {GiCrystalize} from "react-icons/gi"
import {IconContext} from "react-icons/lib"
import "./Pricing.css"

function Pricing() {
    return (
        <IconContext.Provider value = {{color: "#fff", size: 64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading"> Pricing </h1>
                    <div className="pricing__container">
                        <Link to = "/sign-up" className = "pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire/>
                                </div>
                                <h3> Starter </h3>
                                <h4> $9.99 </h4>
                                <p> Per Month </p>
                                <ul className = "pricing__container-features">
                                    <li> 100 transactions </li>
                                    <li> 2% Cash Back </li>
                                    <li> $10 000 Limit </li>
                                </ul>
                                <Button buttonSize = "btn--wide" buttonColor = "primary"> Choose Plan </Button>
                            </div>
                        </Link>
                        <Link to = "/sign-up" className = "pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                <h3> Gold </h3>
                                <h4> $29.99 </h4>
                                <p> Per Month </p>
                                <ul className = "pricing__container-features">
                                    <li> 1000 transactions </li>
                                    <li> 2.5% Cash Back </li>
                                    <li> $100 000 Limit </li>
                                </ul>
                                <Button buttonSize = "btn--wide" buttonColor = "blue"> Choose Plan </Button>
                            </div>
                        </Link>

                        <Link to = "/sign-up" className = "pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize/>
                                </div>
                                <h3> Diamond </h3>
                                <h4> $49.99 </h4>
                                <p> Per Month </p>
                                <ul className = "pricing__container-features">
                                    <li> Unlimited Transactions </li>
                                    <li> 5% Cash Back </li>
                                    <li>  No Limit </li>
                                </ul>
                                <Button buttonSize = "btn--wide" buttonColor = "primary"> Choose Plan </Button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
