import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Heading from '../components/Heading'
import Article from '../components/Article'
import MoreButton from '../components/MoreButton'
import Section from '../components/Section'
import config from '../utils/siteConfig'

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
    const linkState = this.Article.current.state.display
    const linkStateResult = linkState.every(item => item === 'block')
    if (linkStateResult) {
      this.MoreButton.current.hiddenItem()
    }
  }

  render() {
    const { data, pageContext } = this.props
    const { category } = pageContext
    const posts = data.allContentfulPost.edges
    const filterPosts = posts.filter(post => post.node.category === category)

    return (
      <Layout pageType="index">
        <SEO title="All posts" pagePath={`category/${category}`} />
        <Section>
          <Heading main={`${category}`} />
          <Article posts={filterPosts} ref={this.Article} />
        </Section>
        {filterPosts.length > config.postsPerPage && (
          <MoreButton moreClick={this.moreClick} ref={this.MoreButton} />
        )}
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query {
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          slug
          title
          category
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
