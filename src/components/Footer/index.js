import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink,
} from './FooterElements';
const Footer = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
            <FooterContainer id='contact'>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us </FooterLinkTitle>

                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Term of Service</FooterLink>

                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us </FooterLinkTitle>

                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Term of Service</FooterLink>

                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us </FooterLinkTitle>

                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Term of Service</FooterLink>

                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us </FooterLinkTitle>

                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Term of Service</FooterLink>

                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>

                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                Seventh Heaven
                            </SocialLogo>
                            <WebsiteRights>Seventh Heaven © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='#' target='_blank' aria-label='Twitter'>
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
