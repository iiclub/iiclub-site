webpackJsonp([51],{"6QdT":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("JQBe"),a=o("qwLq"),n=!1;var l=function(e){n||o("Jeel")},s=o("VU/8")(i.a,a.a,!1,l,null,null);s.options.__file="pages/backofficelemon/testimonals/add/index.vue",t.default=s.exports},JQBe:function(e,t,o){"use strict";t.a={layout:"backoffice",data:function(){return{id:null}},methods:{uploadImage:function(){console.log("in uploadImage this.id ",this.id);for(var e=this,t=new FormData,o=document.querySelector("#fileToUpload"),i=0;i<o.files.length;i++)console.log("index ",i),t.append("myimage",o.files[i]);t.append("id",this.id);this.$axios.$post("/backoffice/testimonal/addimage",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log("success ",t),e.$router.push("/backofficelemon/testimonals/view")}).catch(function(e){console.log("error ",e)})}},created:function(){console.log("in created hook addimage"),this.id=this.$route.params.id,console.log("this id ",this.id)}}},Jeel:function(e,t,o){var i=o("j1g0");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("rjj0")("1cb596b4",i,!1,{sourceMap:!1})},j1g0:function(e,t,o){(e.exports=o("FZ+f")(!1)).push([e.i,"",""])},qwLq:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs4:""}},[o("v-subheader",{staticClass:"grey--text text--lighten-1"},[e._v("Select image to upload \n              "),o("input",{attrs:{type:"file",name:"fileToUpload[]",id:"fileToUpload",multiple:""}})])],1)],1),o("div",[o("v-btn",{attrs:{color:"blue"},on:{click:function(t){e.uploadImage()}}},[e._v("Upload Image")])],1)],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};t.a=a}});