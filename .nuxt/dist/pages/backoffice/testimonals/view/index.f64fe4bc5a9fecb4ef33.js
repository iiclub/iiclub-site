webpackJsonp([79],{EbBH:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("bNmD"),n=s("JOvS"),a=s("VU/8")(i.a,n.a,!1,null,null,null);a.options.__file="pages/backoffice/testimonals/view/index.vue",e.default=a.exports},JOvS:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n    modify testimonals\n\n    "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-list",{attrs:{"three-line":""}},[t._l(t.dataItem,function(e,i){return[s("v-list-tile",{key:i},[s("v-list-tile-content",[s("v-list-tile-title",{domProps:{innerHTML:t._s("path - "+e.path)}}),s("v-list-tile-sub-title",{domProps:{innerHTML:t._s("active - "+e.active)}}),s("div",{staticClass:"text-xs-center"},[s("v-btn",{attrs:{color:"Primary"},on:{click:function(s){t.triggerEdit(e._id)}}},[t._v("Edit / Delete")])],1),s("v-divider")],1)],1)]})],2)],1)],1)],1)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},bNmD:function(t,e,s){"use strict";var i=s("mtWM"),n=s.n(i);e.a={layout:"backoffice",data:function(){return{dataItem:null}},asyncData:function(t){console.log("in async data begin testimonal");return n.a.get("http://localhost:3000/backoffice/testimonal/viewimage").then(function(t){console.log("res sucess ");var e=t.data;if("success"==e.response)return console.log("response success data ",e.data),{dataItem:e.data};console.log("response error data ",e.data)}).catch(function(t){console.log("res err ",t)})},methods:{triggerEdit:function(t){console.log(" triggerEdit id ",t),this.$router.push("/backoffice/testimonals/edit/"+t)}}}}});