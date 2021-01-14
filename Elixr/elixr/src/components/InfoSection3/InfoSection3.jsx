import React, {useState, useEffect} from 'react'
import { Button } from '../Button/Button'
import { InfoSection3Section, InfoSection3LeftDiv, InfoSection3RightDiv, InfoSection3Wrap } from './InfoSection3Elements'

const InfoSection3 = () => {

    const [animation, setAnimation] = useState(false)
    const handleAnimation = () => setAnimation(true)

    // useEffect(() => {
    //     handleAnimation()
    // },[])
    
    document.addEventListener('scroll', function (e) {
        var top  = window.pageYOffset + window.innerHeight,
            isVisible = top > document.querySelector(".info").offsetTop;
      
         if (isVisible) {
           handleAnimation()
         }
      });

    return (
        <>
        <InfoSection3Section className = "info">
                <InfoSection3Wrap>
                    <InfoSection3LeftDiv animation = {animation} >
                        <h2>
                            Stunning Interior
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, id aliquid! A numquam expedita similique minima consequatur aliquid veritatis repellat?
                        </p>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, consectetur?
                        </p>
                        <Button style = {{marginTop: "1rem", marginLeft: "-0.4rem"}} primary = "true"  big = 'true' to = "/"> Learn More </Button>
                    </InfoSection3LeftDiv>

                    <InfoSection3RightDiv animation = {animation}>
                        <img src = "images/interiordesign.jpg" alt = "interior of the house"></img>
                    </InfoSection3RightDiv>
                </InfoSection3Wrap>
            </InfoSection3Section>
        </>
    )
}

export default InfoSection3
