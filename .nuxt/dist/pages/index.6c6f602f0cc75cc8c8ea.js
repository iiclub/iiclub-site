webpackJsonp([19],{"+ptz":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-carousel",{attrs:{dark:"","delimiter-icon":"stop"}},t._l(t.dataItemCarousal,function(e,o){return a("v-carousel-item",{key:o,attrs:{src:t.base64Prefix+e.src},on:{click:function(a){t.carousalTrigger(e.redirectPath)}}})})),a("v-layout",{attrs:{column:""}},[a("v-flex",{staticClass:"testimonals",attrs:{xs12:""}},[a("v-toolbar",{attrs:{color:"grey darken-4"}},[a("v-toolbar-title",[t._v("Testimonals")])],1)],1),a("v-flex",[a("br"),a("Testimonal",{attrs:{dataItemTestimonal:t.dataItemTestimonal}})],1)],1)],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},"/PDy":function(t,e,a){var o=a("7ds0");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("e603415c",o,!1,{sourceMap:!1})},"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("kYFx"),n=a("+ptz"),s=!1;var r=function(t){s||a("/PDy")},i=a("VU/8")(o.a,n.a,!1,r,null,null);i.options.__file="pages/index.vue",e.default=i.exports},"/uHa":function(t,e,a){"use strict";var o=a("aDuV"),n=a("vW2o"),s=!1;var r=function(t){s||a("BkbO")},i=a("VU/8")(o.a,n.a,!1,r,null,null);i.options.__file="components/common/Testimonal.vue",e.a=i.exports},"7ds0":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".testimonals .toolbar__content{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""])},"7v3Y":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".testimonal-container{width:100%}.testimonal-container .custom{background-size:contain;background-repeat:no-repeat;background-position:50%;background-position-y:0;height:200px;width:100%}",""])},BkbO:function(t,e,a){var o=a("7v3Y");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("77e2d37d",o,!1,{sourceMap:!1})},aDuV:function(t,e,a){"use strict";e.a={props:["dataItemTestimonal"],data:function(){return{base64Prefix:"data:image/png;base64,"}},methods:{getTestimonalImage:function(t){return{"background-image":"url("+this.base64Prefix+t+")"}}}}},kYFx:function(t,e,a){"use strict";var o=a("/uHa");e.a={layout:"frontoffice",components:{Testimonal:o.a},data:function(){return{dataItem:null,base64Prefix:"data:image/png;base64,"}},mounted:function(){console.log(this.$vuetify.breakpoint)},asyncData:function(t){console.log("in async data begin ");return t.app.$axios.$get("/frontoffice/carousal/getcarousal").then(function(t){console.log("res sucess ");var e=t;if("success"==e.response)return console.log("response success data ",e),{dataItemCarousal:e.dataCarousal,dataItemTestimonal:e.dataTestimonal};console.log("response error data ",e.data)}).catch(function(t){console.log("res err ",t)})},methods:{carousalTrigger:function(t){console.log("in carousalTrigger: ",t),this.$router.push(t)}}}},vW2o:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"testimonal-container"},[a("carousel",{attrs:{autoplay:"",perPage:1,loop:"",easing:"appear",autoplayTimeout:5e3}},t._l(t.dataItemTestimonal,function(e,o){return a("slide",{key:o},[a("div",{staticClass:"custom",style:t.getTestimonalImage(e.src)})])}))],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n}});