import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import {IoMdCheckmarkCircleOutline} from "react-icons/io"
import { TestimonialsContainer,TestimonialsHeading,TestimonialsDescription,ContentWrapper,ColumnOne,Testimonial,ColumnTwo,TestimonialsHeadingContainer, TestimonialImg } from './TestimonialsElements'



const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query TestimonialsQuery {
        allFile(filter: {ext: {regex: "/(jpg)/"}, name: {in: ["port1", "port2"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `)

    return (
        <>
        <TestimonialsContainer>
            <TestimonialsHeadingContainer>
                <TestimonialsHeading> Testimonials </TestimonialsHeading>
                <TestimonialsDescription>  What people say  </TestimonialsDescription>
            </TestimonialsHeadingContainer>
            <ContentWrapper>
                <ColumnOne>
                <Testimonial>
                    <IoMdCheckmarkCircleOutline css = {"font-size: 2rem; color: #3fffa8; margin-bot: 1rem"}/>
                    <h3> Richard Johnson </h3>
                    <p> "The greatest experience of my life. It was so much fun exploring the mountains and they made booking the trip and accommodation really easy." </p>
                </Testimonial>

                <Testimonial>
                    <FaRegLightbulb css = {"font-size: 2rem; color: orange; margin-bot: 1rem"}/>
                    <h3> Olivia Morrison </h3>
                    <p> "I had so much fun on my trip, everything was well organized and planned, i didn't have to worry about a thing, great agency!" </p>
                </Testimonial>
                </ColumnOne>

                <ColumnTwo>
                {data.allFile.edges.map((el,i) => (
                  <TestimonialImg key = {i} fluid = {el.node.childImageSharp.fluid}/>
                ))}
                    
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
        </>
    )
}

export default Testimonials
