webpackJsonp([66],{"1y38":function(t,r,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#breadcrumb{font-weight:700}#breadcrumb a{color:#fff!important}#breadcrumb .breadcrumb-active{color:#60e660!important}.breadcrumbs{padding:5px 12px}",""])},Lb33:function(t,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=i("tvS+"),a=i("Sl63"),s=!1;var b=function(t){s||i("d1fR")},o=i("VU/8")(e.a,a.a,!1,b,null,null);o.options.__file="layouts/frontoffice - Copy.vue",r.default=o.exports},Sl63:function(t,r,i){"use strict";var e=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScrollApp,expression:"onScrollApp"}],attrs:{dark:""}},[i("v-navigation-drawer",{attrs:{temporary:"",dark:"",absolute:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[i("v-list",{staticClass:"pa-1"},[i("v-list-tile",{attrs:{avatar:"",tag:"div"}},[i("v-list-tile-avatar",[i("img",{staticClass:"src",attrs:{src:"/images/otherimages/brandlogo.jpg",alt:""}})]),i("v-list-tile-content",{on:{click:function(r){r.stopPropagation(),t.triggerRoute("/")}}},[i("v-list-tile-title",[t._v(t._s(t.brandName))])],1)],1)],1),i("v-list",t._l(t.items,function(r){return i("v-list-group",{key:r.title,attrs:{value:r.active}},[i("v-list-tile",{attrs:{slot:"item"},slot:"item"},[i("v-list-tile-content",[r.items.length>0?i("v-list-tile-title",[t._v(t._s(r.title))]):i("v-list-tile-title",{on:{click:function(i){i.stopPropagation(),t.triggerRoute(r.path)}}},[t._v(t._s(r.title))])],1),r.items.length>0?i("v-list-tile-action",[i("v-icon",[t._v("keyboard_arrow_down")])],1):t._e()],1),t._l(r.items,function(r){return i("v-list-tile",{key:r.title,on:{click:function(i){i.stopPropagation(),t.triggerRoute(r.path)}}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(r.title))])],1)],1)})],2)}))],1),i("v-card",{attrs:{flat:""}},[i("v-toolbar",{attrs:{color:"deep-orange darken-2"}},[i("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(r){r.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"white--text",on:{click:function(r){r.stopPropagation(),t.triggerRoute("/")}}},[t._v(t._s(t.brandName))]),i("v-spacer",{staticClass:"hidden-xs-only"}),i("v-btn",{staticClass:"hidden-xs-only",attrs:{flat:""},on:{click:function(r){r.stopPropagation(),t.triggerRoute(t.items[0].path)}}},[t._v(t._s(t.items[0].title))]),i("v-menu",{staticClass:"hidden-xs-only",attrs:{"offset-y":""}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("\n                      "+t._s(t.items[1].title)+"\n                      "),i("v-icon",{attrs:{dark:""}},[t._v("arrow_drop_down")])],1),i("v-list",t._l(t.items[1].items,function(r,e){return i("v-list-tile",{key:r.title,on:{click:function(i){t.triggerRoute(r.path)}}},[i("v-list-tile-title",[t._v(t._s(r.title))])],1)}))],1),i("v-btn",{staticClass:"hidden-xs-only",attrs:{flat:""},on:{click:function(r){r.stopPropagation(),t.triggerRoute(t.items[2].path)}}},[t._v(t._s(t.items[2].title))]),i("v-btn",{staticClass:"hidden-xs-only",attrs:{flat:""},on:{click:function(r){r.stopPropagation(),t.triggerRoute(t.items[3].path)}}},[t._v(t._s(t.items[3].title))]),i("v-btn",{staticClass:"hidden-xs-only",attrs:{flat:""},on:{click:function(r){r.stopPropagation(),t.triggerRoute(t.items[4].path)}}},[t._v(t._s(t.items[4].title))])],1)],1),i("v-breadcrumbs",{attrs:{id:"breadcrumb"}},[i("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("forward")]),t._l(t.breadcrumbItems,function(r){return i("v-breadcrumbs-item",{key:r.text,attrs:{"active-class":"breadcrumb-active",disabled:r.disabled}},[t._v("\n              "+t._s(r.text)+"\n          ")])})],2),i("nuxt"),i("v-fab-transition",[i("v-btn",{key:"keyboard_arrow_up",attrs:{color:"red",dark:"",fab:"",fixed:"",bottom:"",right:""},on:{click:function(r){r.stopPropagation(),t.scrollSite()}},model:{value:t.fab,callback:function(r){t.fab=r},expression:"fab"}},[i("v-icon",[t._v("keyboard_arrow_up")])],1)],1),i("v-footer",{attrs:{height:"auto",app:"",id:"footer"}},[i("v-card",{staticClass:"indigo lighten-1 white--text text-xs-center",staticStyle:{margin:"0"},attrs:{flat:"",tile:""}},[i("v-card-text",t._l(t.icons,function(t){return i("v-btn",{key:t,staticClass:"mx-3 white--text",attrs:{icon:""}},[i("i",{class:t,staticStyle:{"font-size":"40px"}})])})),i("v-card-text",{staticClass:"white--text pt-0"},[i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),t._v(" \n\n      "+t._s(t.offsetTop)+" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n    ")]),i("v-card-text",{staticClass:"white--text"},[t._v("\n      ©2018 — "),i("strong",[t._v("IICLUB")])])],1)],1)],1)};e._withStripped=!0;var a={render:e,staticRenderFns:[]};r.a=a},d1fR:function(t,r,i){var e=i("1y38");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("31d7e59f",e,!1,{sourceMap:!1})},"tvS+":function(t,r,i){"use strict";r.a={data:function(){return{offsetTop:0,fab:!1,icons:["fab fa-whatsapp","fab fa-facebook-square","fab fa-twitter","fab fa-google-plus-g","fab fa-linkedin","fab fa-instagram"],drawer:!1,brandName:"IICLUB",items:[{custom_id:"h_1",path:"/",title:"HOME",items:[]},{custom_id:"t_2",path:"",title:"TRAININGS",items:[{custom_id:"t_2_robo",path:"/training/robotics",title:"Robotics"},{custom_id:"t_2_amg",path:"/training/aeromodeling",title:"Aeromodeling"},{custom_id:"t_2_iot",path:"/training/iot",title:"IOT"},{custom_id:"t_2_3dprint",path:"/training/3dprinting",title:"3D Printing"},{custom_id:"t_2_raspi",path:"/training/raspberrypi",title:"Raspberry PI"},{custom_id:"t_2_auno",path:"/training/arduino",title:"Arduino"},{custom_id:"t_2_ocs",path:"/training/othercourses",title:"Other Courses"}]},{custom_id:"w_3",path:"/workshop",title:"WORKSHOP",items:[]},{custom_id:"a_4",path:"/aboutus",title:"ABOUT US",items:[]},{custom_id:"c_5",path:"/contactus",title:"CONTACT US",items:[]}],breadcrumbItems:[{text:"Home",disabled:!1},{text:"Training",disabled:!1},{text:"Robotics",disabled:!0}]}},methods:{triggerRoute:function(t){console.log("in triggerRoute"),console.log("path ",t),this.$router.push(t)},scrollSite:function(){var t=-this.offsetTop/20,r=setInterval(function(){0!=window.scrollY?window.scrollBy(0,t):clearInterval(r)},15)},onScrollApp:function(t){this.offsetTop=window.pageYOffset||document.documentElement.scrollTop}}}}});