webpackJsonp([49],{"4BfP":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("izgo"),a=i("OUxl"),o=!1;var r=function(t){o||i("mpH6")},s=i("VU/8")(n.a,a.a,!1,r,null,null);s.options.__file="pages/backofficelemon/training/viewtraining/index.vue",e.default=s.exports},OUxl:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("head: "+t._s(t.project))]),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-card",[i("v-list",{attrs:{"three-line":""}},[t._l(t.dataItem,function(e,n){return[i("v-list-tile",{key:n},[i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s("Title - "+e.name)}}),i("v-list-tile-sub-title",{domProps:{innerHTML:t._s("Level - "+e.level)}}),i("div",{staticClass:"text-xs-center"},[i("v-btn",{attrs:{color:"Primary"},on:{click:function(i){t.triggerEdit(e._id)}}},[t._v("Edit / Delete")]),i("v-btn",{attrs:{color:"Primary"},on:{click:function(i){t.addImage(e._id)}}},[t._v("Add Image")])],1),i("v-divider")],1)],1)]})],2)],1)],1)],1)],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},TKxf:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},izgo:function(t,e,i){"use strict";var n=i("mtWM");i.n(n);e.a={layout:"backoffice",data:function(){return{project:"in data",dataItem:null}},asyncData:function(t){console.log("in async data begin");return t.app.$axios.$get("/backoffice/training/view").then(function(t){console.log("res sucess ");var e=t;if("success"==e.response)return console.log("response success data ",e.data),{dataItem:e.data};console.log("response error data ",e.data)}).catch(function(t){console.log("res err ",t)})},methods:{triggerEdit:function(t){console.log(" triggerEdit id ",t),this.$router.push("/backofficelemon/training/edittraining/"+t)},addImage:function(t){console.log(" addImage id ",t),this.$router.push("/backofficelemon/training/addimage/"+t)}}}},mpH6:function(t,e,i){var n=i("TKxf");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("1b645469",n,!1,{sourceMap:!1})}});