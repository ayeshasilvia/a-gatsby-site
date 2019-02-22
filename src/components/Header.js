import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const FloatRight = styled.div`
  float: right;
  font-size: 17px;
`
const Header = (props) => (
    <header css={css`
                background-color: beige;
                `}>
        <Link css={css`
          margin-bottom: ${rhythm(2)};
          font-style: normal;
          color: purple;
        `} 
        to="/"><strong>{props.title}</strong></Link>
        <FloatRight>
        <Link css={css`
          margin-right: ${rhythm(1)};
          font-style: normal;
          color: purple;
        `} 
        to="/">Home</Link>&nbsp;
        <Link css={css`
          margin-left: ${rhythm(2)};
          font-style: normal;
          color: purple;
        `} 
        to="/about">About</Link>
        <Link css={css`
          margin-left: ${rhythm(3)};
          font-style: normal;
          color: purple;
        `} 
        to="/events">Events</Link>
        </FloatRight>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
