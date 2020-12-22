import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from "./Data"

function Products() {
    return (
        <>
         <Pricing/>
         <HeroSection {...homeObjTwo}/>
        </>
    )
}

export default Products
