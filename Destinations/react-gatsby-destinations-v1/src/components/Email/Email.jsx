import React from 'react'
import {Button} from "../Button"
import { EmailContainer, EmailContent, FormWrap } from './EmailElements'
const Email = () => {
    return (
        <>
            <EmailContainer>
                <EmailContent>
                    <h1> Get Access to Exclusive Offers </h1>
                    <p> Sign up for our newsletter bellow to recieve 100$ off your next trip! </p>
                    <form action = "#"> 
                        <FormWrap>
                            <label htmlFor = "email">
                                <input type = "email" placeholder = "Enter your email" id = "email"></input>
                            </label>
                            <Button as = "button" type = "submit" round = "true" primary = "true" css = {"height: 48px; padding: 0 3rem; @media screen and (max-width: 768px){width: 50vw};"}> Sign Up </Button>
                        </FormWrap>
                    </form>
                </EmailContent>
            </EmailContainer> 
        </>
    )
}

export default Email
