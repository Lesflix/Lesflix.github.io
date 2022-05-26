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
      {/* <SearchInput /> */}
    </StyleHeaderContainer>
  )
}

export default HeaderContainer
const StyleHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;

  padding: 0 36px;
  z-index: 50;
  height: 172px;
  background-color: var(--themBg);
  #logo {
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
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    height: 172px;
    #logo {
      height: 100px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    height: 142px;
    padding: 0 19px;
    #logo {
      height: 88px;
    }
  }
  @media screen and (max-width: 767px) {
    height: 72px;
    padding: 0 12px;
    #logo {
      height: 47px;
      margin-right: 10px;
    }
  }
`
