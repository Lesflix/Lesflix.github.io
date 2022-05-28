import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import DivContainer from "../components/DivContainer"
import Layout from "../components/Layout"
import HeaderContainer from "../containers/HeaderContainer"
import PostListContainer from "../containers/PostListContainer"
import FilterListContainter from "../containers/FilterListContainer"
import SubFilterContainter from "../containers/SubFilterContainter"
import { genres } from "../const/genres"
import styled from "@emotion/styled"
const Genre = ({ data, location }) => {
  const { nodes: postList } = data.allMarkdownRemark
  const genre = genres[location.pathname.replace(/\//g, "")]
  const allOtts = data.allMarkdownRemark.group
  let [filteredPost, setFilteredPostList] = useState(postList)
  const [filter, setFilter] = useState("all")
  const [subFilterList, setSubFilterList] = useState([])
  const [subFilter, setSubFilter] = useState("")

  useEffect(() => {
    let temp = new Set()
    postList.forEach(({ frontmatter }) => {
      if ("string" != typeof frontmatter[filter]) {
        frontmatter[filter]?.forEach(data => {
          temp.add(data)
        })
      } else {
        temp.add(frontmatter[filter])
      }
    })
    setSubFilterList([...temp])
  }, [filter])

  useEffect(() => {
    if (subFilter != "") {
      setFilteredPostList(
        postList.filter(
          ({ frontmatter }) =>
            frontmatter[filter] === subFilter ||
            frontmatter[filter]?.includes(subFilter)
        )
      )
    }
  }, [subFilter])

  return (
    <>
      <HeaderContainer />
      <Layout location={location}>
        <DivContainer>
          <FilterListContainter
            filter={filter}
            setFilter={setFilter}
            setSubFilter={setSubFilter}
          />
          {subFilterList.length > 0 && (
            <SubFilterContainter
              subFilter={subFilter}
              subFilterList={subFilterList}
              setSubFilter={setSubFilter}
            />
          )}
          <CountMsg>
            총{" "}
            <strong>
              {subFilter != "" ? filteredPost.length : postList.length}
            </strong>
            개의 {genre}
          </CountMsg>
          <PostListContainer
            postList={subFilter != "" ? filteredPost : postList}
          />
        </DivContainer>
      </Layout>
    </>
  )
}
export default Genre

const CountMsg = styled.div`
  margin-top: 10px;
  font-size: 1.8vw;
`
export const pageQuery = graphql`
  query filteredPost($genre: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___release], order: DESC }
      filter: { frontmatter: { genre: { eq: $genre } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          genre
          poster
          release
          ott
          countries
          cover
          end
        }
      }
      totalCount
      group(field: frontmatter___ott) {
        fieldValue
      }
    }
  }
`
