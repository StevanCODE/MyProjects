import React, {useState, useEffect} from 'react'
import { GiHammerDrop } from 'react-icons/gi'
import { menuData } from '../../data/MenuData'
import { Button } from "../Button/Button"
import { Logo, LogoDiv, LogoIcon, MenuBars, MenuTimes, Nav, NavBtn, NavMenu, NavMenuLinks } from "./NavbarElements"


const Navbar = () => {
    
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [scrolled, setScrolled] = useState(false)
    const handleScroll = () => setScrolled(true)
    const handleScroll2 = () => setScrolled(false)

    document.addEventListener("scroll", handleScroll)

    var isScrolling;
    window.addEventListener('scroll', function ( event ) {
        window.clearTimeout( isScrolling );
        isScrolling = setTimeout(function() {
            handleScroll2()
    
        }, 700);
    
    }, false);


    return (
        <>
        <Nav onClick = {handleClick} scrolled = {scrolled}>
            <LogoDiv>
                <LogoIcon/>
                <Logo to = "/"> ELIXR </Logo>
            </LogoDiv>
           {click ?  <MenuTimes onClick = {handleClick}/> : <MenuBars onClick = {handleClick}/>}
            <NavMenu onClick = {handleClick} click = {click}>
                {menuData.map((item,index) => {
                   return <NavMenuLinks to = {item.link} key = {index}> {item.title} </NavMenuLinks>
                })}
            <NavBtn>
                <Button to = "/contact"  primary="true" big="true" style = {{background: "transparent"}}> Contact Us </Button>
            </NavBtn>
            </NavMenu>
        </Nav>
            
        </>
    )
}

export default Navbar
