import React from 'react'
import { Button } from '../Button/Button'
import { ColumnLeft, ColumnRight, Section, SectionContainer } from './InfoSectionElements'

const InfoSection = ({heading, paragraphOne, buttonLabel, reverse, imageSrc}) => {
    return (
        <>
        <Section>
            <SectionContainer>
                <ColumnLeft reverse = {reverse}>
                <h1> {heading} </h1>
                <p> {paragraphOne} </p>
                <Button primary = "true" big = "true" to = "/homes"> {buttonLabel} </Button>
                </ColumnLeft>
                <ColumnRight reverse = {reverse}>
                <img src= {imageSrc} alt = "home"></img>
                </ColumnRight>
            </SectionContainer>
        </Section>
        </>
    )
}

export default InfoSection
