webpackJsonp([37],{"2xLO":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"threeDPrint_description"}},[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[r("v-card",{attrs:{color:"blue-grey lighten-2"}},[r("v-card-media",{attrs:{src:t.reqcontent.imagesrc,height:"300px"}},[r("v-layout",{staticClass:"media",attrs:{column:""}},[r("v-card-title",{staticClass:"white--text pl-5 pt-5"},[r("div",{staticClass:"display-1 pl-5 pt-5"},[t._v(t._s(t.reqcontent.name))])])],1)],1),r("v-card-text",[r("v-layout",{staticClass:"text-xs-center",attrs:{row:"",wrap:"","mb-2":""}},[r("v-flex",{staticClass:"title",attrs:{xs12:"","mb-3":""}},[t._v("\n                    Overview\n                  ")]),r("v-flex",{staticClass:"body-1 mb-4",attrs:{xs12:""}},[t._v("\n                    "+t._s(t.reqcontent.overview)+"\n                  ")])],1),r("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},[r("v-flex",{staticClass:"title",attrs:{xs12:""}},[t._v("\n                    Topic\n                  ")]),t._l(t.reqcontent.topic,function(e,n){return r("v-flex",{key:n,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                   "+t._s(e.topic)+"\n                  ")])})],2),r("h1",{staticClass:"title"},[t._v("Kit contents")]),r("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},t._l(t.reqcontent.kitcontents,function(e,n){return r("v-flex",{key:n,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                   "+t._s(e.topic)+"\n                  ")])})),r("h1",{staticClass:"title"},[t._v("Duration")]),r("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},t._l(t.reqcontent.duration,function(e,n){return r("v-flex",{key:n,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                    "+t._s(e.topic)+"\n                  ")])})),r("h1",{staticClass:"title"},[t._v("Final Condition")]),r("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},t._l(t.reqcontent.finalcondition,function(e,n){return r("v-flex",{key:n,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                    "+t._s(e.topic)+"\n                  ")])})),r("div",{staticStyle:{"text-align":"center"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.register(t.registerurl)}}},[t._v("Register")])],1)],1)],1)],1)],1)],1)],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},"56MS":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Ay8A"),s=r("l8lx"),i=r("VU/8")(n.a,s.a,!1,null,null,null);i.options.__file="pages/training/3dprinting/detail/index.vue",e.default=i.exports},AXkJ:function(t,e,r){var n=r("S37F");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("73b5abc9",n,!1,{sourceMap:!1})},Ay8A:function(t,e,r){"use strict";var n=r("g3qp");e.a={components:{Training:n.a},layout:"frontoffice",head:{title:"IICLUB - 3D Printing - Details"}}},"LY+/":function(t,e,r){"use strict";e.a={props:["urlparam","registerurl"],data:function(){return{id:null,items:[{value:!0,name:"Frozen Yogurt",calories:"sdfsdfsdfgsdgsgfg159"},{value:!0,name:"Ice cream sandwich",calories:237},{value:!0,name:"Eclair",calories:262},{value:!1,name:"Cupcake",calories:305}],reqcontent:""}},methods:{register:function(t){console.log("in register"),this.$router.push(t)}},created:function(){var t=this;console.log("in training details created"),this.id=this.urlparam;var e="/frontoffice/training/details/"+this.id;this.$axios.$get(e).then(function(e){var r=e.data;t.reqcontent=r,console.log("res sucess content ",r)}).catch(function(t){console.log("res err ",t)})}}},S37F:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"#threeDPrint_description .toolbar-custom .toolbar__content{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""])},g3qp:function(t,e,r){"use strict";var n=r("LY+/"),s=r("2xLO"),i=!1;var a=function(t){i||r("AXkJ")},o=r("VU/8")(n.a,s.a,!1,a,null,null);o.options.__file="components/description/training.vue",e.a=o.exports},l8lx:function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Training",{attrs:{urlparam:"3dprinting",registerurl:"/training/3dprinting/register/"+this.$route.params.id}})],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s}});