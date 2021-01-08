import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button } from '../../GlobalStyles'
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinkTitle, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput, FooterLinkItems, FooterLinksWrapper, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink, SocialHeading } from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exclusive membership to receive the latest news.
                    </FooterSubHeading>
                    <FooterSubText>
                        You can unsubscribe at any time
                    </FooterSubText>
                    <Form>
                        <FormInput name = "email" type = "email" placeholder = "Your E-mail"/>
                        <Button fontBig> Subscribe </Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/'>Testimonials</FooterLink>
                    <FooterLink to='/'>Careers</FooterLink>
                    <FooterLink to='/'>Investors</FooterLink>
                    <FooterLink to='/'>Terms of Service</FooterLink>
                </FooterLinkItems>
                 <FooterLinkItems style = {{position: "relative", top: "-13px"}}>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/'>Contact</FooterLink>
                    <FooterLink to='/'>Support</FooterLink>
                    <FooterLink to='/'>Destinations</FooterLink>
                    <FooterLink to='/'>Sponsorships</FooterLink>
                 </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/'>Submit Video</FooterLink>
                    <FooterLink to='/'>Ambassadors</FooterLink>
                    <FooterLink to='/'>Agency</FooterLink>
                    <FooterLink to='/'>Influencer</FooterLink>
                </FooterLinkItems>
                 <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to='/'>Instagram</FooterLink>
                    <FooterLink to='/'>Facebook</FooterLink>
                    <FooterLink to='/'>Youtube</FooterLink>
                    <FooterLink to='/'>Twitter</FooterLink>
                 </FooterLinkItems>
                </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = "/">
                            <SocialIcon/>
                             <SocialHeading> LEAD </SocialHeading>
                        </SocialLogo>
                        <WebsiteRights>
                        © LEAD 2020
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href = "/" target = "_blank" aria-label = "Facebook">
                            <FaFacebook></FaFacebook>
                            </SocialIconLink>

                            <SocialIconLink href = "/" target = "_blank" aria-label = "Twitter">
                            <FaTwitter></FaTwitter>
                            </SocialIconLink>

                            <SocialIconLink href = "/" target = "_blank" aria-label = "Instagram">
                            <FaInstagram></FaInstagram>
                            </SocialIconLink>
                            
                            <SocialIconLink href = "/" target = "_blank" aria-label = "Linkedin">
                            <FaLinkedin></FaLinkedin>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </>
    )
}

export default Footer
