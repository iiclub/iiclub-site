<template>
    <v-app dark v-scroll="onScrollApp">
        <v-navigation-drawer
        temporary
        v-model="drawer"
        dark
        absolute
        >
            <v-list class="pa-1">
                <v-list-tile avatar tag="div">
                    <v-list-tile-avatar>
                        <img src="/otherimages/logo ii.png" alt="" class="src"> 
                    </v-list-tile-avatar>
                    <v-list-tile-content @click.stop="triggerRoute('/')">
                        <v-list-tile-title>{{brandName}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            
            <v-list>
                <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
                    <v-list-tile slot="item">
                        <v-list-tile-content>
                            <v-list-tile-title v-if="item.items.length > 0 ">{{ item.title }}</v-list-tile-title>
                            <v-list-tile-title v-else @click.stop="triggerRoute(item.path)">{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action v-if="item.items.length > 0 ">
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile  v-for="subItem in item.items" v-bind:key="subItem.title"  @click.stop="triggerRoute(subItem.path)">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>


        </v-navigation-drawer>

        <v-card flat>
            <v-toolbar color="grey darken-4" >
                <v-toolbar-side-icon  class="hidden-sm-and-up"  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="white--text" @click.stop="triggerRoute('/')">
                    <div class="brand-logo-all brand-logo"></div>
                </v-toolbar-title>
                <v-spacer class="hidden-xs-only"></v-spacer>
                <v-btn flat class="hidden-xs-only" @click.stop="triggerRoute(items[0].path)">{{items[0].title}}</v-btn>
                <v-menu  class="hidden-xs-only" offset-y 	> 
                    <v-btn flat slot="activator">
                        {{items[1].title}}
                        <v-icon dark>arrow_drop_down</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="(subItem) in items[1].items" :key="subItem.title" @click="triggerRoute(subItem.path)">
                            <v-list-tile-title>{{subItem.title}}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu> 

                <v-btn flat class="hidden-xs-only" @click.stop="triggerRoute(items[2].path)">{{items[2].title}}</v-btn>
                <v-btn flat class="hidden-xs-only" @click.stop="triggerRoute(items[3].path)">{{items[3].title}}</v-btn>
            </v-toolbar>
        </v-card>
        <!-- <v-breadcrumbs id="breadcrumb">
            <v-icon slot="divider">forward</v-icon>
            <v-breadcrumbs-item  active-class="breadcrumb-active"
                v-for="item in breadcrumbItems" :key="item.text"
                :disabled="item.disabled"
            >
                {{ item.text }}
            </v-breadcrumbs-item>
        </v-breadcrumbs> -->
         <nuxt />
        <!-- <v-fab-transition>
        <v-btn
          color="red"
          key="keyboard_arrow_up"
          dark
          fab
          fixed
          bottom
          right
          v-model="fab"

          @click.stop="scrollSite()"
        >
          <v-icon>keyboard_arrow_up</v-icon>
          
        </v-btn>
      </v-fab-transition> -->
    <v-footer height="auto"  app id="footer" :style="footerStyle()">
        <v-flex xs12 style="margin:0 !important;">
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
      style="margin:0 !important;"
      color= "grey darken-4"
    >
      <v-card-text>
        <v-tooltip top v-for="(icon,key) in icons"  :key="key" :color="'light-green darken-4'" >
            <v-btn icon class="mx-3 white--text"  slot="activator"  @click.prevent="iconRedirect(icon)" >
                 <i :class="icon.icon" style="font-size:40px;"></i>
            </v-btn>
            <span>{{ icon.text == 'Whatsapp' ? 'Contact us at 8919545979 via Whatsapp' : icon.text}}</span>
        </v-tooltip>

      </v-card-text>
      <v-card-text class="white--text pt-0">
        <!-- {{offsetTop}} Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. -->
        <div class="address">
            <div>Innovate Invent Edu-Tech PVT LTD ,</div> 
            <div>House No 4-1-1235/6,</div> 
            <div>Abids, Hyderabad – 500001</div> 
        </div>
      </v-card-text>
      <v-card-text class="white--text">
        &copy;2018 — <strong>IICLUB</strong>
      </v-card-text>
    </v-card>
        </v-flex>
  </v-footer>
    <!-- <Snackbar /> -->
    </v-app>
</template>


<script>
/* import Snackbar from '@/components/common/Snackbar.vue'; */
 export default {
     /* components:{
         Snackbar
     }, */
    data () {
      return {
        /* scrollToTop: false, */
         offsetTop: 0,
        fab: false,
        icons: [
            {
                link : "8919545979",
                icon : "fab fa-whatsapp",
                text : "Whatsapp"
            },
            {
                link : "https://www.facebook.com/innovateinvent.roboticsclub.1",
                icon : "fab fa-facebook-square",
                text : "Facebook"
            },
            /* {
                link : "",
                icon : "fab fa-twitter"
            }, */
            {
                link : "https://plus.google.com/u/0/109886096378796909264",
                icon : "fab fa-google-plus-g",
                text : "Google +"
            },/* 
            {
                link : "",
                icon : "fab fa-linkedin"
            }, */
            {
                link : "https://www.instagram.com/innovateinvent/",
                icon : "fab fa-instagram",
                text : "Instagram"
            }
            ],
        drawer: false,
        brandName : "IICLUB",
        items: [
          { custom_id: "h_1", path:"/", title: 'HOME',items :[] },
          { custom_id: "t_2", path:"", title: 'TRAININGS',items : [
              { custom_id: "t_2_robo", path:"/training/robotics", title : "Robotics" },
              { custom_id: "t_2_amg", path:"/training/aeromodeling", title : "Aeromodeling" },
              { custom_id: "t_2_iot", path:"/training/iot", title : "IOT" },
              { custom_id: "t_2_3dprint", path:"/training/3dprinting/detail", title : "3D Printing" },
              { custom_id: "t_2_raspi", path:"/training/raspberrypi", title : "Raspberry PI" },
              { custom_id: "t_2_auno", path:"/training/arduino", title : "Arduino" },
              { custom_id: "t_2_ocs", path:"/training/othercourses", title : "Other Courses" }
          ] },
          { custom_id: "w_3", path:"/workshop", title: 'WORKSHOP', items :[] },
          { custom_id: "a_4", path:"/aboutus", title: 'ABOUT US' , items :[] }/* ,
          { custom_id: "c_5", path:"/contactus", title: 'CONTACT US' , items :[] }, */
        ],
        breadcrumbItems: [
          {
            text: 'Home',
            disabled: false
          },
          {
            text: 'Training',
            disabled: false
          },
          {
            text: 'Robotics',
            disabled: true
          }
        ]
      }
    },
    methods:{
         footerStyle(){

            if(this.$route.fullPath =="/workshop"){
                return {
                    /* position: "absolute",
                    bottom  : 0,
                    width: "100%" */
                }
            }
            else{
                return {

                }
            }
             
         },
        iconRedirect(inputPath){
            if(inputPath.text == "Whatsapp"){
            }
            else{
                window.open(inputPath.link, '_blank');
            }
        },
        triggerRoute(path){
            console.log("in triggerRoute");
            console.log("path ",path);
            this.$router.push(path);
        },
        scrollSite(){
            var scrollDuration = 300;
            var scrollStep = -this.offsetTop  / (scrollDuration / 15),
            scrollInterval = setInterval(function(){
                if ( window.scrollY != 0 ) {
                    window.scrollBy( 0, scrollStep );
                }
                else {
                    clearInterval(scrollInterval); 
                }
            },15);
            
        },
        onScrollApp (e) {
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
        }
    }
  }
</script>

<style>
#breadcrumb {
    font-weight: bold;
}
#breadcrumb a {
    color:white !important;
}
#breadcrumb .breadcrumb-active{
    color:rgb(96, 230, 96) !important;
}
.breadcrumbs{
    padding : 5px 12px;
}
.brand-logo{
    background-size: contain;
    height: 55px;  
    width: 150px;
}
.brand-logo-small{
    background-image: url("/otherimages/logo ii.png");
}
.brand-logo-all{
    background-image: url("/otherimages/logo.png");
}
#footer .address{
    font-size: 16px;
    /* font-weight: 600; */
}    
</style>
