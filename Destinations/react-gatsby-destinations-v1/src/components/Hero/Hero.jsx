import React from 'react'
import { Button } from '../Button'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroItems } from './HeroElements'
import Video from "../../assets/video1.mp4"

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src = {Video} type = "video/mp4"  autoPlay loop muted playsInline/>
            </HeroBg>

            <HeroContent>
                <HeroItems>
                    <h1> Unreal Destinations </h1>
                    <p> Out of this world </p>
                    <Button round = "true" big = "true" to = "/trips">Travel Now </Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
