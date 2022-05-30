import React, { useEffect, useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import styled from "@emotion/styled"

function ThemeSwitch() {
  const [nowthem, setNowThem] = useState("dark")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowThem = window.localStorage.getItem("theme")
      if (!windowThem) {
        setNowThem("dark")
        window.localStorage.setItem("theme", "dark")
      } else {
        setNowThem(windowThem)
      }
    }
  }, [])
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        setNowThem(theme)
        return (
          <StyledSwitch>
            <button
              className={"dark" === nowthem ? "checked" : ""}
              onClick={e => {
                return toggleTheme(nowthem === "light" ? "dark" : "light")
              }}
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
        )
      }}
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
  & > button {
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
    border-radius: 20px;
    transition: 0.4s;
    background-color: var(--Grey400);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    &:hover {
      background-color: var(--Grey400);
    }
  }
  .checked + span {
    box-shadow: rgba(255, 255, 255, 0.16) 0px 1px 4px;
    background-color: var(--Grey700);
    &:hover {
      background-color: var(--Grey600);
    }
  }
`

export default ThemeSwitch
