import React from "react"
import path from "path"

import { SiteText } from "../Data"

import "./style.css"
import RelatedPosts from "../RelatedPosts"

const Post = ({ object, nextContent, previousContent }) => {
  const { frontmatter, html: body, timeToRead } = object

  return (
    <div className="page-content">
      <h1>{frontmatter.title}</h1>

      <span className="post-date">
        {timeToRead} min de leitura | {SiteText.post_date_prefix}{" "}
        {frontmatter.date} por {" " + frontmatter.author}
      </span>

      <div className="featured-image">
        <img
          src={path.resolve(frontmatter.image || "assets/image/default.jpg")}
          alt="/"
        />
      </div>
      {frontmatter.dedicate && <cite>{frontmatter.dedicate}</cite>}

      <article dangerouslySetInnerHTML={{ __html: body }}></article>

      <RelatedPosts next={nextContent} previous={previousContent} />
    </div>
  )
}

export default Post
