import styled from "@emotion/styled"
import React from "react"

function MainMsg({ children }) {
  return (
    <MainMsgStyle>
      {children}
      <SuBMsgStyle>
        <div>
          제발 이 작품 같이 봐줘 🥺 추천하러 가기 👉{" "}
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
      </SuBMsgStyle>
    </MainMsgStyle>
  )
}
const MainMsgStyle = styled.div`
  * {
    @media screen and (min-width: 1920px) {
      .count {
        font-size: 37px;
      }
      font-size: 35px;
    }
    @media screen and (min-width: 1080px) and (max-width: 1919px) {
      .count {
        font-size: 30px;
      }
      font-size: 28px;
    }
    @media screen and (min-width: 768px) and (max-width: 1079px) {
      .count {
        font-size: 22px;
      }
      font-size: 20px;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      .count {
        font-size: 16px;
      }
      font-size: 14px;
    }
    @media screen and (max-width: 374px) {
      .count {
        font-size: 14px;
      }
      font-size: 12px;
    }
  }
`
const SuBMsgStyle = styled.div`
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
