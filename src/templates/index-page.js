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
  cta,
}) => (
  <div>
    <div className="wavesWrapperOuter">
      <div className="wavesWrapperInner">
        <svg className="waves" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path fill="#1A1A25" fillOpacity=".6" d="M100 63.2a17 17 0 00-12.2 4.2A17 17 0 0169.5 70l-1.3-.6A17.5 17.5 0 0049.6 72 17.5 17.5 0 0131 74.6l-.6-.2a19 19 0 00-19.8 2.4l-.4.4C7.2 79.6 3.6 80.8 0 81V0h100v63.2z"/>
          <path fill="#1A1A25" fillOpacity=".6" d="M100 65c-5.5-.7-11.2 1-15.5 4.7-5.8 5-14 6.3-21.1 3l-1.4-.6c-7.1-3.2-15.5-2-21.5 3-6 5.1-14.3 6.3-21.5 3l-.7-.3a22 22 0 00-18.3 0V0h100v65z"/>
          <path fill="#1A1A25" fillOpacity=".6" d="M100 64.6l-.4-.2a35 35 0 00-37.2 5.2l-4 3.3a35 35 0 01-37 5.2l-7.9-3.5c-4.3-2-9-3-13.5-3.2V0h100v64.6z"/>
        </svg>
      </div>
    </div>
    <section className="header" id="header">
      <div className="content">
        <div className="inner">
          <h1 className="hello">
            {title}
          </h1>
          <h2 className="title">
            {subheading}
          </h2>
        </div>
      </div>
      <aside className="cta">
        <div className="ctaText">
          <h3>{mainpitch.description}</h3>
          <h3>
            {cta} <a href="mailto:hello@travislf.com"><strong>hello@travislf.com</strong></a>.
          </h3>
        </div>
      </aside>
    </section>



    <section>
        <h3 className="title areahead">What have I been working on?</h3>
    </section>
    <section className="fullwidth">
      <div>
        <div>
          <BlogRoll/>
        </div>
      </div>
    </section>
    <section className="fullwidth footer">
      <div className="wavesWrapperInner">
        <svg className="waves flipped" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path fill="#1A1A25" fillOpacity=".6" d="M100 63.2a17 17 0 00-12.2 4.2A17 17 0 0169.5 70l-1.3-.6A17.5 17.5 0 0049.6 72 17.5 17.5 0 0131 74.6l-.6-.2a19 19 0 00-19.8 2.4l-.4.4C7.2 79.6 3.6 80.8 0 81V0h100v63.2z"/>
          <path fill="#1A1A25" fillOpacity=".6" d="M100 65c-5.5-.7-11.2 1-15.5 4.7-5.8 5-14 6.3-21.1 3l-1.4-.6c-7.1-3.2-15.5-2-21.5 3-6 5.1-14.3 6.3-21.5 3l-.7-.3a22 22 0 00-18.3 0V0h100v65z"/>
          <path fill="#1A1A25" fillOpacity=".6" d="M100 64.6l-.4-.2a35 35 0 00-37.2 5.2l-4 3.3a35 35 0 01-37 5.2l-7.9-3.5c-4.3-2-9-3-13.5-3.2V0h100v64.6z"/>
        </svg>
      </div>
      <div className="content">
        <div className="inner">
          <p>copyright &copy; Travis Franklin {date}.</p>
        </div>
      </div>
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
        cta={frontmatter.cta}
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
        cta      
      }
    }
  }
`
