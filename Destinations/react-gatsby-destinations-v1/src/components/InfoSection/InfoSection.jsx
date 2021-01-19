import React from 'react'
import { ProductCard, ProductInfo, ProductsContainer, ProductsHeading, ProductWrapper, TextWrap, ProductTitle, ProductImg } from './InfoSectionElements'
import {ImLocation} from "react-icons/im"
import {useStaticQuery, graphql} from "gatsby"
import {Button} from "../Button"


const InfoSection = ({heading}) => {

    const data = useStaticQuery(graphql`
    query InfoSectionQuery {
        allInfoDataJson {
          edges {
            node {
              alt
              button
              name
              img {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                               }
                          }
                     }
                 }
            }
        }
    }
`)

const getTrips = () => {
    const tripsArray = []
    data.allInfoDataJson.edges.forEach((el,i) => {
        tripsArray.push(
            <ProductCard key = {i}>
                <ProductImg src = {el.node.img.childImageSharp.fluid.src} alt = {el.node.alt} fluid = {el.node.img.childImageSharp.fluid}/>
                 <ProductInfo>
                     <TextWrap>
                         <ImLocation />
                         <ProductTitle> {el.node.name}</ProductTitle>
                     </TextWrap>
                     <Button round = "true" style = {{position:"absolute", top: "420px", fontSize: "1rem"}} to = "/trips">{el.node.button}</Button>

                 </ProductInfo>
            </ProductCard>
        )
    })

    return tripsArray
}

    return (
        <>
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
            {getTrips(data)}
            </ProductWrapper>

        </ProductsContainer>
        </>
    )
}

export default InfoSection
