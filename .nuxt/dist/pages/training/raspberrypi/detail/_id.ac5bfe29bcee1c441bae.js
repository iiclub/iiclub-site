webpackJsonp([28],{"2xLO":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"threeDPrint_description"}},[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[r("v-card",{attrs:{color:"blue-grey lighten-2"}},[r("v-card-media",{attrs:{src:t.reqcontent.imagesrc,height:"300px"}},[r("v-layout",{staticClass:"media",attrs:{column:""}},[r("v-card-title",{staticClass:"white--text pl-5 pt-5"},[r("div",{staticClass:"display-1 pl-5 pt-5"},[t._v(t._s(t.reqcontent.name))])])],1)],1),r("v-card-text",[r("v-layout",{staticClass:"text-xs-center",attrs:{row:"",wrap:"","mb-2":""}},[r("v-flex",{staticClass:"title",attrs:{xs12:"","mb-3":""}},[t._v("\n                    Overview\n                  ")]),r("v-flex",{staticClass:"body-1 mb-4",attrs:{xs12:""}},[t._v("\n                    "+t._s(t.reqcontent.overview)+"\n                  ")])],1),r("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},[r("v-flex",{staticClass:"title",attrs:{xs12:""}},[t._v("\n                    Topic\n                  ")]),t._l(t.reqcontent.topic,function(e,s){return r("v-flex",{key:s,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                   "+t._s(e.topic)+"\n                  ")])})],2),r("h1",{staticClass:"title"},[t._v("Kit contents")]),r("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},t._l(t.reqcontent.kitcontents,function(e,s){return r("v-flex",{key:s,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                   "+t._s(e.topic)+"\n                  ")])})),r("h1",{staticClass:"title"},[t._v("Duration")]),r("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},t._l(t.reqcontent.duration,function(e,s){return r("v-flex",{key:s,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                    "+t._s(e.topic)+"\n                  ")])})),r("h1",{staticClass:"title"},[t._v("Final Condition")]),r("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},t._l(t.reqcontent.finalcondition,function(e,s){return r("v-flex",{key:s,attrs:{xs12:"","offset-xs1":""}},[t._v("\n                    "+t._s(e.topic)+"\n                  ")])})),r("div",{staticStyle:{"text-align":"center"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.register(t.registerurl)}}},[t._v("Register")])],1)],1)],1)],1)],1)],1)],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},AXkJ:function(t,e,r){var s=r("S37F");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("73b5abc9",s,!1,{sourceMap:!1})},"LY+/":function(t,e,r){"use strict";e.a={props:["urlparam","registerurl"],data:function(){return{id:null,items:[{value:!0,name:"Frozen Yogurt",calories:"sdfsdfsdfgsdgsgfg159"},{value:!0,name:"Ice cream sandwich",calories:237},{value:!0,name:"Eclair",calories:262},{value:!1,name:"Cupcake",calories:305}],reqcontent:""}},methods:{register:function(t){console.log("in register"),this.$router.push(t)}},created:function(){var t=this;console.log("in training details created"),this.id=this.urlparam;var e="/frontoffice/training/details/"+this.id;this.$axios.$get(e).then(function(e){var r=e.data;t.reqcontent=r,console.log("res sucess content ",r)}).catch(function(t){console.log("res err ",t)})}}},S37F:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"#threeDPrint_description .toolbar-custom .toolbar__content{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""])},VpU6:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("cfw5"),n=r("cM3g"),a=r("VU/8")(s.a,n.a,!1,null,null,null);a.options.__file="pages/training/raspberrypi/detail/_id.vue",e.default=a.exports},cM3g:function(t,e,r){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Training",{attrs:{urlparam:this.$route.params.id,registerurl:"/training/raspberrypi/register/"+this.$route.params.id}})],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},cfw5:function(t,e,r){"use strict";var s=r("g3qp");e.a={components:{Training:s.a},layout:"frontoffice",head:{title:"IICLUB - Raspberry PI - details"}}},g3qp:function(t,e,r){"use strict";var s=r("LY+/"),n=r("2xLO"),a=!1;var i=function(t){a||r("AXkJ")},o=r("VU/8")(s.a,n.a,!1,i,null,null);o.options.__file="components/description/training.vue",e.a=o.exports}});