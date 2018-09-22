<template>
  <div
    id="e3"
    style="max-width: auto; margin: auto;"
    
  >
  <!-- class="grey lighten-3" -->
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-xl
    > 
      <v-layout row wrap> 
        <v-flex xs12 sm6 md4 lg3 v-for="(item,index) in items" :key="index">
          <v-card color="blue-grey darken-2" class="white--text" :img="item.imgsrc">
            <v-card-title primary-title>
              <div class="headline">{{item.title}}</div>
              <!-- <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div> -->
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark  @click="details(item.path)" >Details</v-btn>
              <v-btn flat dark>SHARE</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
       </v-layout>
      <!--  {{$router}} --><!-- {{$route.fullPath}} -->
    </v-container> 
  </div>
</template>

<script>
export default {
  props: ["items"],
  methods :{
    details(path){
      console.log("in details: path ",path);
      this.$router.push(path);
    }
  }
}
</script>
