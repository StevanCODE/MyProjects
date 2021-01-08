import styled from "styled-components"
import { Link } from "react-router-dom"
import { DiRuby } from "react-icons/di"



export const FooterContainer = styled.footer`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;


`

export const FooterSubHeading = styled.p`
    margin-bottom: 24px;
    font-size: 24px;

`

export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;

`


export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    
    @media screen and (max-width: 820px){
        flex-direction: column;
        width: 80%;
    }
`


export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 1rem;
    border: 1px solid #fff;

    &::placeholder{
        color: #242424;
    }

    @media screen and (max-width: 820px){
        width: 100%;
        margin: 0 0 16px 0;
    }
`

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    overflow: none;
    @media screen and (max-width: 820px){
        padding-top: 32px;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        padding-left: 2rem;

    }
`


export const FooterLinksWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 790px){
        align-items: center;
        justify-content: center;
        flex-wrap: wrap; 
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 790px){
         align-items: center;
        
        
    }


    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        align-items: flex-start;
        justify-content: flex-start;
      
        
    }
`


export const FooterLinkTitle = styled.h2`
    margin-bottom: 1rem;
    align-self: flex-start;
    justify-content: flex-start;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    align-self: flex-start;


    &:hover {
        color: #c88eff;
        transition: all 0.5s ease;

    }
`


export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;

`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
        flex-wrap: wrap;
    }
`


export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;

`


export const SocialIcon = styled(DiRuby)`
    margin-right: 10px;

`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

`


export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
`

export const SocialHeading = styled(Link)`
    color: #c88eff;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;

`