<template>
  <div>
    <!-- <viewworkshop /> -->
    <h2>head: {{project}}</h2>  
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-list three-line>
                <template v-for="(content,index) in dataItem" >
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            <v-list-tile-title v-html="'Title - '+content.name"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="'Level - '+content.level"></v-list-tile-sub-title>
                            <div class="text-xs-center">
                                <v-btn color="Primary" @click="triggerEdit(content._id)">Edit / Delete</v-btn>
                                <span v-if="!content.path"> 
                                <v-btn color="Primary" @click="addImage(content._id)">Add Image</v-btn>
                                </span>
                            </div>
                            <v-divider/>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-card>
        </v-flex>
    </v-layout>  
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "backoffice",
data(){
        return{
            project : "in data" ,
            dataItem : null 
        }
    },
  asyncData (context) {
        console.log("in async data begin");
        var baseurl = "/backoffice/training/view";
        return context.app.$axios.$get(baseurl).then((res) =>{
            console.log("res sucess ");
            var content = res;
            if(content.response == "success"){
                console.log("response success data ",content.data);
                return {
                    dataItem : content.data
                }  
            }
            else{
                console.log("response error data ",content.data);
            }
        }).catch((err) => {
            console.log("res err ",err);
        });
    }, 
    methods:{
        triggerEdit(id){
            console.log( " triggerEdit id ",id); 
            this.$router.push("/backofficelemon/training/edittraining/"+id);
        },
        addImage(id){
            console.log( " addImage id ",id); 
            this.$router.push("/backofficelemon/training/addimage/"+id);
        }
    }
}
</script>


<style>

</style>
