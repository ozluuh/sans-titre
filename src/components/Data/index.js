import data from "../../../static/data/settings.yml"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import getThemeColor from "../../utils/getThemeColor"

import "./style.css"

export const SiteText = data.site_text
export const SiteSoonState = data.soon
export const SocialLinks = props => (
  <>
    {data.social_links.map((item, index) => {
      return (
        <a
          title={item.label}
          href={item.url.replace(/user/, item.user)}
          className="menu-link"
          target="_blank"
          rel="noopener noreferrer"
          key={`social_item_link_${index}`}
        >
          <i className={`fa fa-${item.icon}`} aria-hidden="true">
            {props.showLabel && ` ${item.label}`}
          </i>
        </a>
      )
    })}
  </>
)
export const MenuLinks = () => (
  <>
    {data.menu_links.map((item, index) => {
      return (
        <AniLink
          cover
          direction="down"
          duration={0.8}
          bg={getThemeColor()}
          to={item.url}
          className="menu-link"
          key={`menu_item_link_${index}`}
        >
          {item.label}
        </AniLink>
      )
    })}
  </>
)
