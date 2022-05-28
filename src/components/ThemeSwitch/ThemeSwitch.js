import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import styled from "@emotion/styled"

function ThemeSwitch() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <StyledSwitch>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <span>
            {theme === "dark" && (
              <img
                className="moon"
                src={require(`../../images/moon.svg`).default}
                alt="다크모드"
              />
            )}
            {theme === "light" && (
              <img
                className="sun"
                src={require(`../../images/sun.svg`).default}
                alt="라이트모드"
              />
            )}
          </span>
        </StyledSwitch>
      )}
    </ThemeToggler>
  )
}
const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  img {
    width: 30px;
    height: 30px;
  }
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
  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  & > span {
    padding: 5px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background-color: var(--Grey200);
    border-radius: 20px;
    transition: 0.4s;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    &:hover {
      background-color: var(--Grey400);
    }
  }
  & > input:checked + span {
    box-shadow: rgba(255, 255, 255, 0.16) 0px 1px 4px;
    background-color: var(--Grey700);
    &:hover {
      background-color: var(--Grey600);
    }
  }
`

export default ThemeSwitch
