webpackJsonp([82],{"7poo":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("s4zo"),o=a("gohD"),i=a("VU/8")(s.a,o.a,!1,null,null,null);i.options.__file="pages/backoffice/carousal/view/index.vue",e.default=i.exports},gohD:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    modify carousal\n\n    "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-list",{attrs:{"three-line":""}},[t._l(t.dataItem,function(e,s){return[a("v-list-tile",{key:s},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s("path - "+e.path)}}),a("v-list-tile-sub-title",{domProps:{innerHTML:t._s("active - "+e.active+"  redirectPath - "+e.redirectPath)}}),a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{color:"Primary"},on:{click:function(a){t.triggerEdit(e._id)}}},[t._v("Edit / Delete")])],1),a("v-divider")],1)],1)]})],2)],1)],1)],1)],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},s4zo:function(t,e,a){"use strict";var s=a("mtWM"),o=a.n(s);e.a={layout:"backoffice",data:function(){return{dataItem:null}},asyncData:function(t){console.log("in async data begin");return o.a.get("http://localhost:3000/backoffice/carousal/viewimage").then(function(t){console.log("res sucess ");var e=t.data;if("success"==e.response)return console.log("response success data ",e.data),{dataItem:e.data};console.log("response error data ",e.data)}).catch(function(t){console.log("res err ",t)})},methods:{triggerEdit:function(t){console.log(" triggerEdit id ",t),this.$router.push("/backoffice/carousal/edit/"+t)}}}}});