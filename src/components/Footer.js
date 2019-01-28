import React from 'react'
import { css } from "@emotion/core"
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"

const Footer = () => {
    
    return (
        <footer css={css`
        display: inline-block;
        width: 100%;
        margin: 8rem auto 0;
        padding: 7.5rem 10px;
        background-color: beige;
        `}>
            <div css={css`
            display: block;
            position: relative;
            max-width: 114.0rem;
            margin: 0 auto;
            padding: 0;`}>
                <div css={css`
                display: inline-block;
                width: 100%;`}>
                    <div css={css`
                    float: left;`}>
                       {/* <div css={css`float: right;`}> */}
                        {/* <div css={css`text-align: right;`}> */}
                            <ul css={css`
                            margin: 0;
                            padding: 0;
                            list-style-type: none;
                            `}>
                                <li css={css`
                                margin: 0;
                                padding: 0;
                                list-style-type: none;
                                display: inline-block;
                                width: auto;
                                margin: 0 3rem 0 0;
                                `}>    
                                    <a css={css`
                                    margin: 0;
                                    padding: 0;
                                    list-style-type: none;
                                    font-size: 2rem;
                                    line-height: normal;
                                    color: $white;
                                    &:hover {
                                        color: $orange;
                                    }
                                    `}
                                    href="https://twitter.com/ayeshasilvia" target="_blank">
                                        <FaTwitter className="social-icon" size="32" />
                                    </a>
                                </li>
                                <li css={css`
                                margin: 0;
                                padding: 0;
                                list-style-type: none;
                                display: inline-block;
                                width: auto;
                                margin: 0 3rem 0 0;
                                `}>    
                                    <a css={css`
                                    margin: 0;
                                    padding: 0;
                                    list-style-type: none;
                                    font-size: 2rem;
                                    line-height: normal;
                                    color: $white;
                                    &:hover {
                                        color: $orange;
                                    }
                                    `}
                                    href="https://github.com/ayeshasilvia" target="_blank">
                                        <FaGithub className="social-icon" size="32" />
                                    </a>
                                </li>
                                <li css={css`
                                margin: 0;
                                padding: 0;
                                list-style-type: none;
                                display: inline-block;
                                width: auto;
                                margin: 0 3rem 0 0;
                                `}>    
                                    <a css={css`
                                    margin: 0;
                                    padding: 0;
                                    list-style-type: none;
                                    font-size: 2rem;
                                    line-height: normal;
                                    color: $white;
                                    `}
                                    href="https://www.facebook.com/silvia.ayesha" target="_blank">
                                        <FaFacebook className="social-icon" size="32" />
                                    </a>
                                </li>
                            </ul>
                        {/* </div> */}
                    {/* </div> */}
                    <div css={css`
                        font-size: 1.2rem;
                        line-height: normal;
                        color: purple;`}>
                            &copy; 2018 Ayesha M. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );  
};

export default Footer;