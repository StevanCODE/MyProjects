import styled from "styled-components"
import { Link } from "react-router-dom"


export const FooterSection = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 65vh;
    background-color: #000E18;

`

export const FooterWrap = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
`

export const FooterLeft = styled.div`
    color: #fff;
    display: flex;
    width: 700px;
    flex-flow: column wrap;
    align-items:flex-start;
    justify-content: center;

    
    h2 {
        font-size: 4rem;
    }
`

export const FooterRight = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 300px;

`

export const FooterRightDiv = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    line-height: 2.7rem;
`

export const SocialIconsDiv = styled.div`
    display: flex;
    width:100%;
    height: 15vh;
    justify-content: flex-start;
    align-items: flex-end;
    flex-flow: row wrap;


`
export const SocialIconLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    padding: 0 1rem;
    
`

export const FooterLink = styled(Link)`
 text-decoration: none;
 color: #fff;

`
export const FooterLinkHeading = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: bolder;
`
