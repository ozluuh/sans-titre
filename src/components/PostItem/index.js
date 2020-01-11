import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import getThemeColor from "../../utils/getThemeColor"

import "./style.css"

const PostItem = props => {
  return (
    <article>
      <AniLink
        cover
        direction="down"
        duration={0.8}
        bg={getThemeColor()}
        to={props.slug}
      >
        <div
          className="featured-posts"
          style={{ background: `var(--backgroundMiddle) url(${props.image})` }}
        >
          <p>
            <span>
              {props.date}{" "}
              {props.timeToRead > 0 && `| ${props.timeToRead} min de leitura`}
            </span>
          </p>
          <h2>
            <span>{props.title}</span>
          </h2>
        </div>
      </AniLink>
    </article>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

PostItem.defaultProps = {
  timeToRead: 0,
}

export default PostItem
