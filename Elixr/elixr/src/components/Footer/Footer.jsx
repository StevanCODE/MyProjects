import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterLeft, FooterLink, FooterLinkHeading, FooterRight, FooterRightDiv, FooterSection, FooterWrap, SocialIconLink, SocialIconsDiv } from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterWrap>
                    <FooterLeft>
                        <h2> Let's find <br></br> your Dream Home</h2>

                        <SocialIconsDiv>
                            <SocialIconLink target = "_blank" href = "/"  aria-label = "Facebok"> 
                            <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink target = "_blank" href = "/"  aria-label = "Instagram"> 
                            <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink target = "_blank" href = "/"  aria-label = "Twitter"> 
                            <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink target = "_blank" href = "/"  aria-label = "LinkedIn"> 
                            <FaLinkedin/>
                            </SocialIconLink>
                    </SocialIconsDiv>
                    </FooterLeft>

                    <FooterRight>
                        <FooterRightDiv>
                            <FooterLinkHeading> Contact Us </FooterLinkHeading>
                            <FooterLink>FAQ</FooterLink>
                            <FooterLink>Support</FooterLink>
                            <FooterLink>Questions</FooterLink>
                        </FooterRightDiv>

                        <FooterRightDiv>
                        <FooterLinkHeading> Offices </FooterLinkHeading>
                            <FooterLink>United States</FooterLink>
                            <FooterLink>Europe</FooterLink>
                            <FooterLink>Asia</FooterLink>
                        </FooterRightDiv>
                    </FooterRight>
                </FooterWrap>
            </FooterSection>
        </>
    )
}

export default Footer
