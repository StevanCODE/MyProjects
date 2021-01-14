import styled from "styled-components"
import {Link} from "react-router-dom"

export const Section2 = styled.section`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    padding: 1rem 1rem;
    margin-bottom: 4rem;
    margin-top: 2rem;
    height: auto;
    width: 100%;

    h2 {
        padding: 1.5rem;
        margin-left: 1rem;
        font-weight: bolder;
        font-size: 2.5rem;
    }

    h3{
        font-size: 1.3rem;
        margin: .7rem 0;
        font-weight: 400;
    }
`


export const Section2Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    height: 600px;

    
`


export const Section2LeftDiv = styled.div`
    align-self: flex-start;
`

export const Section2RightDiv = styled.div`
    align-self: flex-end;

`

export const Section2Img = styled.img`
    width: 45vw;
    height: 400px;
    
    object-fit: cover;
`

export const SectionIconWrap = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`

export const Section2Link = styled(Link)`
    margin: 0 0.5rem 0 0;
    text-decoration: none;  
    font-size: 1.2rem;
    color: #000;
`
