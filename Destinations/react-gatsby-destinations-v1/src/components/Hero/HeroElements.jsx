import styled from "styled-components"


export const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    overflow: hidden;
    
    
    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100% );

    }
`


export const HeroBg = styled.div`
      position:absolute;
      width: 100%;
      height: 100%;
      
    
`

export const VideoBg = styled.video`
    z-index: 1;
    width:100%;
    height:100%;
    object-fit: cover;
    -o-object-fit: cover;
    
`


export const HeroContent = styled.div`
    z-index: 50;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw -1300px)/2);
    
    
    
    
`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;

    h1 {
        color: #fff;
        font-size: clamp(2rem, 6vw, 4rem);
        margin-bottom: 1rem;
        letter-spacing: 3px;
        padding: 0 1rem;

    }

    p {
        color: #fff;
        font-size: clamp(1rem, 3vw, 3rem);
        margin-bottom: 2rem;
        font-weight: 400;

    }
`