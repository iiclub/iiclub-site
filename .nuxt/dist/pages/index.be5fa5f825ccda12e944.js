webpackJsonp([19],{"+ptz":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-carousel",{attrs:{dark:"","delimiter-icon":"stop"}},t._l(t.dataItemCarousal,function(e,o){return a("v-carousel-item",{key:o,attrs:{src:e.src},on:{click:function(a){t.carousalTrigger(e.redirectPath)}}})})),a("v-layout",{attrs:{column:""}},[a("v-flex",{staticClass:"testimonals",attrs:{xs12:""}},[a("v-toolbar",{attrs:{color:"grey darken-4"}},[a("v-toolbar-title",[t._v("Testimonals")])],1)],1),a("v-flex",[a("br"),a("Testimonal",{attrs:{dataItemTestimonal:t.dataItemTestimonal}})],1)],1)],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("/pyu"),n=a("+ptz"),s=!1;var r=function(t){s||a("Kzqd")},i=a("VU/8")(o.a,n.a,!1,r,null,null);i.options.__file="pages/index.vue",e.default=i.exports},"/pyu":function(t,e,a){"use strict";var o=a("/uHa");e.a={layout:"frontoffice",components:{Testimonal:o.a},data:function(){return{dataItem:null}},mounted:function(){console.log(this.$vuetify.breakpoint)},asyncData:function(t){console.log("in async data begin ");return t.app.$axios.$get("/frontoffice/carousal/getcarousal").then(function(t){console.log("res sucess ");var e=t;if("success"==e.response)return console.log("response success data ",e),{dataItemCarousal:e.dataCarousal,dataItemTestimonal:e.dataTestimonal};console.log("response error data ",e.data)}).catch(function(t){console.log("res err ",t)})},methods:{carousalTrigger:function(t){console.log("in carousalTrigger: ",t),this.$router.push(t)}}}},"/uHa":function(t,e,a){"use strict";var o=a("rtMZ"),n=a("vW2o"),s=!1;var r=function(t){s||a("Jad5")},i=a("VU/8")(o.a,n.a,!1,r,null,null);i.options.__file="components/common/Testimonal.vue",e.a=i.exports},Jad5:function(t,e,a){var o=a("cKBx");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("772f5c55",o,!1,{sourceMap:!1})},Kzqd:function(t,e,a){var o=a("hJmq");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("5a053a2c",o,!1,{sourceMap:!1})},cKBx:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".testimonal-container{width:100%}.testimonal-container .custom{background-size:contain;background-repeat:no-repeat;background-position:50%;background-position-y:0;height:200px;width:100%}",""])},hJmq:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".testimonals .toolbar__content{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""])},rtMZ:function(t,e,a){"use strict";e.a={props:["dataItemTestimonal"],methods:{getTestimonalImage:function(t){return{"background-image":"url("+t+")"}}}}},vW2o:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"testimonal-container"},[a("carousel",{attrs:{autoplay:"",perPage:1,loop:"",easing:"appear",autoplayTimeout:5e3}},t._l(t.dataItemTestimonal,function(e,o){return a("slide",{key:o},[a("div",{staticClass:"custom",style:t.getTestimonalImage(e.src)})])}))],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n}});