import styled from "styled-components"
import {Link} from "react-router-dom"


export const Button = styled(Link)`
    background: ${( {primary} ) => primary ? "#000d1a" : "#CD853F"};
    white-space: nowrap;
    border: none;
    outline: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px; 
    font-weight: 700;
    padding: ${( {big} ) => big ? "14px 25px" : "16px 24px"};
    color: ${( {primary} ) => primary ? "#fff" : "#000d1a"};
    font-size: ${( {big} ) => big ? "20px" : "14px"};

    &:hover{
        transform: translateY(-2px)
    }

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
        font-weight: 400;
    }   
    
`