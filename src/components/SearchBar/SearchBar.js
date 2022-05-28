import styled from "@emotion/styled"
import { navigate } from "gatsby"
import React, { useState } from "react"

function SearchBar() {
  const [searchWord, setSearchWord] = useState("")
  function handleInputChange(e) {
    setSearchWord(e.target.value)
  }
  function handleEnterEvent(e) {
    if (e.key === "Enter") {
      navigate(`/search?q=${searchWord}`)
    }
  }

  return (
    <SearchBarStyle>
      <img src={require("../../images/search.svg").default} alt="검색" />
      <input
        type="text"
        onChange={handleInputChange}
        onKeyDown={handleEnterEvent}
        placeholder="제목, 장르, ott명, 국가로 검색"
        aria-label="검색"
      />
    </SearchBarStyle>
  )
}
const SearchBarStyle = styled.div`
  position: relative;
  flex: 1;
  margin-right: 20px;
  * {
    color: var(--lightFont);
  }
  img {
    position: absolute;
    top: 5px;
    left: 5px;
  }
  input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
    padding: 5px;
    box-sizing: border-box;
    &:focus {
      outline-color: var(--primary);
    }
  }
  @media screen and (min-width: 1920px) {
    width: 60px;
    height: 60px;
    font-size: 45px;
    input {
      padding-left: 55px;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    width: 50px;
    height: 50px;
    font-size: 35px;
    input {
      padding-left: 45px;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    width: 30px;
    height: 30px;
    font-size: 15px;

    input {
      padding-left: 25px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (max-width: 767px) {
    width: 25px;
    height: 25px;
    font-size: 10px;

    input {
      padding-left: 20px;
    }
    img {
      width: 15px;
      height: 15px;
    }
  }
`
export default SearchBar
