<template>
  <div id="workshop_description">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
          <v-card color="green">

            <v-card-media :src="imagepath" height="300px">
              <v-layout column class="media">
                <v-card-title class="white--text pl-5 pt-5">
                  <div class="display-1 pl-5 pt-5">{{title}}</div>
                </v-card-title>
              </v-layout>
            </v-card-media>




            <!-- <v-toolbar color="indigo" class="toolbar-custom">
              <v-toolbar-title>{{title}}</v-toolbar-title>
            </v-toolbar>-->
            <v-card-text> 

              <v-layout row wrap mb-2 class="text-xs-center">
                    <v-flex xs12 class="title" mb-3>
                      Overview
                    </v-flex>
                    <v-flex xs12 class="body-1 mb-4">
                      {{overview}}
                    </v-flex>
                </v-layout>

                  <v-layout row wrap mb-4>
                    <v-flex xs12 class="title">
                      Session plan
                    </v-flex>
                    <v-flex v-for="(content,index) in sessionplan" :key="index">
                        <v-flex xs12 sm5 mt-1>
                            {{content.topic}}
                        </v-flex>
                        <v-flex xs10 offset-xs2 sm7 offset-sm0>
                            {{content.date}}
                        </v-flex>
                    </v-flex> 
                  </v-layout>

              
                <v-layout row wrap mb-4>
                  <v-flex xs12 class="title">
                      Date &amp; Duration
                    </v-flex>
                    <v-flex xs12 offset-xs1 v-for="(content,index) in dateduration" :key="index">
                      {{content.topic}}
                    </v-flex>
                    
                </v-layout>

              
                <v-layout row wrap mb-4>
                  <v-flex xs12 class="title">
                      Fee details
                    </v-flex>
                    <v-flex xs12 offset-xs1 v-for="(content,index) in feedetails" :key="index">
                      {{content.topic}}
                    </v-flex>                    
                </v-layout>


                <v-layout row wrap mb-4>
                  <v-flex xs12 class="title">
                      Other details
                    </v-flex>
                    <v-flex xs12 offset-xs1 v-for="(content,index) in otherdetails" :key="index">
                      {{content.topic}}
                    </v-flex>
                </v-layout>
              
                <!-- <v-layout row wrap mb-4>
                  <v-flex xs12 class="title">Date</v-flex>
                  <v-flex xs12 offset-xs1>
                      {{startdate}}
                    </v-flex>
                </v-layout>

                <v-layout row wrap mb-4>
                  <v-flex xs12 class="title">Time</v-flex>
                  <v-flex xs12 offset-xs1>
                      {{starttime}}
                    </v-flex>
                </v-layout> -->

              <div style="text-align: center;">
                <v-btn color="primary" @click="register()">Register</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
    layout: "frontoffice",
    
    data(){
        return {
            id : null,
            title : null,
            overview : null,
            sessionplan : null,
            dateduration : null,
            feedetails : null,
            otherdetails : null,
            startdate : null,
            starttime : null,
            imagepath : null,
            registerPath : null
        }
    },   
    methods :{
        register(){
            console.log("in register");
            this.$router.push(this.registerPath);
        }
    },
    created(){
        console.log("in frontend workshop created");
        this.id = this.$route.params.id;
        var apiUrl = "/frontoffice/workshop/particularWorkshop";
        this.$axios.$get(apiUrl+"?id="+this.id).then((res) =>{
            console.log("res sucess ");
            var content = res;
            if(content.response == "success"){
                console.log("response success data ",content.data);
                this.title = content.data.title;
                this.overview = content.data.overview;
                this.sessionplan = content.data.sessionplan;
                this.dateduration = content.data.dateduration;
                this.feedetails = content.data.feedetails;
                this.otherdetails = content.data.otherdetails;
                this.startdate = content.data.startdate;
                this.starttime = content.data.starttime;
                this.imagepath = content.data.imagepath;
                this.registerPath = content.data.registerPath;
                
                var properData = {
                  id : this.id,
                  name :  "workshop name",
                  title : this.title,
                };

                this.$store.dispatch("setAWorkshop",properData);
            }
            else{
                console.log("response error data ",content.data);
            } 
        }).catch((err) => {
            console.log("res err ",err);
        });   
    },
  head: {
    title: "IICLUB - Workshop - Details"
  }
}
</script>

<style>
    #workshop_description .toolbar-custom .toolbar__content{
        justify-content: center;
    }
  #workshop_description .media{
    height: 100%;
    margin: 0;
  }
</style>