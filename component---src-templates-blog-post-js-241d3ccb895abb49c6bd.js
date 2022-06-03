"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{5516:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var i,a=t(7294),r=t(2899),l=t(4584),m=t(9102),o=t(1880),s=t(4657),c=t(1597);var d,M,u=s.Z.nav(i||(i=(0,o.Z)(["\n  position: sticky;\n  /* position: fixed; */\n\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: var(--themBg);\n  opacity: 0.9;\n  z-index: 100;\n  * {\n    color: var(--themFont);\n    font-size: 1.2vw;\n  }\n  padding: 10px;\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    list-style: none;\n    margin: 0;\n    li {\n      margin: 0;\n    }\n    a {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n    }\n    @media screen and (min-width: 1920px) {\n      height: 35px;\n      li {\n        img {\n          width: 35px;\n        }\n      }\n    }\n    @media screen and (min-width: 1080px) and (max-width: 1919px) {\n      height: 30px;\n      li {\n        img {\n          width: 30px;\n        }\n      }\n    }\n    @media screen and (min-width: 768px) and (max-width: 1079px) {\n      height: 20px;\n      li {\n        img {\n          width: 20px;\n        }\n      }\n    }\n    @media screen and (max-width: 767px) {\n      height: 15px;\n      li {\n        img {\n          height: 15px;\n        }\n      }\n    }\n  }\n"]))),g=function(n){var e=n.previous,i=n.next;return a.createElement(u,null,a.createElement("ul",null,a.createElement("li",null,e&&a.createElement(c.Link,{to:e.fields.slug,rel:"prev"},a.createElement("img",{src:t(2740).Z,alt:e.frontmatter.title}),e.frontmatter.title)),a.createElement("li",null,i&&a.createElement(c.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title,a.createElement("img",{src:t(4580).Z,alt:i.frontmatter.title})))))},p={"왓챠":{url:"https://watcha.com/browse/search?query=",query:!0},"넷플릭스":{url:"https://www.netflix.com/search?q=",query:!0},"티빙":{url:"https://www.tving.com/search?keyword=",query:!0},"쿠팡플레이":{url:"",query:!0},"디즈니플러스":{url:"https://www.disneyplus.com/ko-kr/search",query:!1},"아마존프라임비디오":{url:"https://www.primevideo.com/",query:!1},"애플티비":{url:"https://tv.apple.com",query:!1},"웨이브":{url:"https://www.wavve.com/search/search?searchWord=",query:!0}};var x,w=s.Z.div(d||(d=(0,o.Z)(["\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  .price {\n    font-size: inherit;\n  }\n"]))),y=s.Z.div(M||(M=(0,o.Z)(["\n  width: calc(100 / 375 * 25vw);\n  height: calc(100 / 375 * 25vw);\n  box-shadow: var(--boxShadow);\n  z-index: 30;\n  cursor: pointer;\n  img {\n    width: 100%;\n  }\n  border-radius: calc(100 / 375 * 25px);\n  overflow: hidden;\n"]))),j=function(n){var e=n.ott,t=n.title.split("시즌")[0],i=e.split("&")[0];return a.createElement(w,null,a.createElement(y,null,e?a.createElement("a",{href:""+p[i].url+(p[i].query?t:""),target:"_blank",rel:"external"},a.createElement("img",{src:"/ott-icon/"+i+".svg",alt:{ottName:i}})):"언제 가져올꺼냐"),a.createElement("div",{className:"price"},e.split("&")[1]))},I=t(9646);var N,h=s.Z.div(x||(x=(0,o.Z)(["\n  display: flex;\n  margin-top: 10px;\n  gap: 10px;\n"]))),z=function(n){var e=n.ottList,t=n.title;return a.createElement(h,null,e.map((function(n){return a.createElement(j,{key:I.Z,title:t,ott:n})})))};var D,A=s.Z.div(N||(N=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 10;\n  width: 50%;\n\n  @media screen and (max-width: 450px) {\n    width: 100%;\n  }\n  .title {\n    width: 100%;\n    font-weight: 700;\n    margin-bottom: 15px;\n  }\n  .about {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-left: 10px;\n  }\n  @media screen and (min-width: 1920px) {\n    font-size: 1.6rem;\n\n    .title {\n      font-size: 3.4rem;\n    }\n    .summary {\n      font-size: 2.5rem;\n    }\n  }\n  @media screen and (min-width: 1080px) and (max-width: 1919px) {\n    font-size: 1.4rem;\n    .title {\n      font-size: 3rem;\n    }\n    .summary {\n      font-size: 2.2rem;\n    }\n  }\n  @media screen and (min-width: 768px) and (max-width: 1079px) {\n    font-size: 1.6rem;\n\n    .title {\n      font-size: 2.6rem;\n    }\n    .summary {\n      font-size: 2rem;\n    }\n  }\n  @media screen and (min-width: 375px) and (max-width: 767px) {\n    font-size: 1.4rem;\n\n    .title {\n      font-size: 2.3rem;\n    }\n    .summary {\n      font-size: 1.8rem;\n    }\n  }\n  @media screen and (max-width: 374px) {\n    font-size: 1.4rem;\n\n    .title {\n      font-size: 1.8rem;\n    }\n    .summary {\n      font-size: 1.6rem;\n    }\n  }\n"]))),f=function(n){var e=n.postData,t=e.title,i=e.description,r=e.release,l=e.originalTitle,m=e.genre,o=e.ott,s=e.categories;return a.createElement(A,null,a.createElement("div",{className:"title"},t.split("&")[0]),a.createElement("div",{className:"about"},t!==l&&a.createElement("div",null,a.createElement("strong",{className:"summary"},"원제"),a.createElement("div",null,l)),a.createElement("div",null,a.createElement("strong",{className:"summary"},"movie"===m?"개봉일":"방영일"),a.createElement("div",null,r)),a.createElement("div",null,a.createElement("strong",{className:"summary"},"장르"),a.createElement("div",null," ",s.join("/"))),a.createElement("div",null,a.createElement("strong",{className:"summary"},"개요"),a.createElement("div",null," ",i)),a.createElement("div",null,a.createElement("strong",{className:"summary"},"보러가기 "),a.createElement(z,{title:t,ottList:o}))))};var v,E=s.Z.section(D||(D=(0,o.Z)(['\n  padding: 50px 0;\n  position: relative;\n  &::before {\n    content: "";\n    background-image: url(',");\n    background-size: cover;\n    background-repeat: no-repeat;\n    opacity: 0.2;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n  }\n  .container {\n    display: flex;\n    margin: 0 auto;\n    width: 70vw;\n    max-width: 1080px;\n    gap: 30px;\n    align-items: center;\n    @media screen and (max-width: 450px) {\n      display: block;\n    }\n    .poster {\n      border-radius: 12px;\n      overflow: hidden;\n      width: 50%;\n      position: relative;\n      @media screen and (max-width: 450px) {\n        width: 100%;\n        margin-bottom: 10px;\n      }\n      flex: 1;\n      img {\n        display: block;\n        width: 100%;\n      }\n    }\n  }\n"])),(function(n){var e=n.$coverImg;return e||""})),L=function(n){var e=n.postData,t=e.title,i=e.imgname;return a.createElement(E,{$coverImg:"/cover/"+i},a.createElement("div",{className:"container"},a.createElement("div",{className:"poster"},a.createElement("img",{src:"/poster/"+(i||"default.png"),alt:t})),a.createElement(f,{postData:e})))};var k=s.Z.section(v||(v=(0,o.Z)(["\n  .container {\n    box-shadow: var(--boxShadow);\n    margin: 20px auto 40px;\n    width: 70vw;\n    max-width: 1080px;\n    padding: 20px;\n    border-radius: 12px;\n    * {\n      color: var(--themFont);\n    }\n    .bold {\n      font-weight: 700;\n    }\n    .season-list {\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      margin-top: 10px;\n      .item {\n        padding: 10px;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        text-align: center;\n        img {\n          width: 100%;\n        }\n      }\n    }\n    @media screen and (min-width: 1920px) {\n      font-size: 2.2rem;\n      .title {\n        font-size: 2.5rem;\n      }\n      .season-list {\n        .item {\n          width: 20%;\n        }\n      }\n    }\n    @media screen and (min-width: 1080px) and (max-width: 1919px) {\n      font-size: 2rem;\n      .title {\n        font-size: 2.2rem;\n      }\n      .season-list {\n        .item {\n          width: 20%;\n        }\n      }\n    }\n    @media screen and (min-width: 768px) and (max-width: 1079px) {\n      font-size: 1.8rem;\n      .title {\n        font-size: 2rem;\n      }\n      .season-list {\n        .item {\n          width: 25%;\n        }\n      }\n    }\n    @media screen and (min-width: 375px) and (max-width: 767px) {\n      font-size: 1.6rem;\n      .title {\n        font-size: 1.8rem;\n      }\n      .season-list {\n        .item {\n          width: 33%;\n        }\n      }\n    }\n    @media screen and (max-width: 374px) {\n      font-size: 1.4rem;\n      .title {\n        font-size: 1.6rem;\n      }\n      .season-list {\n        .item {\n          width: 33%;\n        }\n      }\n    }\n  }\n"]))),T=function(n){var e=n.html;return a.createElement(k,null,e&&a.createElement("div",{className:"container"},a.createElement("section",{dangerouslySetInnerHTML:{__html:e},itemProp:"articleBody"})))},C=function(n){var e=n.data,t=n.location,i=e.markdownRemark,o=e.previous,s=e.next,c=e.markdownRemark.html,d=i.frontmatter,M=d.title,u=d.description,p=d.excerpt;return a.createElement(a.Fragment,null,a.createElement(m.Z,null),a.createElement(r.Z,{location:t},a.createElement(l.Z,{title:M,description:u||p}),a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement(L,{postData:i.frontmatter}),a.createElement(T,{html:c}))),a.createElement(g,{previous:o,next:s}))}},4580:function(n,e){e.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkwIiBoZWlnaHQ9IjQ5MCIgdmlld0JveD0iMCAwIDQ5MCA0OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00OTAgMjQ1QzQ5MCAxMDkuOSAzODAuMSAwIDI0NSAwQzEwOS45IDAgMCAxMDkuOSAwIDI0NUMwIDM4MC4xIDEwOS45IDQ5MCAyNDUgNDkwQzM4MC4xIDQ5MCA0OTAgMzgwLjEgNDkwIDI0NVpNMzQuMyAyNDVDMzQuMyAxMjguOCAxMjguOCAzNC4zIDI0NSAzNC4zQzM2MS4yIDM0LjMgNDU1LjcgMTI4LjggNDU1LjcgMjQ1QzQ1NS43IDM2MS4yIDM2MS4yIDQ1NS43IDI0NSA0NTUuN0MxMjguOCA0NTUuNyAzNC4zIDM2MS4yIDM0LjMgMjQ1WiIgZmlsbD0iI0VDMjUxNiIvPgo8cGF0aCBkPSJNMzAyLjMgMjMyLjlMMjMwLjIgMTYwLjhDMjIzLjUgMTU0LjEgMjEyLjYgMTU0LjEgMjA1LjkgMTYwLjhDMTk5LjIgMTY3LjUgMTk5LjIgMTc4LjQgMjA1LjkgMTg1LjFMMjY1LjkgMjQ1LjFMMjA1LjkgMzA1LjFDMTk5LjIgMzExLjggMTk5LjIgMzIyLjcgMjA1LjkgMzI5LjRDMjA5LjIgMzMyLjcgMjEzLjYgMzM0LjQgMjE4IDMzNC40QzIyMi40IDMzNC40IDIyNi44IDMzMi43IDIzMC4xIDMyOS40TDMwMi4yIDI1Ny4zQzMwOSAyNTAuNCAzMDkgMjM5LjYgMzAyLjMgMjMyLjlaIiBmaWxsPSIjRUMyNTE2Ii8+Cjwvc3ZnPgo="},2740:function(n,e){e.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkwIiBoZWlnaHQ9IjQ5MCIgdmlld0JveD0iMCAwIDQ5MCA0OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDI0NUMwIDM4MC4xIDEwOS45IDQ5MCAyNDUgNDkwQzM4MC4xIDQ5MCA0OTAgMzgwLjEgNDkwIDI0NUM0OTAgMTA5LjkgMzgwLjEgMCAyNDUgMEMxMDkuOSAwIDAgMTA5LjkgMCAyNDVaTTQ1NS43IDI0NUM0NTUuNyAzNjEuMiAzNjEuMiA0NTUuNyAyNDUgNDU1LjdDMTI4LjggNDU1LjcgMzQuMyAzNjEuMiAzNC4zIDI0NUMzNC4zIDEyOC44IDEyOC44IDM0LjMgMjQ1IDM0LjNDMzYxLjIgMzQuMyA0NTUuNyAxMjguOCA0NTUuNyAyNDVaIiBmaWxsPSIjRUMyNTE2Ii8+CjxwYXRoIGQ9Ik0xODcuNyAyNTcuMUwyNTkuOCAzMjkuMkMyNjYuNSAzMzUuOSAyNzcuNCAzMzUuOSAyODQuMSAzMjkuMkMyOTAuOCAzMjIuNSAyOTAuOCAzMTEuNiAyODQuMSAzMDQuOUwyMjQuMSAyNDQuOUwyODQuMSAxODQuOUMyOTAuOCAxNzguMiAyOTAuOCAxNjcuMyAyODQuMSAxNjAuNkMyODAuOCAxNTcuMyAyNzYuNCAxNTUuNiAyNzIgMTU1LjZDMjY3LjYgMTU1LjYgMjYzLjIgMTU3LjMgMjU5LjkgMTYwLjZMMTg3LjggMjMyLjdDMTgxIDIzOS42IDE4MSAyNTAuNCAxODcuNyAyNTcuMVoiIGZpbGw9IiNFQzI1MTYiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-241d3ccb895abb49c6bd.js.map