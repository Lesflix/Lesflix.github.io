(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{6612:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(1880),a=n(7294),l=n(2899),i=n(4584),o=n(6972),c=n(4657),s=n(1597);var m,u=function(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,t&&a.createElement(s.Link,{to:t.fields.slug,rel:"prev"},"← ",t.frontmatter.title)),a.createElement("li",null,n&&a.createElement(s.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},p={"왓챠":{url:"https://watcha.com/browse/search?query=",query:!0},"넷플릭스":{url:"https://www.netflix.com/search?q=",query:!0},"티빙":{url:"https://www.tving.com/search?keyword=",query:!0},"쿠팡플레이":{url:"",query:!0},"디즈니플러스":{url:"https://www.disneyplus.com/ko-kr/search",query:!1},"아마존프레임비디오":{url:"",query:!0},"애플티비":{url:"",query:!0},"웨이브":{url:"https://www.wavve.com/search/search?searchWord=",query:!0}};var d,v=c.Z.div(m||(m=(0,r.Z)(["\n  width: calc(100 / 375 * 25vw);\n  height: calc(100 / 375 * 25vw);\n  box-shadow: rgba(255, 255, 255, 0.16) 0px 1px 4px;\n  cursor: pointer;\n  img {\n    width: 100%;\n  }\n  border-radius: calc(100 / 375 * 25px);\n  overflow: hidden;\n"]))),g=function(e){var t=e.ott,r=e.title;return a.createElement(v,null,t?a.createElement("img",{onClick:function(){(0,s.navigate)(""+p[t].url+(p[t].query?r:""))},src:n(2479)("./"+t+".svg").default,alt:{ott:t}}):"언제 가져올꺼냐")},x=n(9646);var f,w=c.Z.div(d||(d=(0,r.Z)(["\n  display: flex;\n  margin-top: 10px;\n  gap: 10px;\n"]))),h=function(e){var t=e.ottList,n=e.title;return a.createElement(w,null,t.map((function(e){return a.createElement(g,{key:x.Z,title:n,ott:e})})))};var E,y=c.Z.div(f||(f=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 10;\n  font-size: 1.2vw;\n  flex: 2;\n  .title {\n    width: 100%;\n    font-size: 3.5vw;\n    font-weight: 700;\n    margin-bottom: 15px;\n  }\n  .about {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-left: 10px;\n    .summary {\n      font-size: 2vw;\n    }\n  }\n"]))),b=function(e){var t=e.postData,n=t.title,r=t.description,l=t.release,i=t.ott,o=t.end;return a.createElement(y,null,a.createElement("div",{className:"title"},n),a.createElement("div",{className:"about"},a.createElement("div",null,a.createElement("strong",{className:"summary"},"방영일"),a.createElement("div",null,l," ~ ",o?"방영 종료":"")),a.createElement("div",null,a.createElement("strong",{className:"summary"},"개요"),a.createElement("div",null," ",r)),a.createElement("div",null,a.createElement("strong",{className:"summary"},"보러가기 "),a.createElement(h,{title:n,ottList:i}))))};var k,Z=c.Z.section(E||(E=(0,r.Z)(['\n  padding: 50px 0;\n  position: relative;\n  &::before {\n    content: "";\n    background-image: url(',");\n    background-size: cover;\n    background-repeat: no-repeat;\n    opacity: 0.2;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n  }\n  .container {\n    display: flex;\n    margin: 0 auto;\n    width: 80vw;\n    max-width: 1080px;\n    gap: 30px;\n    align-items: center;\n\n    .poster {\n      z-index: 30;\n      border-radius: 12px;\n      overflow: hidden;\n      width: 50%;\n      flex: 1;\n      img {\n        display: block;\n        width: 100%;\n      }\n    }\n  }\n"])),(function(e){var t=e.$bgImg;return t||""})),q=function(e){var t=e.postData,r=t.title,l=t.posterUrl,i=t.poster;return a.createElement(Z,{$bgImg:l},a.createElement("div",{className:"container"},a.createElement("div",{className:"poster"},a.createElement("img",{src:n(6303)("./"+(i||"default.png")).default,alt:r})),a.createElement(b,{postData:t})))},N=function(e){var t=e.data,n=e.location,r=t.markdownRemark,c=t.previous,s=t.next,m=t.file,p=r.frontmatter,d=p.title,v=p.description,g=p.excerpt,x=p.html;return a.createElement(a.Fragment,null,a.createElement(o.Z,null),a.createElement(l.Z,{location:n},a.createElement(i.Z,{title:d,description:v||g}),a.createElement(L,{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement(q,{postData:Object.assign({},r.frontmatter,{posterUrl:null!=m&&m.publicURL?null==m?void 0:m.publicURL:""})}),a.createElement("section",{dangerouslySetInnerHTML:{__html:x},itemProp:"articleBody"})),a.createElement(u,{previous:c,next:s})))},L=c.Z.article(k||(k=(0,r.Z)(["\n  @media screen and (min-width: 1920px) {\n    padding: 22px 34px;\n  }\n  @media screen and (min-width: 1080px) and (max-width: 1919px) {\n    padding: 22px 34px;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1079px) {\n    padding: 22px 34px;\n  }\n  @media screen and (max-width: 767px) {\n    padding: 12px;\n  }\n"])))},2479:function(e,t,n){var r={"./넷플릭스.svg":7461,"./디즈니플러스.svg":5654,"./아마존프라임비디오.svg":4634,"./애플티비.svg":3367,"./왓챠.svg":8166,"./웨이브.svg":3984,"./쿠팡플레이.svg":8114,"./티빙.svg":1028};function a(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=l,e.exports=a,a.id=2479}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9af48dcc9da54993c3d2.js.map