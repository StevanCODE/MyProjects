import React, {useState, useEffect} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtnLink, NavIcon, NavItem, NavItemBtn, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../GlobalStyles';






function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    },[])

    window.addEventListener("resize", showButton)

    return (
        <>
         <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
            <NavbarContainer>

                <NavLogo to = "/">
                    <NavIcon/>
                    LEAD
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                 {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick = {handleClick} click = {click}>
                    <NavItem>
                        <NavLinks to = "/"> Home </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "/services"> Services </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "/products"> Products </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to = "/sign-up"> <Button primary> Sign Up </Button> </NavBtnLink>
                        ): (
                            <NavBtnLink to ="/sign-up" ><Button onClick = {closeMobileMenu} fontBig primary> Sign Up </Button> </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar