"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[996],{1501:function(n,e,t){var i,a=t(1880),r=t(4657),o=t(7294);var d=r.Z.div(i||(i=(0,a.Z)(["\n  overflow: hidden;\n  * {\n    color: var(--themFont);\n    font-size: 2vw;\n  }\n  @media screen and (min-width: 1920px) {\n    margin: 22px 34px;\n  }\n  @media screen and (min-width: 1080px) and (max-width: 1919px) {\n    margin: 22px 34px;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1079px) {\n    margin: 22px 34px;\n  }\n  @media screen and (max-width: 767px) {\n    margin: 12px;\n  }\n"])));e.Z=function(n){var e=n.children;return o.createElement(d,null,e)}},7375:function(n,e,t){var i,a=t(1880),r=t(4657),o=t(1597),d=t(7294);e.Z=function(n){var e=n.post,i=n.isSlide,a=n.selectId,r=n.setSelectId,c=(0,d.useState)(!1),s=c[0],m=c[1];return i?d.createElement(l,{onMouseOver:function(n){n.stopPropagation(),r(e.id),m(!0)},onMouseLeave:function(){m(!1)},onClick:function(){a===e.id?m(!0):m(!1)}},d.createElement("img",{src:"/poster/"+(e.frontmatter.imgname?e.frontmatter.imgname:"default.png"),alt:e.frontmatter.title}),d.createElement("div",{className:s?"valid":"unvalid",onClick:function(n){n.stopPropagation(),s&&a===e.id&&(0,o.navigate)(e.fields.slug)}},d.createElement("img",{src:t(6976).Z,alt:"이동"}))):d.createElement(l,{$isSlide:i,onClick:function(){m(!1),(0,o.navigate)(e.fields.slug)}},d.createElement("img",{src:"/poster/"+(e.frontmatter.imgname?e.frontmatter.imgname:"default.png"),alt:e.frontmatter.title}))};var l=r.Z.div(i||(i=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 30px;\n  box-sizing: border-box;\n  border-radius: 12px;\n  overflow: hidden;\n  ","\n  position: relative;\n  .unvalid {\n    display: none;\n  }\n  .valid {\n    display: block;\n    width: 50%;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: calc(-25%);\n    background-color: rgba(255, 255, 255, 0.4);\n    cursor: pointer;\n  }\n  img {\n    display: block;\n    width: 100%;\n  }\n"])),(function(n){if(!1===n.$isSlide)return"cursor: pointer;"}))},4318:function(n,e,t){var i,a=t(1880),r=t(4657),o=t(7294),d=t(7375),l=t(9646),c=t(9499);var s=r.Z.div(i||(i=(0,a.Z)(['\n  width: 100%;\n  .item {\n    float: left;\n  }\n  &::after {\n    content: "";\n    display: block;\n    clear: both;\n    visibility: hidden;\n  }\n  @media screen and (min-width: 1920px) {\n    .item {\n      padding: 20px;\n      width: 10%;\n    }\n    margin: 30px -10px 0 0;\n  }\n  @media screen and (min-width: 1080px) and (max-width: 1919px) {\n    .item {\n      padding: 20px;\n      width: 20%;\n    }\n    margin: 25px -10px 0 0;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1079px) {\n    .item {\n      padding: 16px;\n      width: 25%;\n    }\n    margin: 20px -8px 0 0;\n  }\n  @media screen and (min-width: 375px) and (max-width: 767px) {\n    .item {\n      padding: 8px;\n      width: 33%;\n    }\n    margin: 15px -4px 0 0;\n  }\n  @media screen and (max-width: 374px) {\n    .item {\n      padding: 6px;\n      width: 50%;\n    }\n    margin: 10px -3px 0 0;\n  }\n'])));e.Z=function(n){var e=n.postList,t=n.isSlide,i=(0,c.useLocation)().pathname;return o.createElement(s,null,e.length?e.map((function(n){return o.createElement("div",{className:"item",key:(0,l.Z)()},o.createElement(d.Z,{isSlide:t,post:n}))})):i.includes("search")?o.createElement("div",{className:"msg"},"검색 결과가 없습니다"):o.createElement("div",{className:"msg"},"준비 중"))}},5875:function(n,e,t){t.r(e);var i,a=t(1880),r=t(7294),o=t(4584),d=t(2899),l=t(4318),c=t(9102),s=t(1501);var m=t(4657).Z.strong(i||(i=(0,a.Z)(["\n  font-size: 2.8vw;\n"])));e.default=function(n){var e,t=n.data,i=n.location,a=decodeURI(null===(e=i.search)||void 0===e?void 0:e.replace("?q=","")),g=(0,r.useMemo)((function(){return a.replace(/ /gi,"")}),[a]),u=t.allMarkdownRemark.nodes,M=(0,r.useState)(x()),p=M[0],N=M[1];function x(){return u.filter((function(n){var e=n.frontmatter,t=e.title,i=e.description,a=e.genre,r=e.countries,o=e.ott,d=e.categories;return i&&i.replace(/ /gi,"").toLowerCase().includes(null==g?void 0:g.toLowerCase())||t&&t.replace(/ /gi,"").toLowerCase().includes(null==g?void 0:g.toLowerCase())||a&&a.replace(/ /gi,"").toLowerCase().includes(null==g?void 0:g.toLowerCase())||r&&r.join("").toLowerCase().includes(null==g?void 0:g.toLowerCase())||o&&o.join("").toLowerCase().includes(null==g?void 0:g.toLowerCase())||d&&d.join("").toLowerCase().includes(null==g?void 0:g.toLowerCase())}))}return(0,r.useEffect)((function(){N(x())}),[a]),r.createElement("div",null,r.createElement(c.Z,null),r.createElement(d.Z,{location:i},r.createElement(o.Z,{title:a+" 검색 결과",description:""}),r.createElement(s.Z,null,r.createElement(m,null,a?a+" 검색 결과":"검색어를 입력해주세요"),r.createElement(l.Z,{postList:p,isSlide:!1}))))}},6976:function(n,e){e.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDg1IiBoZWlnaHQ9IjQ4NSIgdmlld0JveD0iMCAwIDQ4NSA0ODUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTMuOTc0IDcxLjAyNkMzNjguMTcxIDI1LjIyNSAzMDcuMjc0IDAgMjQyLjUgMEMxNzcuNzI2IDAgMTE2LjgyOSAyNS4yMjUgNzEuMDI2IDcxLjAyNkMyNS4yMjUgMTE2LjgyOSAwIDE3Ny43MjYgMCAyNDIuNUMwIDMwNy4yNzQgMjUuMjI1IDM2OC4xNzEgNzEuMDI2IDQxMy45NzRDMTE2LjgyOSA0NTkuNzc1IDE3Ny43MjYgNDg1IDI0Mi41IDQ4NUMzMDcuMjc0IDQ4NSAzNjguMTcxIDQ1OS43NzUgNDEzLjk3NCA0MTMuOTc0QzQ1OS43NzUgMzY4LjE3MSA0ODUgMzA3LjI3NCA0ODUgMjQyLjVDNDg1IDE3Ny43MjYgNDU5Ljc3NSAxMTYuODI5IDQxMy45NzQgNzEuMDI2Wk0yNDIuNSA0NTVDMTI1LjMyNyA0NTUgMzAgMzU5LjY3MyAzMCAyNDIuNUMzMCAxMjUuMzI3IDEyNS4zMjcgMzAgMjQyLjUgMzBDMzU5LjY3MyAzMCA0NTUgMTI1LjMyNyA0NTUgMjQyLjVDNDU1IDM1OS42NzMgMzU5LjY3MyA0NTUgMjQyLjUgNDU1WiIgZmlsbD0iI0VDMjUxNiIvPgo8cGF0aCBkPSJNMTgxLjA2MiAzMzYuNTc1TDM0My45MzggMjQyLjVMMTgxLjA2MiAxNDguNDI1VjMzNi41NzVaIiBmaWxsPSIjRUMyNTE2Ii8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-search-js-abf1959298e66db5c69f.js.map