import styled from "styled-components"
import EmailBg from "../../assets/EmailBg.jpg"

export const EmailContainer = styled.section`
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 100%),url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const EmailContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem; 
    }

    p {
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;

    }

    form {
        z-index: 10;

    }
`

export const FormWrap = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;

    @media screen and (max-width: 768px){
        flex-flow: column wrap;
    }

    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 3rem;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
        
        @media screen and (max-width:768px){
            display: flex;
            flex-flow: column wrap;
            padding: 0 1rem;
            margin-bottom: 1rem;
            width: 50vw;
            margin-right: 0;
                
            }
    }
`

