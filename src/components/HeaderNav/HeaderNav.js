import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
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
    <NavList>
      {navList?.map(data => (
        <Link to={`/${data.fieldValue}`} state={{ path: data.fieldValue }}>
          <span>{data.fieldValue}</span>
        </Link>
      ))}
    </NavList>
  )
}

export default HeaderNav

const NavList = styled.div`
  display: flex;
  flex: 1;
  gap: 21px;
  font-weight: 700;
  @media screen and (min-width: 1920px) {
    font-size: 70px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    font-size: 60px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    font-size: 51.31px;
    gap: 11px;
  }
  @media screen and (max-width: 767px) {
    font-size: 28px;
    gap: 9px;
  }
`
