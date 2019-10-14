import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="START BLOGROLL">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="" key={post.id}>
              <article
                className={`START ARTICLE ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                {post.frontmatter.featuredimage ? (
                  <div className="imgContainer">
                    <div className="imgContainer-inner">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`,
                        }}
                      />
                    </div>
                  </div>
                ) : null}
                <section className="">
                  <h3 className="bloghead">
                    {post.frontmatter.title}
                  </h3>
                  <div className="tagOuterContainer">
                    <div className="tagInnerContainer">
                      <ul className="tagList">
                          <li className="tagHeader">Tech used:</li>
                        {post.frontmatter.tags.map(tag => (
                          <li className="tag">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </section>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 999999999, format: PLAIN)
              id
              html
              fields {
                slug
              }
              frontmatter {
                tags
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1440, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
