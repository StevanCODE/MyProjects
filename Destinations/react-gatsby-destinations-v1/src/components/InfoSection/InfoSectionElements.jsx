import styled from "styled-components"
import Img from "gatsby-image"


export const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px)/2);
    background: #fff;
    color: #fff;

`

export const ProductsHeading = styled.div`
    font-size: clamp(1.3rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
    
`

export const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;

    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
        
    }

`


export const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position:relative;
    border-radius: 10px;
    transition: all 0.2s ease;

`

export const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: all 0.3s ease;
    margin-bottom: 1.6rem;


    &:hover{
        filter: brightness(100%)
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }
`

export const TextWrap = styled.div`
    
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
    
`

export const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`