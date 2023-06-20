
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Description = () => {
  const data = useStaticQuery(graphql`
    query DescriptionQuery {
      site {
        siteMetadata {
            description
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const description = data.site.siteMetadata?.description

  return (
    <div className="desc">

      {description && (
        <p>
          {description}
        </p>
      )}
    </div>
  )
}

export default Description
