webpackJsonp([69],{"3xg/":function(t,e,o){"use strict";e.a={data:function(){return{project:"in data",dataItem:null}},asyncData:function(t){console.log("in async data begin");return t.app.$axios.$get("/backoffice/workshop/view").then(function(t){console.log("res sucess ");var e=t;if("success"==e.response)return console.log("response success data ",e.data),{dataItem:e.data};console.log("response error data ",e.data)}).catch(function(t){console.log("res err ",t)})},methods:{triggerEdit:function(t){console.log(" triggerEdit id ",t),this.$router.push("/backofficelemon/workshop/editworkshop/"+t)},addImage:function(t){console.log(" addImage id ",t),this.$router.push("/backofficelemon/workshop/addimage/"+t)}},layout:"backoffice"}},fdFL:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("head: "+t._s(t.project))]),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[o("v-card",[o("v-list",{attrs:{"three-line":""}},[t._l(t.dataItem,function(e,i){return[o("v-list-tile",{key:i},[o("v-list-tile-content",[o("v-list-tile-title",{domProps:{innerHTML:t._s("Title - "+e.title)}}),o("v-list-tile-sub-title",{domProps:{innerHTML:t._s("Active - "+e.active)}}),o("div",{staticClass:"text-xs-center"},[o("v-btn",{attrs:{color:"Primary"},on:{click:function(o){t.triggerEdit(e._id)}}},[t._v("Edit / Delete")]),o("v-btn",{attrs:{color:"Primary"},on:{click:function(o){t.addImage(e._id)}}},[t._v("Add Image")])],1),o("v-divider")],1)],1)]})],2)],1)],1)],1)],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},pu6W:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("3xg/"),s=o("fdFL"),n=o("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="pages/backofficelemon/workshop/viewworkshop/index.vue",e.default=n.exports}});