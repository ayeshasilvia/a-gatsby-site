import React from 'react'
import { css } from "@emotion/core"

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
                        <div css={css`
                        font-size: 1.2rem;
                        line-height: normal;
                        color: purple;`}>
                            &copy; 2018 Ayesha M. All Rights Reserved.
                        </div>
                    </div>
                    <div css={css`float: right;`}>
                        <div css={css`text-align: right;`}>
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
                                        <i css={css`
                                        @include icon;
                                        border-bottom: none;
                                        position: relative;
                                        `}
                                        className="fab fa-twitter"/>
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
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    );  
};

export default Footer;