<template>
  <v-layout>
    <v-flex xs12 sm4 offset-sm4 >
      <v-card light  v-for="(item,index) in items" :key="index" style="margin-top: 20px;">
        <v-card-media :src="item.imgsrc" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}}</h3>
            <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" @click="details(item.path)">Details</v-btn>
          <v-btn flat color="orange">Share</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props : ["items"],
    methods :{
      details(path){
        console.log("in details: path ",path);
        this.$router.push(path);
      }
    }
  }
</script>