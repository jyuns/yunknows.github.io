(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{154:function(t,n,e){t.exports=e.p+"img/0a8ad42.jpg"},156:function(t,n,e){var content=e(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(25).default)("6759f5ab",content,!0,{sourceMap:!1})},163:function(t,n,e){var map={"./Hackers.JPG":164,"./Jyuns.JPG":165,"./Wejustgo.JPG":166};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=163},164:function(t,n,e){t.exports=e.p+"img/da9b543.JPG"},165:function(t,n,e){t.exports=e.p+"img/3c4e05f.JPG"},166:function(t,n,e){t.exports=e.p+"img/66d50dc.JPG"},167:function(t,n,e){var map={"./http/http_01_proxy_01.jpg":154};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=167},168:function(t){t.exports=JSON.parse('{"postList":[{"title":"HTTP 완벽가이드, Proxy에 대하여","date":"2019, 12, 19, 23:00","mainTag":"http","subTag":["nginx"],"file":"http_01_proxy","image":"http_01_proxy_01.jpg","content":"프록시 서버란 무엇일까? 프록시의 뜻을 살펴보자면 [대리]라는 의미를 가지고 있다. 이를 보면 어떤 과정이나 행동을 대신해 준다고 막연하게나마 이해해볼 수 있다. 좀 더 구체적으로 설명하자면, 클라이언트와 서버 사이에 위치하여 HTTP 메시지를 정리하는 중개인이라고 할 수 있다..."}]}')},169:function(t,n,e){"use strict";var o=e(156);e.n(o).a},170:function(t,n,e){var o=e(24);(t.exports=o(!1)).push([t.i,".intro-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:space-evenly;padding:0 16px}.intro,.intro-container{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.intro{max-width:1080px;-webkit-box-pack:justify;justify-content:space-between;margin-top:120px}.intro-text{font-family:anodina-l;font-size:21px}.intro-text__main{font-family:anodina-b;font-size:28px!important}.intro-text__highlight{border-bottom:1px solid #42b983;font-weight:600;color:#42b983;cursor:pointer}.intro-image-wrapped{position:relative}.intro-image{max-width:600px;max-height:400px;width:100%}.intro-image-description{position:absolute;right:0;bottom:0;margin:.5em 1em;font-family:anodina,NanumGothic;color:#fff;font-size:16px;font-weight:600}.navigation{width:100%;max-width:1080px;margin:32px 0 16px}.navigation>span{font-size:21px;font-family:anodina-b;cursor:pointer;margin-right:.5em}.navigation>.active{color:#42b983}.navigation-content{width:100%;max-width:1080px;-o-object-fit:cover;object-fit:cover}.content,.content-text{display:-webkit-box;display:flex}.content-text{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:space-evenly;justify-content:space-evenly;padding-left:16px}.content-image{max-width:400px;width:100%;border-radius:4px}.ellipsis{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;padding:0!important}@media (max-width:1080px){.intro{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:normal;justify-content:normal;margin-top:0}.intro-text{width:100%;max-width:600px;padding:16px 0}.navigation{padding:8px 0}.navigation,.navigation-content{max-width:600px}.content{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.content-text{padding:8px}.content-image{max-width:600px;height:240px;-o-object-fit:cover;object-fit:cover}}",""])},172:function(t,n,e){"use strict";e.r(n);var o={asyncData:function(){return e(168)},data:function(){return{currentIntroImage:0,introImage:[{name:"Jyuns",description:"@github.com"},{name:"Hackers",description:" / 수강증 자동발급 시스템 기획"},{name:"Wejustgo",description:" / 교환학생 정보공유 플랫폼"}]}},methods:{getIntroIndex:function(t){this.currentIntroImage=t}},mounted:function(){}},r=(e(169),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"intro-container"},[o("div",{staticClass:"intro"},[o("div",{staticClass:"intro-text"},[o("span",{staticClass:"intro-text__main"},[t._v("Hey there, I'm "),o("span",{staticClass:"intro-text__highlight",on:{mouseover:function(n){return t.getIntroIndex(0)}}},[t._v("Jay Yun")])]),o("br"),t._v("\n    I'm currently a "),o("span",{staticClass:"intro-text__highlight",on:{mouseover:function(n){return t.getIntroIndex(0)}}},[t._v("e-business student")]),t._v(" at Ajou Univ."),o("br"),t._v("\n    I dreamed of becoming a "),o("span",{staticClass:"intro-text__highlight",on:{mouseover:function(n){return t.getIntroIndex(1)}}},[t._v("Product Manager.")]),o("br"),t._v("\n    and I'm learning "),o("span",{staticClass:"intro-text__highlight",on:{mouseover:function(n){return t.getIntroIndex(2)}}},[t._v("Web Programming")]),t._v(" for"),o("br"),t._v("\n    a better understanding about product.")]),t._v(" "),o("div",{staticClass:"intro-image-wrapped"},[o("img",{staticClass:"intro-image",attrs:{src:e(163)("./"+t.introImage[t.currentIntroImage].name+".JPG")}}),t._v(" "),o("p",{staticClass:"intro-image-description"},[t._v(t._s(t.introImage[t.currentIntroImage].name+t.introImage[t.currentIntroImage].description))])])]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"navigation-content"},t._l(t.postList,(function(n,r){return o("a",{key:"post"+n.mainTag+r,staticClass:"content",attrs:{href:"/blog/"+n.mainTag+"&"+n.file}},[o("img",{staticClass:"content-image",attrs:{src:e(167)("./"+n.mainTag+"/"+n.file+"_01.jpg")}}),t._v(" "),o("div",{staticClass:"content-text"},[o("span",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),o("span",{staticClass:"content ellipsis"},[t._v(t._s(n.content))])])])})),0)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"navigation"},[n("span",{staticClass:"active"},[this._v("Project")]),this._v(" "),n("span",[this._v("Blog")])])}],!1,null,null,null);n.default=component.exports}}]);