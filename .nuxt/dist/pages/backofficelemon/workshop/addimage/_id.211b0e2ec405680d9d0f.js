webpackJsonp([48],{"4C4/":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=t("iosZ"),a=t("EEtX"),n=!1;var s=function(e){n||t("VNwn")},l=t("VU/8")(i.a,a.a,!1,s,null,null);l.options.__file="pages/backofficelemon/workshop/addimage/_id.vue",o.default=l.exports},EEtX:function(e,o,t){"use strict";var i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs4:""}},[t("v-subheader",{staticClass:"grey--text text--lighten-1"},[e._v("Select image to upload \n              "),t("input",{attrs:{type:"file",name:"fileToUpload[]",id:"fileToUpload",multiple:""}})])],1)],1),t("div",[t("v-btn",{attrs:{color:"blue"},on:{click:function(o){e.uploadImage()}}},[e._v("Upload Image")])],1)],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};o.a=a},VNwn:function(e,o,t){var i=t("kCd4");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("5d91b1b0",i,!1,{sourceMap:!1})},iosZ:function(e,o,t){"use strict";o.a={layout:"backoffice",data:function(){return{id:null}},methods:{uploadImage:function(){console.log("in uploadImage this.id ",this.id);for(var e=this,o=new FormData,t=document.querySelector("#fileToUpload"),i=0;i<t.files.length;i++)console.log("index ",i),o.append("myimage",t.files[i]);o.append("id",this.id);this.$axios.$post("/backoffice/workshop/uploadImage",o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(o){console.log("success ",o),e.$router.push("/backofficelemon/workshop/viewworkshop")}).catch(function(e){console.log("error ",e)})}},created:function(){console.log("in created hook addimage"),this.id=this.$route.params.id,console.log("this id ",this.id)}}},kCd4:function(e,o,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])}});