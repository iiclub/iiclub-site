webpackJsonp([76],{"+68v":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("OLzV"),i=a("1u6d"),o=a("VU/8")(s.a,i.a,!1,null,null,null);o.options.__file="pages/backofficelemon/carousal/edit/_id.vue",e.default=o.exports},"1u6d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:" lighten-4",flat:""}},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("h2",[t._v(" IMAGE carousal data")]),a("br"),a("br"),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[t._v("\n              Active\n          ")]),a("v-flex",{attrs:{xs8:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.imagesList.active,expression:"imagesList.active"}],attrs:{type:"radio",value:"true"},domProps:{checked:t._q(t.imagesList.active,"true")},on:{change:function(e){t.$set(t.imagesList,"active","true")}}}),t._v(" True"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.imagesList.active,expression:"imagesList.active"}],attrs:{type:"radio",value:"false"},domProps:{checked:t._q(t.imagesList.active,"false")},on:{change:function(e){t.$set(t.imagesList,"active","false")}}}),t._v(" False"),a("br")])],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[t._v("\n              IMAGE\n          ")]),a("v-flex",{attrs:{xs8:""}},[a("a",{attrs:{href:t.imagesList.path,target:"_blank"}},[a("img",{attrs:{src:t.base64Prefix+t.imagesList.path,alt:"image not found",height:"100",width:"100"}})])])],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[t._v("\n              redirectpath\n          ")]),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{label:"redirectpath",required:""},model:{value:t.imagesList.redirectPath,callback:function(e){t.$set(t.imagesList,"redirectPath",e)},expression:"imagesList.redirectPath"}})],1)],1),a("v-card-actions",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}}),a("v-flex",{attrs:{xs8:""}},[a("v-btn",{attrs:{color:"blue lighten-4",flat:""},on:{click:function(e){t.update()}}},[t._v("Update Carousal")]),a("v-btn",{attrs:{color:"red",dark:""},on:{click:function(e){t.deletethis()}}},[t._v("Delete Carousal")])],1)],1)],1)],1)],1)],1)],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},OLzV:function(t,e,a){"use strict";e.a={data:function(){return{id:null,backofficelemon:"/backofficelemon/carousal/view",imagesList:{},base64Prefix:"data:image/png;base64,"}},layout:"backoffice",methods:{update:function(){console.log("in update"),this.imagesList.path="",console.log("imagesList ",this.imagesList);var t=this;this.$axios.$post("/backoffice/carousal/update",this.imagesList).then(function(e){console.log(e),t.$router.push(t.backofficelemon)}).catch(function(t){console.log(t)})},deletethis:function(){var t=this;this.$axios.$get("/backoffice/carousal/delete?id="+this.imagesList._id).then(function(e){console.log(e),t.$router.push(t.backofficelemon)}).catch(function(t){console.log(t)})}},created:function(){var t=this;console.log("in edit carousal created"),this.id=this.$route.params.id;this.$axios.$get("/backoffice/carousal/editcarousalget?id="+this.id).then(function(e){var a=e;"success"==a.response?(console.log("res sucess ",a.data),t.imagesList=a.data):console.log("response error data ",a.data)}).catch(function(t){console.log("res err ",t)})}}}});