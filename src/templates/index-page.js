import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
const date = new Date().getFullYear();

export const IndexPageTemplate = ({
  title,
  subheading,
  mainpitch,
}) => (
  <div>
    <section className="header" id="header">
      <div className="content">
        <div className="inner">
          <h1 className="hello">
            {title}
          </h1>
          <h4 className="title">
            {subheading}
          </h4>
          <p className="blurb">{mainpitch.description}</p>
        </div>
      </div>

      <div className='wave'></div>
      <div className='wave'></div>
      <div className='wave'></div>
      
      
    </section>

    <section className="">
        <h3 className="title areahead">What have I been working on?</h3>
    </section>
    <section className="fullwidth">
      <div className="">
        <div className="">
          <BlogRoll />
        </div>
      </div>
    </section>
    <section className="fullwidth footer">
      <div className="content">
        <div className="inner">
          <p>copyright &copy; Travis Franklin {date}.</p>
        </div>
      </div>
      <div className='wave'></div>
      <div className='wave'></div>
      <div className='wave'></div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        mainpitch {
          description
        }        
      }
    }
  }
`
