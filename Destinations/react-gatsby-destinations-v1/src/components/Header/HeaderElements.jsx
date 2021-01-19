import styled from "styled-components"
import {Link} from "gatsby"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"



export const Nav = styled.nav`
    width: 100%;
    background:transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((100vw - 1300px)/2);
    z-index: 999;
    position: relative;
    font-size: 1.3rem;
    

`



export const NavLink = styled(Link)`
    position: relative;
    color: #fff;
    text-decoration: none;
    width: auto;
    height: auto;
    align-self: center;
    cursor: pointer;
    padding: 0 1rem;
    


`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width:768px){
        display: block;
        width: auto;
        height:auto;
        align-self: center;
        font-size: 2rem;
        padding: 1.2rem;
        z-index: 1001;


        
        
    }
`



export const Times = styled(FaTimes)`
    display: none;
    color: #fff;

    @media screen and (max-width:768px){
        display: block;
        width: auto;
        height:auto;
        align-self: center;
        font-size: 2rem;
        padding: 1.2rem;
        z-index: 1001;


        
        
    }
`

export const NavMenu = styled.div`
    height:auto;
    width: auto;
    display: flex;
    color: #fff;

    @media screen and (max-width: 768px){
        display: flex;
        flex-flow: column wrap;
        position: absolute;
        top: ${({active}) => active ? "0" : "-100vh"};
        height: 80vh;
        width: 100%;
        z-index: 1000;
        background: #1d2141;
        transition: all 0.5s ease;
        font-size: clamp(1.5rem, 5vw, 1.8rem);
        justify-content: space-evenly;

    }
`


export const NavBtn = styled.div`
    align-self: center;
    margin-right: 24px;
    transition: all 0.3s ease;

    &:hover{
        transform: translateY(-2px);

    }

    @media screen and (max-width: 768px){
        display: none;
    }
`

