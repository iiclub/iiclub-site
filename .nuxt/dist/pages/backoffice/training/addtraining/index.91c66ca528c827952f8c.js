webpackJsonp([78],{"6m+o":function(t,e,n){"use strict";var i=n("mtWM"),o=n.n(i);e.a={data:function(){return{etrainingname:"",elevel:"",overview:"",topic:[],kitcontents:[],duration:[],finalcondition:[],levels:[{text:"none"},{text:"level1"},{text:"level2"},{text:"level3"}],trainings:[{text:"Robotics"},{text:"Aeromodeling"},{text:"IOT"},{text:"3DPRINTING"},{text:"Raspberry PI"},{text:"Arduino"},{text:"Other Courses"}]}},layout:"backoffice",methods:{test:function(){console.log("test "),console.log("e1 ",this.etrainingname.text)},reset:function(){this.etrainingname=null,this.elevel=null,this.overview=null,this.topic=null,this.kitcontents=null,this.duration=null,this.finalcondition=null},insert:function(){console.log("in insert");var t={name:this.etrainingname.text,level:this.elevel.text,overview:this.overview,topic:this.topic,kitcontents:this.kitcontents,duration:this.duration,finalcondition:this.finalcondition};console.log("data11 ",t),o.a.post("/backoffice/training/add",t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},addtopic:function(){this.topic.push({topic:""})},addkit:function(){this.kitcontents.push({topic:""})},addduration:function(){this.duration.push({topic:""})},addfinalcondition:function(){this.finalcondition.push({topic:""})},deletetopic:function(t){console.log("key-",t,"-this.topic-",this.topic),this.topic.splice(t,1)},deletekit:function(t){console.log("key-",t,"-this.kitcontents-",this.kitcontents),this.kitcontents.splice(t,1)},deleteduration:function(t){console.log("key-",t,"-this.duration-",this.duration),this.duration.splice(t,1)},deletefinalcondition:function(t){console.log("key-",t,"-this.finalcondition-",this.finalcondition),this.finalcondition.splice(t,1)}}}},AyEB:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:" lighten-4",flat:""}},[n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs4:""}},[n("v-subheader",[t._v("Training Name")])],1),n("v-flex",{attrs:{xs8:""}},[n("v-select",{attrs:{items:t.trainings,label:"Select training","single-line":"",bottom:""},model:{value:t.etrainingname,callback:function(e){t.etrainingname=e},expression:"etrainingname"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs4:""}},[n("v-subheader",[t._v("LEVEL")])],1),n("v-flex",{attrs:{xs8:""}},[n("v-select",{attrs:{items:t.levels,label:"Select Level","single-line":"",bottom:""},model:{value:t.elevel,callback:function(e){t.elevel=e},expression:"elevel"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs4:""}},[n("v-subheader",[t._v("Overview")])],1),n("v-flex",{attrs:{xs8:""}},[n("v-text-field",{attrs:{name:"input-7-1",label:"Overview","multi-line":""},model:{value:t.overview,callback:function(e){t.overview=e},expression:"overview"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs4:""}},[n("v-subheader",[t._v("Topic\n            "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addtopic()}}},[t._v("Add")])],1)],1),n("v-flex",{attrs:{xs8:""}},t._l(t.topic,function(e,i){return n("div",{key:i},[n("fieldset",{staticStyle:{padding:"3%"}},[n("legend",[t._v("Topic "+t._s(i+1))]),n("v-text-field",{attrs:{label:"Enter Topic",required:""},model:{value:e.topic,callback:function(n){t.$set(e,"topic",n)},expression:"content.topic"}}),n("v-btn",{attrs:{color:"error",dark:""},on:{click:function(e){t.deletetopic(i)}}},[t._v("Delete")])],1)])}))],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs4:""}},[n("v-subheader",[t._v("Kit contents\n            "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addkit()}}},[t._v("Add")])],1)],1),n("v-flex",{attrs:{xs8:""}},t._l(t.kitcontents,function(e,i){return n("div",{key:i},[n("fieldset",{staticStyle:{padding:"3%"}},[n("legend",[t._v("kitcontent "+t._s(i+1))]),n("v-text-field",{attrs:{label:"Enter Topic",required:""},model:{value:e.topic,callback:function(n){t.$set(e,"topic",n)},expression:"content.topic"}}),n("v-btn",{attrs:{color:"error",dark:""},on:{click:function(e){t.deletekit(i)}}},[t._v("Delete")])],1)])}))],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs4:""}},[n("v-subheader",[t._v("Duration\n            "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addduration()}}},[t._v("Add")])],1)],1),n("v-flex",{attrs:{xs8:""}},t._l(t.duration,function(e,i){return n("div",{key:i},[n("fieldset",{staticStyle:{padding:"3%"}},[n("legend",[t._v("Duration "+t._s(i+1))]),n("v-text-field",{attrs:{label:"Enter Topic",required:""},model:{value:e.topic,callback:function(n){t.$set(e,"topic",n)},expression:"content.topic"}}),n("v-btn",{attrs:{color:"error",dark:""},on:{click:function(e){t.deleteduration(i)}}},[t._v("Delete")])],1)])}))],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs4:""}},[n("v-subheader",[t._v("Final Condition\n            "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addfinalcondition()}}},[t._v("Add")])],1)],1),n("v-flex",{attrs:{xs8:""}},t._l(t.finalcondition,function(e,i){return n("div",{key:i},[n("fieldset",{staticStyle:{padding:"3%"}},[n("legend",[t._v("Final Condition "+t._s(i+1))]),n("v-text-field",{attrs:{label:"Enter Topic",required:""},model:{value:e.topic,callback:function(n){t.$set(e,"topic",n)},expression:"content.topic"}}),n("v-btn",{attrs:{color:"error",dark:""},on:{click:function(e){t.deletefinalcondition(i)}}},[t._v("Delete")])],1)])}))],1),n("v-card-actions",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs4:""}}),n("v-flex",{attrs:{xs8:""}},[n("v-btn",{attrs:{flat:"",row:""},on:{click:function(e){t.reset()}}},[t._v("Reset")]),n("v-btn",{attrs:{color:"blue lighten-4",flat:""},on:{click:function(e){t.insert()}}},[t._v("Insert Training")])],1)],1)],1)],1)],1)],1)],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},dmpM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("6m+o"),o=n("AyEB"),l=n("VU/8")(i.a,o.a,!1,null,null,null);l.options.__file="pages/backoffice/training/addtraining/index.vue",e.default=l.exports}});