import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Title = styled.h1`
display: inline-block;
border-bottom: 1px solid;
color: white;
`
const StyledH3 = styled.h3`
margin-bottom: ${rhythm(1 / 4)};
color: white;
`
const StyledSpan = styled.span`
color: white;
`

const StyledLink = styled.span`
text-decoration: none;
color: white;
`
const StyledP = styled.p`
color: white;
`

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <Title>An amazing Gatsby site</Title>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
          <StyledLink>
          <Link to={node.fields.slug}>
          <StyledH3>
          {node.frontmatter.title} {" "}
          <StyledSpan>
          - {node.frontmatter.date}
          </StyledSpan>
          </StyledH3>
          <StyledP>{node.excerpt}</StyledP>
          </Link>
          </StyledLink>
          </div>
        )
        )}
      </div>
    </Layout>
  )
}


export const query = graphql`
query {
  allMarkdownRemark(sort:{fields:frontmatter___date, order:DESC}) {
    edges {
      node {
        id
        frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      fields{
        slug
      }
        excerpt
      }
    }
  }
}
`