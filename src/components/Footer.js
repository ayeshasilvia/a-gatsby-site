import React from 'react'
import { css } from "@emotion/core"
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"
import styled from "styled-components"

const StyledFooter = styled.footer`
	background-color: beige;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: normal 16px sans-serif;
	padding: 45px 50px;
	margin-top: 80px;
`

const StyledFooterLeft = styled.div`
	color:  #8f9296;
	font-size: 14px;
	margin: 0;
`

/* Footer links */

const StyledFooterLinksP = styled.p`
	font-size:18px;
	font-weight: bold;
	color:  #ffffff;
	margin: 0 0 10px;
	padding: 0;
`

const StyledFooterLinksA = styled.a`
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
`

const StyledFooterRight = styled.div`
	float: right;
	margin-top: 6px;
	max-width: 180px;
`
const StyledFooterRightA = styled.a`
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color:  #33383b;
    border-radius: 2px;

    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-left: 3px;
`

const Footer = () => {
    
    return (

        <StyledFooter>
       
			<StyledFooterRight>
            	<a href="https://twitter.com/ayeshasilvia" target="_blank">
                    <FaTwitter className="social-icon" size="32" />
                </a>
			    <a href="https://www.facebook.com/silvia.ayesha" target="_blank">
                    <FaFacebook className="social-icon" size="32" />
                </a>
                <a href="https://github.com/ayeshasilvia" target="_blank">
                    <FaGithub className="social-icon" size="32" />
                </a>
				<a href="https://www.linkedin.com/in/ayeshasilvia/" target="_blank">
                    <FaLinkedin className="social-icon" size="32" />
                </a>
                
            </StyledFooterRight>

			<StyledFooterLeft> 

				<StyledFooterLinksP>
                	<a href="/">Home</a>
                    .
					<a href="/about">About</a>
					·.
					<a href="/events">Events</a>
                    ..
					<a href="/">Contact</a>
                
				</StyledFooterLinksP>

				<p>Ayesha M &copy; 2019</p>
            </StyledFooterLeft>

        </StyledFooter>

    );  
};

export default Footer;