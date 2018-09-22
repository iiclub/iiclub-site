<template>
    <v-app  dark >
        <v-toolbar>
            <v-toolbar-title>IICLUB BACKOFFICE</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <!-- <v-btn flat v-for="(header,index) in headerData" :key="index" @click="$router.push(header.path)">{{header.name}}</v-btn> -->
                <v-menu offset-y v-for="(header,index) in headerData" :key="index">
                    <v-btn color="primary" dark slot="activator" @click.prevent="$router.push('/backofficelemon')">{{header.name}}</v-btn>
                    
                    <v-list v-if="header.items != null">
                        <v-list-tile v-for="item in header.items" :key="item.name" @click="$router.push(item.path)">
                            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
         <nuxt />
    </v-app>
</template>

<script>
export default {
  data(){
      return {
        headerData : [
            {
                name : "HOME"
            },
            {
                name : "CAROUSAL",
                items : [
                    {name : "ADD",path :"/backofficelemon/carousal/add"},
                    {name : "VIEW",path :"/backofficelemon/carousal/view"}
                ]
            },
            {
                name : "Testimonals",
                items : [
                    {name : "ADD",path :"/backofficelemon/testimonals/add"},
                    {name : "VIEW",path :"/backofficelemon/testimonals/view"}
                ]
            },
            {
                name : "TRAINING",
                items : [
                    {name : "ADD",path:"/backofficelemon/training/addtraining"},
                    {name : "VIEW",path:"/backofficelemon/training/viewtraining"},
                ]
            },
            {
                name : "WORKSHOP",
                items : [
                    {name : "ADD",path:"/backofficelemon/workshop/addworkshop"},
                    {name : "VIEW",path:"/backofficelemon/workshop/viewworkshop"},
                ]
            },
            /* {
                name : "ABOUT US",
                items : [
                    {name : "EDIT ABOUTUS",path:""}
                ]
            },
            {
                name : "CONTACT US",
                items : [
                    {name : "EDIT CONTACTUS",path:""}
                ]
            }, */
            {
                name : "Export Data",
                items : [
                    {name : "Export",path:"/backofficelemon/export"}
                ]
            },
        ]
      }
  }
}
</script>

<style>

</style>
