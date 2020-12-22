import React from 'react'
import Pricing from '../../Pricing'
import "./SignUp.css"

function SignUp() {
    return (
        <>
        <div className="sign-up-container">
                <div className = 'heading-div'>
                <h1 className = "form-heading"> Sign up bellow </h1>
                </div>
            <div className="form-wrapper">
                <form className="form">
                    <div>
                    <h4 className = "input-headings"> Username :</h4>
                    <input className = "input" type = "text" placeholder = "username"></input>
                    </div>
                    <div>

                    <h4 className = "input-headings"> Email :</h4>
                    <input className = "input" type = "email" placeholder = "e-mail"></input>
                    </div>
                    
                    <div>
                    <h4 className = "input-headings"> Password :</h4>
                    <input className = "input" type = "password" placeholder = "password"></input>
                    </div>

                    <div>
                    <h4 className = "input-headings"> Confirm Password :</h4>
                    <input className = "input" type = "password" placeholder = "confirm password"></input>
                    </div>

                    <input className = "inputSubmit" type = "submit" value = "Sign Up"></input>
                </form>
            </div>
            <div className="sign-up-svg">
                    <img src = 'images/svg-2.svg' alt = "image"></img>
                </div>
        </div>
         <Pricing/>
        </>
    )
}

export default SignUp
