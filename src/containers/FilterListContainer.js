import styled from "@emotion/styled"
import React from "react"
import { categorys } from "../const/categorys"
import { v1 as uuid } from "uuid"
function FilterListContainer({ filter, setFilter, setSubFilter }) {
  const filterList = Object.keys(categorys)
  return (
    <ListStyle>
      {filterList.map(cate => (
        <strong
          key={uuid()}
          className={cate === filter ? "select" : ""}
          onClick={() => {
            setFilter(cate)
            setSubFilter("")
          }}
        >
          {categorys[cate]}
        </strong>
      ))}
    </ListStyle>
  )
}

const ListStyle = styled.div`
  display: flex;
  gap: 20px;
  &:hover {
    cursor: pointer;
  }
  * {
    font-size: 2.8vw;
  }
  .select {
    color: var(--primary);
  }
`
export default FilterListContainer
