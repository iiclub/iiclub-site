webpackJsonp([33],{"2xLO":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"threeDPrint_description"}},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[n("v-card",{attrs:{color:"blue-grey lighten-2"}},[n("v-card-media",{attrs:{src:t.base64Prefix+t.reqcontent.imagesrc,height:"300px"}},[n("v-layout",{staticClass:"media",attrs:{column:""}},[n("v-card-title",{staticClass:"white--text pl-5 pt-5"},[n("div",{staticClass:"display-1 pl-5 pt-5"},[t._v(t._s(t.reqcontent.name))])])],1)],1),n("v-card-text",[n("v-layout",{staticClass:"text-xs-center",attrs:{row:"",wrap:"","mb-2":""}},[n("v-flex",{staticClass:"title",attrs:{xs12:"","mb-3":""}},[t._v("\n                    Overview\n                  ")]),n("v-flex",{staticClass:"body-1 mb-4",attrs:{xs12:""}},[t._v("\n                    "+t._s(t.reqcontent.overview)+"\n                  ")])],1),n("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},[n("v-flex",{staticClass:"title",attrs:{xs12:""}},[t._v("\n                    Topic\n                  ")]),t._l(t.reqcontent.topic,function(e,r){return n("v-flex",{key:r,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                   "+t._s(e.topic)+"\n                  ")])})],2),n("h1",{staticClass:"title"},[t._v("Kit contents")]),n("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},t._l(t.reqcontent.kitcontents,function(e,r){return n("v-flex",{key:r,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                   "+t._s(e.topic)+"\n                  ")])})),n("h1",{staticClass:"title"},[t._v("Duration")]),n("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},t._l(t.reqcontent.duration,function(e,r){return n("v-flex",{key:r,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                    "+t._s(e.topic)+"\n                  ")])})),n("h1",{staticClass:"title"},[t._v("Final Condition")]),n("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},t._l(t.reqcontent.finalcondition,function(e,r){return n("v-flex",{key:r,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                    "+t._s(e.topic)+"\n                  ")])})),n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.register(t.registerurl)}}},[t._v("Register")])],1)],1)],1)],1)],1)],1)],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s},"7NqH":function(t,e,n){"use strict";var r=n("g3qp");e.a={layout:"frontoffice",components:{Training:r.a}}},"9oMM":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"#threeDPrint_description .toolbar-custom .toolbar__content{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""])},J5Hn:function(t,e,n){"use strict";e.a={props:["urlparam","registerurl"],data:function(){return{id:null,base64Prefix:"data:image/png;base64,",items:[{value:!0,name:"Frozen Yogurt",calories:"sdfsdfsdfgsdgsgfg159"},{value:!0,name:"Ice cream sandwich",calories:237},{value:!0,name:"Eclair",calories:262},{value:!1,name:"Cupcake",calories:305}],reqcontent:""}},methods:{register:function(t){console.log("in register"),this.$router.push(t)}},created:function(){var t=this;console.log("in training details created"),this.id=this.urlparam;var e="/frontoffice/training/details/"+this.id;this.$axios.$get(e).then(function(e){var n=e.data;t.reqcontent=n,console.log("res sucess content ",n)}).catch(function(t){console.log("res err ",t)})}}},g3qp:function(t,e,n){"use strict";var r=n("J5Hn"),s=n("2xLO"),a=!1;var i=function(t){a||n("znrJ")},o=n("VU/8")(r.a,s.a,!1,i,null,null);o.options.__file="components/description/training.vue",e.a=o.exports},mgeV:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Training")],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s},vZ0i:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7NqH"),s=n("mgeV"),a=n("VU/8")(r.a,s.a,!1,null,null,null);a.options.__file="pages/training/arduino/detail/index.vue",e.default=a.exports},znrJ:function(t,e,n){var r=n("9oMM");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("ed1dccbe",r,!1,{sourceMap:!1})}});