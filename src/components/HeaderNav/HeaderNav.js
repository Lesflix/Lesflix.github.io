import { graphql, useStaticQuery } from "gatsby"
import React from "react"

function HeaderNav() {
  const { allMarkdownRemark: data } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___genre) {
          fieldValue
        }
      }
    }
  `)
  const { group: navList } = data
  return (
    <div>
      {navList?.map(data => (
        <a href={`/${data.fieldValue}`}>{data.fieldValue}</a>
      ))}
    </div>
  )
}

export default HeaderNav
