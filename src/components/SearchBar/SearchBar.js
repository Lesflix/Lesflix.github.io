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
      navigate(`/search?q=${searchWord}`, { state: { searchWord } })
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        onKeyDown={handleEnterEvent}
        placeholder="search"
        aria-label="검색"
      />
    </div>
  )
}
const Style = styled.div`
  @media screen and (min-width: 1920px) {
    width: 60px;
    height: 60px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    width: 50px;
    height: 50px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    width: 30px;
    height: 30px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (max-width: 767px) {
    width: 25px;
    height: 25px;
    img {
      width: 15px;
      height: 15px;
    }
  }
`
export default SearchBar
