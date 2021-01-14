import React from 'react'
import {IoArrowForward} from "react-icons/io5"
import { Section2, Section2Img, Section2LeftDiv, Section2Link, Section2RightDiv, Section2Wrapper, SectionIconWrap } from './InfoSection2Elements'


const InfoSection2 = () => {
    return (
        <>
            <Section2>
                <h2> View Our Newest Homes</h2>
                <Section2Wrapper>
                    <Section2LeftDiv>
                        <Section2Img src = "images/info2house1.jpg" alt = "house"/>
                        <h3> 8 Bad 10 Bath House in Venice, California </h3>
                        <SectionIconWrap>
                        <Section2Link to = "/homes"> View Details </Section2Link>
                        <IoArrowForward/>
                        </SectionIconWrap>
                    </Section2LeftDiv>

                    <Section2RightDiv>
                    <Section2Img src = "images/info2house2.jpg" alt = "house"/>
                        <h3> 4 Bed 2 Bath House in Miami, Florida </h3>
                        <SectionIconWrap>
                        <Section2Link to = "/homes"> View Details </Section2Link>
                        <IoArrowForward/>
                        </SectionIconWrap>
                    </Section2RightDiv>
                </Section2Wrapper>

                
            </Section2>
        </>
    )
}

export default InfoSection2
