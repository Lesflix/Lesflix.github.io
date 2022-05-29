import styled from "@emotion/styled"
import React from "react"

function MainMsg() {
  return (
    <MainMsgStyle>
      <div>
        이런 갓작이 없다고? 추천하러 가기 👉{" "}
        <a
          href="https://asked.kr/justbeles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>클릭</strong>
        </a>
      </div>
      <div>
        <a
          className="error"
          href="https://forms.gle/Ee45K3ZaGxiqktUr6"
          target="_blank"
          rel="noopener noreferrer"
        >
          문의
        </a>
      </div>
    </MainMsgStyle>
  )
}
const MainMsgStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a * {
    color: var(--primary);
  }
  .error {
    color: var(--themFont);
  }
`
export default MainMsg
