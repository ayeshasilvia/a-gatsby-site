import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { StaticQuery, Link, graphql } from "gatsby"
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components"
import img from '../assets/graphics/bg-1.jpg';

const Container = styled.div`
display: flex;
background-image: url(${img});
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
justify-content: center;
width: 1700px;
height: 1000px;
`

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
    <div>
  <Header title={data.site.siteMetadata.title}/>
  <Container>
  {children}
  </Container>
  <Footer/>
  </div>
  )}
  />
)