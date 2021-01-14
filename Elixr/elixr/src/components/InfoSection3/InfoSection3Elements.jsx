import styled from "styled-components"



export const InfoSection3Section = styled.section`
    padding: 0;
    margin: 3rem auto;
    width: 100%;
    height: 110vh;
    background-color: #141414;
    display: flex;
    align-items: center;
    justify-content: center;
    



`


export const InfoSection3Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;  
    justify-content: space-between;
    
    
    

`


export const InfoSection3LeftDiv = styled.div`
    position: relative;
    left: ${({animation}) => animation ? "0%" : "-100%"};
    transition: all 1s ease;
    width: 713px;
    background-color: #fff;
    height: 350px;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 5rem;
    z-index: 10;
    
    h2 {
        font-size: 2rem;
        margin: 1rem 0;
    }
    
    p {
        margin: .5rem 0;
        font-size: 1rem;
    }
`


export const InfoSection3RightDiv = styled.div`
    z-index: 1;
    position: relative;
    right: ${({animation}) => animation ? "0%" : "-100%"};
    transition: all 1s ease;

    img {
        width: 550px;
        height: 500px;
    }
`