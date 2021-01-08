import styled from 'styled-components';


export const SignUpContainer = styled.section`
    display: flex;
    background-color: #4b59f7;
    max-width: 1300px;
    width: 100%;
    height: 700px;
    overflow: hidden;
    align-items: space-around;
    justify-content: flex-start;
    flex-flow: column wrap;

    @media screen and (max-width: 820px){
        align-items: center;
        justify-content:flex-start;
        flex-flow: column wrap;
        height: 130vh;
        
    }

`

export const SignUpWrapper = styled.div`

    position:relative;
    display: flex;
    flex-flow: row wrap;
    align-items: space-around;
    justify-content: space-around;
    padding: 3rem 0;


    @media screen and (max-width: 820px){
        flex-flow: row wrap;
        height: 40vh;
    }

`


export const SignUpFormContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position:relative;
`

export const H1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin: 2rem auto; 
    text-align: left;
    
    border-bottom: 2px white solid;

    @media screen and (max-width: 820px){
        justify-content: center;
        align-items: center;
        margin: 2rem auto;
        margin-top: 3rem;
    }
`

export const H2 = styled.h2`
    width: 350px;
    text-align: center;
    white-space: pre-wrap;
    color: #fff;
    font-size: 2rem;
`

export const SignUpForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    padding: 16px;

`

export const SignUpInput = styled.input`
    margin: 16px auto;
    border-radius: 20px;
    padding: 5px 20px;
    border: 2px white solid;
    cursor: pointer;
    font-size: 1.1rem;


    &::placeholder{
        font-size: 1.1rem;
        font-weight: bold;
        color: #000;
        letter-spacing: 1.5px;
        text-align: left;
        
    }


    &:focus {
        transform: scale(1.1);
        box-shadow: -2px 2px 7px #4b59f7;  
    }
`   

export const SignUpInputSubmit = styled.input`
    font-size: 1.3rem;
    margin-top: 1rem;
    padding: 5px 15px;
    border-radius: 20px;
    background-color: #fff;
    border: 2px white solid;
    &:hover{
        transform: scale(1.1);
        box-shadow: -2px 2px 7px #4b59f7;
    }


`


export const SignUpSvg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
`

export const SignUpImg = styled.img`
    width: 450px;
    
    @media screen and (max-width: 820px){
        width: 300px
    }


    @media screen and (max-width: 620px){
        width: 250px;
        position: relative;
        top: -17px;
    }
`