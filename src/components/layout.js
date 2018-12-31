import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { StaticQuery, Link, graphql } from "gatsby"
import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
  <div css={css`
  @include vendor('background-image', 'url("../assets/graphics/background_img.jpg")');
  `}>
  <Header title={data.site.siteMetadata.title}/>
  {children}
  <Footer/>
  </div>
  )}
  />
)