webpackJsonp([73],{Kswf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("M84v"),i=n("c2np"),a=n("VU/8")(s.a,i.a,!1,null,null,null);a.options.__file="pages/backofficelemon/testimonals/view/index.vue",e.default=a.exports},M84v:function(t,e,n){"use strict";e.a={layout:"backoffice",data:function(){return{dataItem:null}},asyncData:function(t){console.log("in async data begin testimonal");return t.app.$axios.$get("/backoffice/testimonal/viewimage").then(function(t){console.log("res sucess ");var e=t;if("success"==e.response)return console.log("response success data ",e.data),{dataItem:e.data};console.log("response error data ",e.data)}).catch(function(t){console.log("res err ",t)})},methods:{triggerEdit:function(t){console.log(" triggerEdit id ",t),this.$router.push("/backofficelemon/testimonals/edit/"+t)}}}},c2np:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    modify testimonals\n\n    "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-list",{attrs:{"three-line":""}},[t._l(t.dataItem,function(e,s){return[n("v-list-tile",{key:s},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s("path - "+e.path)}}),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s("active - "+e.active)}}),n("div",{staticClass:"text-xs-center"},[n("v-btn",{attrs:{color:"Primary"},on:{click:function(n){t.triggerEdit(e._id)}}},[t._v("Edit / Delete")])],1),n("v-divider")],1)],1)]})],2)],1)],1)],1)],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i}});