import styled from "@emotion/styled"
import * as React from "react"

function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Main>{children}</Main>
    </div>
  )
}
const Main = styled.main`
  @media screen and (min-width: 1920px) {
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
`
export default Layout
