import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import moon from '../assets/graphics/Moon.jpg';
import mocha from '../assets/graphics/soy-mocha.jpg';

// const Container = styled.div`
//   margin: 3rem auto;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default ({data}) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    {/* <Container> */}
    <p>Styled Components is cool</p>
    <User
      username="Moon"
      avatar={moon}
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Soy mocha"
      avatar={mocha}
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  {/* </Container> */}
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`