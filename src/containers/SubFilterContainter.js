import React from "react"
import { v1 as uuid } from "uuid"

function SubFilterContainter({ subFilterList, setSubFilter }) {
  return (
    <div>
      {subFilterList.map(sub => (
        <div
          key={uuid()}
          onClick={() => {
            setSubFilter(sub)
          }}
        >
          {sub}
        </div>
      ))}
    </div>
  )
}

export default SubFilterContainter
