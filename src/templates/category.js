import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Heading from '../components/Heading'
import Article from '../components/Article'
import MoreButton from '../components/MoreButton'
const config = require('../utils/siteConfig')

class CategoryTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.Article = React.createRef()
    this.MoreButton = React.createRef()
  }

  moreClick = () => {
    const promise = Promise.resolve()
    promise.then(this.Article.current.showItem()).then(this.articleDisplayCheck)
  }

  articleDisplayCheck = () => {
    const linkState = this.Article.current.state.linkDisplay
    const linkStateResult = linkState.every(item => item === 'block')
    if (linkStateResult) {
      this.MoreButton.current.hiddenItem()
    }
  }

  render() {
    const { data, pageContext } = this.props
    const { category } = pageContext
    const posts = data.allContentfulPost.edges
    const filterPosts = posts.filter(
      post => post.node.category === category
    )

    return (
      <Layout pageType="index">
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          pagePath={`category/${category}`}
        />
        <Section>
          <Heading main={`${category}`} />
          <Article posts={filterPosts} ref={this.Article} />
        </Section>
        {(() => {
          if (filterPosts.length > config.postsPerPage) {
            return (
              <MoreButton moreClick={this.moreClick} ref={this.MoreButton} />
            )
          }
        })()}
      </Layout>
    )
  }
}

export const Section = styled.section`
  margin-bottom: 56px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin-bottom: 80px;
  }
`

export default CategoryTemplate

export const pageQuery = graphql`
  query {
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          category
          title
          slug
          createdAt(formatString: "YYYY.M.D")
          thumbnail {
            fluid(maxWidth: 720) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`