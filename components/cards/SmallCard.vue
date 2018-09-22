<template>
    <div
        id="e3"
        style="max-width: 500px; margin: auto;"
        ><!-- class="grey lighten-3" -->
    <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg >
        <v-layout row wrap >
            <v-flex  sm12 xs12 v-for="(item,index) in items" :key="index">
                <v-card  height="250" :img="item.imgsrc" color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                    <div class="headline">{{item.title}}</div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat dark @click="details(item.path)" >Details</v-btn>
                    <v-btn flat dark>Share</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
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
