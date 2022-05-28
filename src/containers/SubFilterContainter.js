import styled from "@emotion/styled"
import React from "react"
import { v1 as uuid } from "uuid"

function SubFilterContainter({ subFilter, subFilterList, setSubFilter }) {
  return (
    <ListStyle>
      {subFilterList.map(sub => (
        <div
          className={subFilter === sub ? "select item" : "item"}
          key={uuid()}
          onClick={() => {
            setSubFilter(sub)
          }}
        >
          {sub}
        </div>
      ))}
    </ListStyle>
  )
}
const ListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  .item {
    margin-right: 10px;
  }
  * {
    font-size: 2.5vw;
    & {
      cursor: pointer;
    }
  }
  .select {
    color: var(--primary);
  }
`
export default SubFilterContainter
