"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[683],{7375:function(n,e,t){var i,a=t(1880),r=t(4657),l=t(1597),c=t(7294);e.Z=function(n){var e=n.post,i=n.isSlide,a=e.frontmatter.poster?e.frontmatter.poster:"default.png",r=(0,c.useState)(!1),d=r[0],s=r[1];return"/"!==i?c.createElement(o,{onClick:function(){s(!1),(0,l.navigate)(e.fields.slug)}},c.createElement("img",{src:t(2177)("./"+a).default,alt:e.frontmatter.title})):c.createElement(o,{onMouseOver:function(){s(!0)},onMouseLeave:function(){s(!1)},onDoubleClick:function(){s(!1),(0,l.navigate)(e.fields.slug)}},c.createElement("img",{src:t(2177)("./"+a).default,alt:e.frontmatter.title}),c.createElement("div",{onClick:function(){s(!1),(0,l.navigate)(e.fields.slug)},className:d?"valid":"unvalid"},c.createElement("img",{src:t(6976).Z,alt:""})))};var o=r.Z.div(i||(i=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 30px;\n  box-sizing: border-box;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  &:hover {\n    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\n      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\n      rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */\n  }\n  .unvalid {\n    display: none;\n  }\n  .valid {\n    display: block;\n    width: 50%;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: calc(-25%);\n    background-color: rgba(255, 255, 255, 0.4);\n  }\n  img {\n    display: block;\n    width: 100%;\n  }\n"])))},4318:function(n,e,t){var i,a=t(1880),r=t(4657),l=t(7294),c=t(7375),o=t(9646),d=t(9499);var s=r.Z.div(i||(i=(0,a.Z)(['\n  width: fit-content;\n  .item {\n    float: left;\n  }\n  &::after {\n    content: "";\n    display: block;\n    clear: both;\n    visibility: hidden;\n  }\n  @media screen and (min-width: 1920px) {\n    .item {\n      padding: 20px;\n      width: 10%;\n    }\n    margin: 30px -10px 0 0;\n  }\n  @media screen and (min-width: 1080px) and (max-width: 1919px) {\n    .item {\n      padding: 20px;\n      width: 20%;\n    }\n    margin: 25px -10px 0 0;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1079px) {\n    .item {\n      padding: 16px;\n      width: 25%;\n    }\n    margin: 20px -8px 0 0;\n  }\n  @media screen and (min-width: 375px) and (max-width: 767px) {\n    .item {\n      padding: 8px;\n      width: 33%;\n    }\n    margin: 15px -4px 0 0;\n  }\n  @media screen and (max-width: 374px) {\n    .item {\n      padding: 6px;\n      width: 50%;\n    }\n    margin: 10px -3px 0 0;\n  }\n'])));e.Z=function(n){var e=n.postList,t=n.isSlide,i=(0,d.useLocation)().pathname;return l.createElement(s,null,e.length?e.map((function(n){return l.createElement("div",{className:"item",key:(0,o.Z)()},l.createElement(c.Z,{isSlide:t,post:n}))})):i.includes("search")?l.createElement("div",{className:"msg"},"검색 결과 없음"):l.createElement("div",{className:"msg"},"준비 중"))}},3803:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i,a=t(1880),r=t(5785),l=t(7294),c=t(4657);var o,d=c.Z.div(i||(i=(0,a.Z)(["\n  overflow: hidden;\n  * {\n    margin: 0;\n    padding: 0;\n    color: var(--themFont);\n    font-size: 2vw;\n  }\n  @media screen and (min-width: 1920px) {\n    margin: 22px 34px;\n  }\n  @media screen and (min-width: 1080px) and (max-width: 1919px) {\n    margin: 22px 34px;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1079px) {\n    margin: 22px 34px;\n  }\n  @media screen and (max-width: 767px) {\n    margin: 12px;\n  }\n"]))),s=function(n){var e=n.children;return l.createElement(d,null,e)},u=t(2899),m=t(9102),g=t(4318),p={all:"전체",ott:"OTT 별",countries:"나라 별",categories:"장르 별"},M=t(9646);var x,N=c.Z.div(o||(o=(0,a.Z)(["\n  display: flex;\n  gap: 20px;\n  &:hover {\n    cursor: pointer;\n  }\n  * {\n    font-size: 2.8vw;\n  }\n  .select {\n    color: var(--primary);\n  }\n"]))),f=function(n){var e=n.filter,t=n.setFilter,i=n.setSubFilter,a=Object.keys(p);return l.createElement(N,null,a.map((function(n){return l.createElement("strong",{key:(0,M.Z)(),className:n===e?"select":"",onClick:function(){t(n),i("")}},p[n])})))};var v,y=c.Z.div(x||(x=(0,a.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-top: 10px;\n  * {\n    font-size: 2.5vw;\n    & {\n      cursor: pointer;\n    }\n  }\n  .select {\n    color: var(--primary);\n  }\n"]))),D=function(n){var e=n.subFilter,t=n.subFilterList,i=n.setSubFilter;return l.createElement(y,null,t.map((function(n){return l.createElement("div",{className:e===n?"select":"",key:(0,M.Z)(),onClick:function(){i(n)}},n)})))},I=t(1963),j=function(n){var e=n.data,t=n.location,i=e.allMarkdownRemark.nodes,a=I.X[t.pathname.replace(/\//g,"")],c=(0,l.useState)(i),o=c[0],d=c[1],p=(0,l.useState)("all"),M=p[0],x=p[1],N=(0,l.useState)([]),v=N[0],y=N[1],j=(0,l.useState)(""),z=j[0],E=j[1];return(0,l.useEffect)((function(){var n=new Set;i.forEach((function(e){var t,i=e.frontmatter;"string"!=typeof i[M]?null===(t=i[M])||void 0===t||t.forEach((function(e){n.add(e)})):n.add(i[M])})),y((0,r.Z)(n))}),[M,i]),(0,l.useEffect)((function(){""!==z&&d(i.filter((function(n){var e,t=n.frontmatter;return t[M]===z||(null===(e=t[M])||void 0===e?void 0:e.includes(z))})))}),[M,z,i]),l.createElement(l.Fragment,null,l.createElement(m.Z,null),l.createElement(u.Z,{location:t},l.createElement(s,null,l.createElement(f,{filter:M,setFilter:x,setSubFilter:E}),v.length>0&&l.createElement(D,{subFilter:z,subFilterList:v,setSubFilter:E}),l.createElement(h,null,"총"," ",l.createElement("strong",null,""!==z?o.length:i.length),"개의 ",a),l.createElement(g.Z,{isSlide:!1,postList:""!==z?o:i}))))},h=c.Z.div(v||(v=(0,a.Z)(["\n  margin-top: 10px;\n  font-size: 1.8vw;\n"])))},6976:function(n,e){e.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDg1IiBoZWlnaHQ9IjQ4NSIgdmlld0JveD0iMCAwIDQ4NSA0ODUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTMuOTc0IDcxLjAyNkMzNjguMTcxIDI1LjIyNSAzMDcuMjc0IDAgMjQyLjUgMEMxNzcuNzI2IDAgMTE2LjgyOSAyNS4yMjUgNzEuMDI2IDcxLjAyNkMyNS4yMjUgMTE2LjgyOSAwIDE3Ny43MjYgMCAyNDIuNUMwIDMwNy4yNzQgMjUuMjI1IDM2OC4xNzEgNzEuMDI2IDQxMy45NzRDMTE2LjgyOSA0NTkuNzc1IDE3Ny43MjYgNDg1IDI0Mi41IDQ4NUMzMDcuMjc0IDQ4NSAzNjguMTcxIDQ1OS43NzUgNDEzLjk3NCA0MTMuOTc0QzQ1OS43NzUgMzY4LjE3MSA0ODUgMzA3LjI3NCA0ODUgMjQyLjVDNDg1IDE3Ny43MjYgNDU5Ljc3NSAxMTYuODI5IDQxMy45NzQgNzEuMDI2Wk0yNDIuNSA0NTVDMTI1LjMyNyA0NTUgMzAgMzU5LjY3MyAzMCAyNDIuNUMzMCAxMjUuMzI3IDEyNS4zMjcgMzAgMjQyLjUgMzBDMzU5LjY3MyAzMCA0NTUgMTI1LjMyNyA0NTUgMjQyLjVDNDU1IDM1OS42NzMgMzU5LjY3MyA0NTUgMjQyLjUgNDU1WiIgZmlsbD0iI0VDMjUxNiIvPgo8cGF0aCBkPSJNMTgxLjA2MiAzMzYuNTc1TDM0My45MzggMjQyLjVMMTgxLjA2MiAxNDguNDI1VjMzNi41NzVaIiBmaWxsPSIjRUMyNTE2Ii8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-templates-genre-js-45ef28f34d2a04eb93f9.js.map