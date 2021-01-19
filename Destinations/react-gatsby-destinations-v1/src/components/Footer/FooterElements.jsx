import styled from "styled-components"
import {Link} from "gatsby"


export const FooterContainer = styled.footer`
    padding: 5rem 1rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    color: #000;
    background: #fff;

    @media screen and (max-width: 400px){
        grid-template-columns: 1fr;
        align-items: start;
        justify-content:start;
    }
    
`

export const FooterLinksWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: start;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`


export const FooterDescription = styled.div`
    padding: 0 2rem;
    position: relative;
    
    
    @media screen and (max-width: 768px){
        left: 70px;
    }

    @media screen and (max-width: 600px){
        left: 25px;
    }



    @media screen and (max-width: 400px){
        left: 20px;
    }

    h3{
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        margin-bottom: 2rem;
        color: #f26a2e;
        
    }

    p {
        font-size: clamp(1rem, 3vw, 1.5rem);
        
    }
`

export const FooterLinkItems = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 768px){
        padding: 1rem;
        
    }
`


export const FooterLinkTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 16px;
`



export const FooterLink = styled(Link)`
    text-decoration: none;
    color: #3d3d4e; 
    margin-bottom: 0.5rem;

    &:hover{
        color: #f26a2e;
        transition: all 0.3s ease-out;
    }
`