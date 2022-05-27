import styled from "@emotion/styled"
import React from "react"

function DivContainer({ children }) {
  return <DivContainerStyle>{children}</DivContainerStyle>
}

const DivContainerStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 22px 34px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    padding: 22px 34px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    padding: 22px 34px;
  }
  @media screen and (max-width: 767px) {
    padding: 12px;
  }
`
export default DivContainer
