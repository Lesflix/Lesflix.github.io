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
  margin: 0 10px;
  flex: 1;
  box-sizing: border-box;
  gap: 10px;

  span {
    font-size: 2rem;
    color: var(--Grey900);
    font-weight: 700;

    @media screen and (min-width: 320px) {
      font-size: 2.2rem;
    }
    @media screen and (min-width: 375px) {
      font-size: 2.4rem;
    }
    @media screen and (min-width: 475px) {
      font-size: 2.6rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 3.5rem;
    }
    @media screen and (min-width: 1024px) {
      font-size: 3.8rem;
    }
    @media screen and (min-width: 1440px) {
      font-size: 4rem;
    }
  }
  /* line-height: inherit; */
  /* width: calc(100vw - 30% - 10px); */
  /* background-color: red; */
  /* gap: 10px; */
`
