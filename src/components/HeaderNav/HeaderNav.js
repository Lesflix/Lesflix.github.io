import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { v1 as uuid } from "uuid"
import { genres } from "../../const/genres"
import { useLocation } from "@reach/router"

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
  const path = useLocation().pathname.replace(/\//g, "")
  console.log(path)
  return (
    <NavList>
      {navList?.map(data => (
        <Link
          key={uuid()}
          to={`/${data.fieldValue}`}
          state={{ path: data.fieldValue }}
        >
          <span className={path === data.fieldValue ? "select" : ""}>
            {genres[data.fieldValue]}
          </span>
        </Link>
      ))}
    </NavList>
  )
}

export default HeaderNav

const NavList = styled.div`
  display: flex;
  flex: 1;
  font-weight: 700;
  .select {
    color: red;
    color: var(--primary50);
  }
  @media screen and (min-width: 1920px) {
    gap: 21px;
    font-size: 44px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    font-size: 32px;
    gap: 21px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    font-size: 24px;
    gap: 11px;
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
    gap: 8px;
  }
  @media screen and (max-width: 374px) {
    font-size: 12px;
    gap: 4px;
  }
`
