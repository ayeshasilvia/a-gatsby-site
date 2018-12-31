import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const Header = (props) => (
    <header css={css`
                background-color: beige;
                `}>
        <Link css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
          color: purple;
        `} 
        to="/"><strong>{props.title}</strong></Link>
        <Link css={css`
          margin-left: ${rhythm(10)};
          display: inline-block;
          font-style: normal;
          color: purple;
        `} 
        to="/">Home</Link>
        <Link css={css`
          margin-left: ${rhythm(1)};
          display: inline-block;
          font-style: normal;
          color: purple;
        `} 
        to="/about">About</Link>
        <Link css={css`
          margin-left: ${rhythm(1)};
          display: inline-block;
          font-style: normal;
          color: purple;
        `} 
        to="/events">Events</Link>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
