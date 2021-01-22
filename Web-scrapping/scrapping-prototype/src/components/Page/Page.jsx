import React from 'react'
import { CarContainer, CarDiv, CarGrid, CarImage, CarInfo, CarLink, CarUl, CarWrap, LocationDiv, NumberDiv, PriceDiv } from './PageElements'
import {finalJson} from "../Page/PageData"

const Page = () => {
    return (
        <>
            <CarGrid>
            {finalJson.map(el => {
                return (
                    <CarContainer>
                        <CarWrap>
                            <CarDiv>
                            <CarLink> <CarImage src = {el.srcTxt}/> </CarLink>
                            </CarDiv>

                            <CarDiv>
                            <CarLink> <h2> {el.nameText} </h2> </CarLink>
                            </CarDiv>

                            <CarInfo>
                            <CarDiv>
                                <CarUl>
                                    <li> {el.mileageText} </li>
                                    <li> {el.engineSizeText}</li>
                                    <li> {el.transimssionText}</li>
                                    <li> {el.fuelTypeText} </li>
                                </CarUl>
                            </CarDiv>

                            <PriceDiv>
                                <h3> {el.priceText} </h3>
                            </PriceDiv>
                            
                            <LocationDiv>
                                <h3> {el.locationText} </h3>
                            </LocationDiv>

                            <NumberDiv>
                                <CarLink> 
                                    {el.numberText} 
                                </CarLink>
                            </NumberDiv>
                            </CarInfo>
                        </CarWrap>
                    </CarContainer>
                )
            })}
         </CarGrid>
        </>
    )
}

export default Page
