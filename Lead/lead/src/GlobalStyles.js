import styled , {createGlobalStyle} from "styled-components";



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
        ::selection {
        color:  #c88eff;
        background: #fff;
        overflow: hidden;
        }
    }
`


export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    overflow: hidden;


    @media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
    }
`


export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => primary ? "#4B59F7" : "#0467FB"};
    white-space: nowrap;
    padding: ${({big}) => big ? "12px 64px" : "10px 20px"};
    color: #fff;
    font-size: ${({fontBig}) => fontBig ? "20px" : "16px"};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.5s ease;
        background: #fff;
        background: ${({primary}) => primary ? "#0467FB" : "#4B59F7"};
    }


    @media screen and (max-width: 960px){
        width: 100%;
        overflow: hidden;
    }
`


export default GlobalStyle