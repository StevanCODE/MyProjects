import styled from "styled-components"
import { Container } from "../../GlobalStyles"
import { DiRuby } from "react-icons/di"
import { Link } from "react-router-dom"


export const Nav = styled.nav`
        background: #101522;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        position: sticky;
        top: 0;
        z-index: 999;
        overflow: hidden;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 100%;
    ${Container}
`


export const NavLogo = styled(Link)`
    color: #c88eff;
    justify-self:flex-end;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;

`

export const NavIcon = styled(DiRuby)`
    margin-right: 0.5rem;
`


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;
  }
`;



export const NavMenu = styled.ul`
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width : 960px){
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => click ? 0 : "-100%"};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`


export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #c88eff
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &:hover{
            border:none;
        }
    }  
`

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;

    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #c88eff;
            transition: all 0.5s ease;
        }
    }
`


export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;

    }
`

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;

`