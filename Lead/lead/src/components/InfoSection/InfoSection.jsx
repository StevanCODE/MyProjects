import React from 'react'
import {Link} from "react-router-dom"
import { Button, Container } from '../../GlobalStyles';
import { Heading, Img, ImgWrapper, InfoColumn, InfoRow, InfoSec, Subtitle, TextWrapper, TopLine } from './InfoSectionElements';



function infoSection({lightBg, imgStart, lightTopLine, lightText, lightTextDesc,headline,topLine, description, primary, buttonLabel, start, img, alt}) {
    return (
        <>
        <InfoSec lightBg = {lightBg}>
            <Container>
                <InfoRow imgStart = {imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine = {lightTopLine}> {topLine} </TopLine>
                            <Heading lightText = {lightText}> {headline} </Heading>
                            <Subtitle lightTextDesc = {lightTextDesc}> {description} </Subtitle>
                            <Link to = "sign-up"> 
                            <Button big fontBig primary= {primary}> 
                            {buttonLabel} 
                            </Button> 
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start = {start}>
                            <Img src={img} alt = {alt}></Img>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
        </>
    )
}

export default infoSection
