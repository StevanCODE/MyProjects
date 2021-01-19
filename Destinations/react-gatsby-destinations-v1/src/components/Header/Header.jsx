import React, {useState,useEffect} from 'react'
import { Bars, Nav, NavBtn, NavLink, NavMenu, Times } from './HeaderElements'
import {menuData} from "../../data/MenuData"
import { Button } from '../Button'


const Header = () => {

    const [active,setActive] = useState(false)
    const handleClick = () => setActive(!active)




    return (
             <Nav onClick = {handleClick}>   
                <NavLink css = {"left: 20px;"} to = "/" > Destinations </NavLink>
                {active ? <Times onClick = {handleClick}/> : <Bars onClick = {handleClick}/>}
                <NavMenu onClick = {handleClick} active = {active} css = {"padding-top: .8rem;"}>
                    {menuData.map((el,i) => {
                        return <NavLink key = {i} to = {el.link}> {el.title} </NavLink>
                    })}
                </NavMenu>

                <NavBtn> 
                    <Button round = "true"  to = "/trips"> Book a Flight </Button>
                </NavBtn>
        </Nav>
    )
}

export default Header
