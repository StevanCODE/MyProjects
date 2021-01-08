import styled from "styled-components"
import { Container } from "../../GlobalStyles"
import { Link } from "react-router-dom"

export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({ lightBg }) => lightBg ? "#fff" : "#101522"};
    overflow: hidden;
`


export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => imgStart ? "row-reverse" : "row"};
    overflow: hidden;
`


export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1 1 50%;
    max-width: 50%;
    overflow: hidden;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    overflow: hidden;

    @media screen and (max-width: 768px){
        padding-bottom: 65px;
        overflow: hidden;
    }
`


export const TopLine = styled.div`
    color: ${({lightTopLine}) => lightTopLine ? "#a9b3c1" : "#4B59F7"};
    font-size: 1.2rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    overflow: hidden;
    padding-bottom: 8px;   
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 3rem;
    line-height: 1.1;
    color: ${({lightText}) => lightText ? "#f7f8fa" : "#1c2237"};

`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;   
    color: ${({lightTextDesc}) => lightTextDesc ? "#f7f8fa" : "#1c2237"};
`

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => start ? "flex-start" : "flex-end"};
    overflow: hidden;

`

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    max-height: 500px;
    height: 400px;
    overflow: hidden;
    
`