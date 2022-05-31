import React, { useEffect, useMemo } from "react"
import PropTypes from "prop-types"
import LoaderSVG from "./images/lesflix.svg"
export default function HTML(props) {
  const nowThem = useMemo(() => {
    console.log("re")
    return
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme")
      : "dark"
  }, [])
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            backgroundColor: "inherit",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          <div>
            <img
              src={LoaderSVG}
              alt="loading spinner"
              style={{ width: "40px" }}
            />

            <div style={{ fontSize: "17px" }}>로딩 중</div>
          </div>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
