webpackJsonp([10],{"+JBm":function(t,e,a){"use strict";e.a={props:["dialogstatus","errorMessages","redirect"],data:function(){return{dialog:!1}},computed:{redirectheader:function(){return"yes"==this.redirect?"You are registered":"Enter valid details"}},watch:{dialogstatus:function(t,e){this.dialog=this.dialogstatus},dialog:function(){console.log("dialog ",this.dialog)}},methods:{clickTrigger:function(){console.log("click trigger"),this.dialog=!1,this.$emit("changedDialogstatus",this.dialog),"yes"==this.redirect?(console.log("yes in"),this.$router.push("/")):console.log("no in")}}}},"6c4B":function(t,e,a){var i=a("fS5g");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("ad4a5eea",i,!1,{sourceMap:!1})},BfnV:function(t,e,a){"use strict";var i=a("+JBm"),r=a("hRNT"),n=a("VU/8")(i.a,r.a,!1,null,null,null);n.options.__file="components/common/Dialogbox.vue",e.a=n.exports},GJ17:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("XnPa"),r=a("n6iP"),n=a("VU/8")(i.a,r.a,!1,null,null,null);n.options.__file="pages/training/iot/register/index.vue",e.default=n.exports},QoMy:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"training_registration"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[a("v-card",{attrs:{color:"green"}},[a("v-toolbar",{staticClass:"toolbar-custom",attrs:{color:"indigo"}},[a("v-toolbar-title",[t._v("Training Registration")])],1),a("v-card-text",[a("v-text-field",{attrs:{label:"Your Name","persistent-hint":"","prepend-icon":"perm_identity",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{label:"CourseID","persistent-hint":"",disabled:"","prepend-icon":"book",required:""},model:{value:t.trainingname,callback:function(e){t.trainingname=e},expression:"trainingname"}}),a("v-text-field",{staticClass:"input-group--focused",attrs:{label:"Course Title","persistent-hint":"",disabled:"","prepend-icon":"book",name:"input-7-5","auto-grow":"","multi-line":"",required:"",dark:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-select",{attrs:{label:"Occupation","persistent-hint":"",items:t.options,"prepend-icon":"work",required:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),a("v-text-field",{attrs:{label:"Email address",rules:t.emailRules,"prepend-icon":"email","persistent-hint":"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{name:"input-3-3",label:"Phone number","prepend-icon":"phone","single-line":"",mask:t.mask,required:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("v-flex",{attrs:{xs12:""}},[a("v-dialog",{attrs:{persistent:"",lazy:"","full-width":"",width:"290px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-text-field",{attrs:{slot:"activator",label:"Date of Birth","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),a("v-date-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.save,r=e.cancel;return[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:r}},[t._v("Cancel")]),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:i}},[t._v("OK")])],1)]}}]),model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("br")],1),a("v-flex",{staticClass:"custom-submit",attrs:{xs12:""}},[a("v-btn",{attrs:{color:"info",loading:t.loading4,disabled:t.loading4},on:{click:function(e){t.register1()}}},[t._v("Submit Registration\n              "),a("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[a("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)],1)],1)],1),a("Dialogbox",{attrs:{dialogstatus:t.dialogstatus,errorMessages:t.errorMessages,redirect:t.redirectDialog},on:{changedDialogstatus:function(e){t.changedDialogstatus(e)}}})],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},XnPa:function(t,e,a){"use strict";var i=a("uNOZ");e.a={layout:"frontoffice",components:{Training:i.a}}},ab0Z:function(t,e,a){"use strict";var i=a("BfnV");e.a={props:["urlparam"],layout:"frontoffice",components:{Dialogbox:i.a},data:function(){return{redirectDialog:"no",id:null,trainingname:null,title:null,username:null,date:null,menu:!1,modal:!1,mask:"##########",value:null,email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],select:[],options:[{value:"Student",text:"Student"},{value:"Working",text:"Working"}],loader:null,loading:!1,loading4:!1,dialogstatus:!1,errorMessages:null}},watch:{loader:function(){var t=this.loader;this[t]=!this[t],this.loader=null}},methods:{changedDialogstatus:function(t){console.log("content-- ",t),this.dialogstatus=t,t||(this.errorMessages=null)},register:function(){console.log("in register1")},register1:function(){var t=this;this.loader="loading4";var e={id:this.id,occupation:this.select,emailid:this.email,phone:this.value,dateofbirth:this.date,username:this.username};console.log("dataInput ",e);this.$axios.$post("/frontoffice/training/register",e).then(function(e){t.loading4=!1,console.log("res sucess ");var a=e;"success"==a.response?(console.log("response success data "),t.dialogstatus=!0,t.errorMessages=["We will drop you an email in sometime"],t.redirectDialog="yes"):"error"==a.response?(console.log("response error data ",a.data),t.dialogstatus=!0,t.errorMessages=a.data,t.redirectDialog="no",console.log("response validationerror data ",a.data)):"validationerror"==a.response&&(t.dialogstatus=!0,t.errorMessages=a.data,t.redirectDialog="no",console.log("response validationerror data ",a.data))}).catch(function(e){t.loading4=!1,console.log("res err ",e)})}},created:function(){var t=this;console.log("in training details created component",this.urlparam);var e="/frontoffice/training/details/"+this.urlparam;this.$axios.$get(e).then(function(e){var a=e.data;console.log("content ",a),t.id=a.id,t.trainingname=a.name,t.title=a.overview,console.log("res sucess content ",a)}).catch(function(t){console.log("res err ",t)})}}},fS5g:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"#training_registration .custom-submit{text-align:center}#training_registration .toolbar-custom .toolbar__content{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}#training_registration .custom-loader{-webkit-animation:loader 1s infinite;animation:loader 1s infinite;display:-webkit-box;display:-ms-flexbox;display:flex}@-webkit-keyframes loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},hRNT:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{width:"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("\n          "+t._s(t.redirectheader)+"\n          \n        ")])]),t._l(t.errorMessages,function(e,i){return a("v-card-text",{key:i},[t._v("\n              "+t._s(e)+"\n          ")])}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){e.preventDefault(),t.clickTrigger()}}},[t._v("OK")])],1)],2)],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},n6iP:function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Training")],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},uNOZ:function(t,e,a){"use strict";var i=a("ab0Z"),r=a("QoMy"),n=!1;var o=function(t){n||a("6c4B")},s=a("VU/8")(i.a,r.a,!1,o,null,null);s.options.__file="components/registrationform/training.vue",e.a=s.exports}});