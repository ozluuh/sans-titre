import React from "react"
import PostItem from "../PostItem"

const path = require("path")

const Hit = ({ hit }) => (
  <section>
    <PostItem
      slug={hit.fields.slug}
      date={hit.date}
      // timeToRead={timeToRead}
      title={hit.title}
      image={
        hit.image.length > 0
          ? path.resolve(hit.image)
          : path.resolve("assets/image/default.jpg")
      }
    />
  </section>
)

export default Hit
