import styled from "@emotion/styled"
import React from "react"
import SearchInput from "../components/SearchInput/SearchInput"
import HeaderNav from "../components/HeaderNav/HeaderNav"
function HeaderContainer() {
  return (
    <StyleHeaderContainer>
      <div id="logo">
        <img src={require("../images/letflix.svg").default} alt="logo" />
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
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  border-bottom: 1px solid black;
  #logo {
    height: calc(100% - 10px);
    img {
      height: 100%;
    }
  }
`
