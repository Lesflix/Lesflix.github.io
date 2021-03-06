import styled from "@emotion/styled"
import { navigate } from "gatsby"
import React from "react"
import { v1 as uuid } from "uuid"

function SubFilterContainter({
  genre,
  filter,
  subFilter,
  subFilterList,
  setSubFilter,
}) {
  return (
    <ListStyle>
      {subFilterList.map(sub => (
        <div
          className={subFilter === sub ? "select item" : "item"}
          key={uuid()}
          onClick={() => {
            navigate(`/${genre}?cate=${filter}&${filter}=${encodeURI(sub)}`)
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
    margin-right: 2%;
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
