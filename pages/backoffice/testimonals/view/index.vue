<template>
  <div>
      modify testimonals

      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-list three-line>
                <template v-for="(content,index) in dataItem" >
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            <v-list-tile-title v-html="'path - '+content.path"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="'active - '+content.active"></v-list-tile-sub-title> 
                            <div class="text-xs-center">
                                <v-btn color="Primary" @click="triggerEdit(content._id)">Edit / Delete</v-btn>
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
import axios from 'axios';

export default {
    layout: "backoffice",
    data(){
        return{
            dataItem : null 
        }
    },
    asyncData (context) {
        console.log("in async data begin testimonal");
        var baseurl = "http://localhost:3000/backoffice/testimonal/viewimage";
        return axios.get(baseurl).then((res) =>{
            console.log("res sucess ");
            var content = res.data;
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
    methods : {
        triggerEdit(id){
            console.log( " triggerEdit id ",id); 
            this.$router.push("/backoffice/testimonals/edit/"+id);
        }
    }
}
</script>



/* "/backoffice/carousal/viewimage" */