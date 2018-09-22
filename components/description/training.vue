<template>
  <div id="threeDPrint_description">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
          <v-card color="blue-grey lighten-2">
            
            <!-- <v-card-media v-if="reqcontent.images !=null " :src="reqcontent.images[0].path" height="300px"> -->


              <v-card-media  :src="reqcontent.imagesrc" height="300px">
              
              <v-layout column class="media">
                <v-card-title class="white--text pl-5 pt-5">
                  <div class="display-1 pl-5 pt-5">{{reqcontent.name}}</div>
                </v-card-title>
              </v-layout>
            </v-card-media>

            <!-- <v-toolbar color="green accent-4" class="toolbar-custom">
              <v-toolbar-title>{{reqcontent.name}}</v-toolbar-title>
            </v-toolbar>-->
            <v-card-text> 

                <v-layout row wrap mb-2 class="text-xs-center">
                    <v-flex xs12 class="title" mb-3>
                      Overview
                    </v-flex>
                    <v-flex xs12 class="body-1 mb-4">
                      {{reqcontent.overview}}
                    </v-flex>
                </v-layout>
              
              
                  <v-layout row wrap mb-4>
                    <v-flex xs12 class="title">
                      Topic
                    </v-flex>
                    <v-flex xs12 offset-xs1 v-for="(topic,key) in reqcontent.topic" :key="key">
                     {{topic.topic}}
                    </v-flex>
                  </v-layout>
              
                <h1 class="title">Kit contents</h1>
                <v-layout row wrap mb-4>
                    <v-flex xs12 offset-xs1 v-for="(kit,key) in reqcontent.kitcontents" :key="key">
                     {{kit.topic}}
                    </v-flex>
                </v-layout>

              <h1 class="title">Duration</h1>
                <v-layout row wrap mb-4>
                    <v-flex xs12 offset-xs1 v-for="(dura,key) in reqcontent.duration" :key="key">
                      {{dura.topic}}
                    </v-flex>
                </v-layout>

                <h1 class="title">Final Condition</h1>
                <v-layout row wrap mb-4>
                    <v-flex xs12 offset-xs1  v-for="(fc,key) in reqcontent.finalcondition" :key="key">
                      {{fc.topic}}
                    </v-flex>
                    
                </v-layout>

              
              <div style="text-align: center;">
                <v-btn color="primary" @click="register(registerurl)">Register</v-btn>
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
  props : ["urlparam","registerurl"],
  data(){
    return{
      id : null,
      items: [
          {
            value: true,
            name: 'Frozen Yogurt',
            calories: "sdfsdfsdfgsdgsgfg159"
          },
          {
            value: true,
            name: 'Ice cream sandwich',
            calories: 237
          },
          {
            value: true,
            name: 'Eclair',
            calories: 262
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305
          }
        ],
      reqcontent : ""
    }
  },
  methods :{
    register(registerurl){
      console.log("in register");
      this.$router.push(registerurl);
    }
  },
   created(){
        console.log("in training details created");

        this.id = this.urlparam;
        var apiUrl = "/frontoffice/training/details/"+this.id;

        this.$axios.$get(apiUrl).then((res) =>{
            //var content = res.data.data;
            var content = res.data;
            this.reqcontent = content;
            console.log("res sucess content ",content);
        }).catch((err) => {
            console.log("res err ",err);
        });  

    }
}
</script>

<style>
  #threeDPrint_description .toolbar-custom .toolbar__content{
    justify-content: center;
  }
</style>
