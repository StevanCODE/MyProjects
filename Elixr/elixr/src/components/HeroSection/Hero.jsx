import React, {useState, useRef, useEffect} from 'react'
import  {sliderData}  from "../../data/SliderData"
import { Button } from '../Button/Button'
import { Arrow, HeroContent, HeroImage, HeroSection, HeroSlide, HeroSlider, HeroWrapper, NextArrow, PrevArrow, SliderButtons } from './HeroElements'
import { css } from "styled-components/macro"

const Hero = () => {

    const [current, setCurrent] = useState(0)
    const length = sliderData.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1)   
        } 
        
        timeout.current = setTimeout(nextSlide, 5000)

        return function(){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    },[current,length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
      
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
      
    }


    if(!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null
    }

    return (
        <>
        <HeroSection>
            <HeroWrapper>
            {sliderData.map((value,index) => {
                return (
                    <HeroSlide key = {index}>
                        {index === current && (
                            <HeroSlider>
                            <HeroImage src = {value.image} alt = {value.alt}/>
                            <HeroContent>
                                <h1>{value.title}</h1>
                                <p> {value.price}</p>
                                <Button to = {value.path} primary="true" big= "true" style = {{marginTop: "30px"}} > {value.label}
                                <Arrow/>
                                </Button>
                            </HeroContent>
                        </HeroSlider>
                        )}

                    </HeroSlide>
                )
            })}
            <SliderButtons>
                <PrevArrow onClick = {prevSlide}/>
                <NextArrow onClick = {nextSlide}/>
            </SliderButtons>
            </HeroWrapper>
        </HeroSection>
        </>
    )
}

export default Hero
