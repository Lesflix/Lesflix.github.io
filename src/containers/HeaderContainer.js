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

  z-index: 50;
  background-color: var(--themBg);
  #logo {
    margin-right: 17px;
    img {
      height: 100%;
    }
  }
  @media screen and (min-width: 1920px) {
    padding: 22px 34px;
    #logo {
      height: 60px;
    }
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    padding: 22px 34px;
    #logo {
      height: 50px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    padding: 22px 34px;
    #logo {
      height: 30px;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 12px;
    #logo {
      height: 25px;
      margin-right: 10px;
    }
  }
`
