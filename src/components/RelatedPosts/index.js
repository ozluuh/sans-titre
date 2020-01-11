import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { SiteText } from "../Data"
import getThemeColor from "../../utils/getThemeColor"

import "./style.css"

const path = require("path")

const RelatedPosts = ({ next, previous }) => {
  return (
    <div className="related">
      <h2>{SiteText.related_posts}</h2>
      <ul className="related-posts">
        {previous && (
          <li>
            <h3>
              <AniLink
                cover
                direction="up"
                duration={0.8}
                bg={getThemeColor()}
                to={previous.fields.slug}
              >
                <div className="related-thumbnail">
                  <img
                    src={path.resolve(
                      previous.frontmatter.image || "assets/image/default.jpg"
                    )}
                    alt={`${path.basename(previous.frontmatter.image)}`}
                  />
                </div>
                <div className="related-title">
                  {previous.frontmatter.title}
                </div>
                <small>{previous.frontmatter.date}</small>
              </AniLink>
            </h3>
          </li>
        )}
        {next && (
          <li>
            <h3>
              <AniLink
                cover
                direction="up"
                duration={0.8}
                bg={getThemeColor()}
                to={next.fields.slug}
              >
                <div className="related-thumbnail">
                  <img
                    src={path.resolve(
                      next.frontmatter.image || "assets/image/default.jpg"
                    )}
                    alt={`${path.basename(next.frontmatter.image)}`}
                  />
                </div>
                <div className="related-title">{next.frontmatter.title}</div>
                <small>{next.frontmatter.date}</small>
              </AniLink>
            </h3>
          </li>
        )}
      </ul>
    </div>
  )
}

RelatedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RelatedPosts
