import styled, {css} from "styled-components/macro"
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import {GiHealthPotion} from "react-icons/gi"


export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 999;
    position: fixed;
    width: 100%;
    text-decoration: none;
    background-color: ${({scrolled}) => scrolled ? "#000" : "transparent"};

    &:hover {
        background-color: #000;
        transition: all 0.3s ease-out;
        
    }
`

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
`

export const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-size: 1.5rem;
    text-decoration: none;


`

export const MenuBars = styled(FaBars)`
 display: none;

 @media screen and (max-width: 768px){
     display: flex;
     align-self: center;
     color: #fff;
     font-size: 1.7rem;
     cursor: pointer;

 }
`

export const MenuTimes = styled(FaTimes)`
 display: none;

 @media screen and (max-width: 768px){
     display: flex;
     align-self: center;
     color: #fff;
     font-size: 1.7rem;
     cursor: pointer;

 }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        left: 0;
        top: ${({click}) => (click ? "100%" : "-1000px")};
        opacity: ${({click}) => (click ? "1" : "0")};
        transition: all .3s ease-in-out;
        background: #111111;
        justify-content: flex-start;
        align-items: center;
    }
`


export const NavMenuLinks = styled(Link)`
    ${NavLink}
    text-decoration:none;
    
    @media screen and (max-width: 768px){
        height: 100px;
        font-size: 1.5rem;
        margin: 16px auto;
        font-weight: 400;
    }
    
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 16px auto;
    }

`


export const LogoIcon = styled(GiHealthPotion)`
    color: #f87a71;
    font-size: 1.7rem;
    display: inline;
`

export const LogoDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

`