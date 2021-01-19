import styled from "styled-components"
import Img from "gatsby-image"


export const TestimonialsHeading = styled.h2`
    color: #077bf1;
    font-size: 2rem;
    padding-left: 2rem;
    margin-bottom: 1rem;

`

export const TestimonialsDescription = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 2rem;
    font-size: clamp(1rem, 5vw, 1.3rem);
    font-weight: bold;

`
export const TestimonialsContainer = styled.div`
    width: 100%;
    background: #f1f0f0;
    color: #000;
    padding: 5rem calc((100vw - 1300px)/2);
    height: 100%;
`
export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;

    }
`
export const ColumnOne = styled.div`
    margin-top: 5rem;
    display: grid;
    grid-template-rows: 200px 200px;

    @media screen and (max-width: 768px){
    grid-template-rows: 1fr 1fr;
    margin-top: 0rem;


    }


`
export const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color: #3b3b3b;
    }
`

export const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;
    

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr; 
    }

`
export const TestimonialsHeadingContainer = styled.div`
`

export const TestimonialImg = styled(Img)`
    border-radius: 10px;
    height: 100%;
    
`