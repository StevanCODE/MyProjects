import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FooterContainer, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

function Footer() {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to = "/">
                        <SocialIcon/>
                        Explore
                    </SocialLogo>
                    <WebsiteRights>
                       Explore © {new Date().getFullYear()} 
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink target = "_blank" href = "/"  aria-label = "Facebok"> 
                        <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink target = "_blank" href = "/"  aria-label = "Instagram"> 
                        <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink target = "_blank" href = "/"  aria-label = "Twitter"> 
                        <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
