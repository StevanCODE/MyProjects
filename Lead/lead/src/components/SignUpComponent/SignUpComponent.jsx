import React from "react"
import { H1, H2, SignUpContainer, SignUpForm, SignUpFormContainer, SignUpImg, SignUpInput, SignUpInputSubmit, SignUpSvg, SignUpWrapper } from "./SignUpElements"


const SignUpComponent = () => {
    return (
        <>
        <SignUpContainer>
            <H1>
                Sign Up Today
            </H1>
            <SignUpWrapper>
                <SignUpFormContainer>
                    <H2> Enter Your Credentials Bellow</H2>
                    <SignUpForm>
                        <SignUpInput type= "text"  placeholder = "username"/>
                        <SignUpInput type = 'password' placeholder = "password"/>
                        <SignUpInput type = "email" placeholder = "e-mail"/>
                        <SignUpInputSubmit type = "submit" value = "Sign Up"/>
                    </SignUpForm>
                </SignUpFormContainer>

                <SignUpSvg>
                    <SignUpImg src="images/sign-up.svg"></SignUpImg>
                </SignUpSvg>
            </SignUpWrapper>
        </SignUpContainer>
        </>
    )
}

export default SignUpComponent
