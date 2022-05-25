import styled from "@emotion/styled"
import React from "react"
import SearchInput from "../components/SearchInput/SearchInput"
import HeaderNav from "../components/HeaderNav/HeaderNav"
import { Link } from "gatsby"
function HeaderContainer() {
  return (
    <StyleHeaderContainer>
      <div id="logo">
        <Link to={`/`}>
          <img src={require("../images/lesflix.svg").default} alt="logo" />
        </Link>
      </div>
      <HeaderNav />
      <SearchInput />
    </StyleHeaderContainer>
  )
}

export default HeaderContainer
const StyleHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  border-bottom: 1px solid black;
  #logo {
    height: calc(10vh - 20px);
    img {
      max-width: 30vw;
      height: 100%;
    }
  }
`
