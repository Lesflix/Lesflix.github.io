import styled from "@emotion/styled"
import React from "react"
import OttIcon from "../components/OttIcon/OttIcon"
import { v1 as uuid } from "uuid"
function OttListContainer({ ottList, title }) {
  return (
    <OttListStyle>
      {ottList.map(ott => (
        <OttIcon key={uuid} title={title} ott={ott} />
      ))}
    </OttListStyle>
  )
}
const OttListStyle = styled.div`
  display: flex;
  margin-top: 10px;
`
export default OttListContainer
