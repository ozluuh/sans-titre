import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { SiteText } from "../Data"
import getThemeColor from "../../utils/getThemeColor"

import "./style.css"

const Paginator = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  return (
    <div className="paginator">
      {!isFirst ? (
        <AniLink
          cover
          direction="left"
          duration={0.8}
          bg={getThemeColor()}
          to={prevPage}
          className="paginator-button paginator-active"
        >
          {SiteText.next_page}
        </AniLink>
      ) : (
        <span className="paginator-button">{SiteText.next_page}</span>
      )}

      <span className="paginator-button disable-border">
        {currentPage} de {numPages}
      </span>

      {!isLast ? (
        <AniLink
          cover
          direction="right"
          duration={0.8}
          bg={getThemeColor()}
          to={nextPage}
          className="paginator-button paginator-active"
        >
          {SiteText.prev_page}
        </AniLink>
      ) : (
        <span className="paginator-button">{SiteText.prev_page}</span>
      )}
    </div>
  )
}

export default Paginator
