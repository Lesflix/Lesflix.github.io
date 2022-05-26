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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;

  height: 10vh;
  border-bottom: 1px solid black;

  padding: 0 36px;

  #logo {
    height: calc(10vh - 20px);
    margin-right: 17px;

    img {
      height: 100%;
    }
  }
  @media screen and (min-width: 1920px) {
    height: 172px;

    #logo {
      height: 100px;
    }
  }
  @media screen and (min-width: 1920px) {
    height: 172px;
    #logo {
      height: 100px;
    }
  }
  @media screen and (min-width: 768px) {
    height: 142px;
    padding: 0 19px;
    #logo {
      height: 88px;
    }
  }
  @media screen and (min-width: 375px) {
    height: 72px;
    padding: 0 12px;
    #logo {
      height: 47px;
      margin-right: 10px;
    }
  }
`
