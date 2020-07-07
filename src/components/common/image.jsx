import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ imgName, className }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
    
  `)

  const image = data.allImageSharp.edges.find(
    (edge) => edge.node.fluid.originalName === imgName,
  )
  if (!image) {
    return null
  }
  return <Img className={className} fluid={image.node.fluid} />

  // return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

Image.propTypes = {
  imgName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Image
