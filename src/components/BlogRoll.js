import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


class BlogRoll extends React.Component {

  // constructor() {
  //   this.copyToClipboard = this.copyToClipboard.bind(this);
  // }

  copyToClipboard(str) {
    const str_ = str.replace(/([\/\,\:\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&\s])/g,"-")
    console.log(str_)
    const el = document.createElement('textarea');
    el.value = `https://www.TravisLF.com/#${str_}`;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blogroll">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article
                className={`article${
                  post.frontmatter.featuredpost ? ' is-featured' : ''
                }`}
                id={`${post.frontmatter.title.replace(/([\/\,\:\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&\s])/g,"-")}`}
              >

                {post.frontmatter.featuredimage ? (
                  <a target="_blank" rel="noreferrer" href={post.frontmatter.featuredimage.publicURL} className="featuredImgLink">
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
                  </a>
                ) : null}
                <section>
                    <h3 className="bloghead">
                      <a
                        href={`#${post.frontmatter.title.replace(/([\/\,\:\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&\s])/g,"-")}`}
                        onClick={() => { this.copyToClipboard(post.frontmatter.title) }}
                        title={post.frontmatter.title} className="headerlink"
                      >
                        {post.frontmatter.title}
                      </a>
                      <span className="copyNotif">click to copy article link</span>
                    </h3>
                  <div className="tagOuterContainer">
                    <div className="tagInnerContainer">
                      <ul className="tagList">
                          <li className="tagHeader">Tech used:</li>
                        {post.frontmatter.tags.map(tag => (
                          <li key={tag} className="taggg">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="textWrapper" dangerouslySetInnerHTML={{ __html: post.html }} />
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
                  publicURL
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
