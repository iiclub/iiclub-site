webpackJsonp([39],{"+wfx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("tfZW"),r=a("psx/"),n=a("VU/8")(s.a,r.a,!1,null,null,null);n.options.__file="pages/workshop/index.vue",e.default=n.exports},JpX0:function(t,e,a){"use strict";var s=a("PJSq"),r=a("gvpt"),n=a("VU/8")(s.a,r.a,!1,null,null,null);n.options.__file="components/cards/WrappedCard.vue",e.a=n.exports},PJSq:function(t,e,a){"use strict";e.a={props:["items"],data:function(){return{base64Prefix:"data:image/png;base64,"}},methods:{details:function(t){console.log("in details: path ",t),this.$router.push(t)}}}},gvpt:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"max-width":"auto",margin:"auto"},attrs:{id:"e3"}},[a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(e,s){return a("v-flex",{key:s,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2",img:t.base64Prefix+e.imgsrc}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v(t._s(e.title))])]),a("v-card-actions",[a("v-btn",{attrs:{flat:"",dark:""},on:{click:function(a){t.details(e.path)}}},[t._v("Details")]),a("v-btn",{attrs:{flat:"",dark:""}},[t._v("SHARE")])],1)],1)],1)}))],1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},"psx/":function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("WrappedCard",{attrs:{items:this.items}})],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},tfZW:function(t,e,a){"use strict";var s=a("mtWM"),r=(a.n(s),a("JpX0"));e.a={layout:"frontoffice",components:{WrappedCard:r.a},asyncData:function(t){console.log("in async data frontoffice begin");return t.app.$axios.$get("/frontoffice/workshop/view").then(function(t){console.log("res sucess ");var e=t;if("success"==e.response)return console.log("response success data ",e.data),{items:e.data};console.log("response error data ",e.data)}).catch(function(t){console.log("res err ",t)})},head:{title:"IICLUB - Workshop"}}}});