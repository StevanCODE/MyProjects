import styled from "styled-components"
import {Link} from "react-router-dom"

export const CarGrid = styled.section`
    display: grid;
    grid-template-columns: 27vw 27vw 27vw;
    grid-gap: 10px;
    grid-template-rows: 1fr;


`

export const CarContainer = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;;
    justify-content: space-evenly;
    border-top: 2px solid #0b4c82;
    border-bottom: 3px solid #0b4c82;
    padding: 0;
    margin: 20px;
    box-shadow: 0 2px 2px 0 rgba(160,160,160,.65);
    height: 50vh;
    width: 27vw;

    
`
export const CarWrap = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    flex-basis: 1 1 250px;
`
export const CarDiv = styled.div`
    margin-bottom: 5px;
`
export const CarImage = styled.img`
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
    display: inline-block;
    vertical-align: middle;
`
export const CarLink = styled(Link)`

        font-family: "Poppins",sans-serif;
        letter-spacing: 0;
        color: #0b4c82;
        width: auto;
        max-width: 98%;
        -o-text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
        margin-right: .25rem;
        font-weight: bold;

        h2 {
            font-size: 1.3rem;
        }
`
export const CarUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row wrap;


    li {
        margin-right: 5px;
        color: rgba(0,0,0,.54);
        
    }
`
export const LocationDiv = styled.div`
    position: absolute;
    bottom: 20px;
    right: 30px;

    h3 {
        font-weight: 400;
        font-size: 1rem;
    }
`
export const NumberDiv = styled.div`
    position: absolute;
    bottom: 20px;
    left: 15px;
`

export const CarInfo = styled.div`
    height: 12vh;
`


export const PriceDiv = styled.div`
    height: 5vh;
    display: flex;
    align-items: flex-end;
`