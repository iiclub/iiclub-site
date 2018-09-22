<template>
  <div>
      modify carousal

      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-list three-line>
                <template v-for="(content,index) in dataItem" >
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            <v-list-tile-title v-html="'path - '+content.path"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="'active - '+content.active+ '  redirectPath - '+content.redirectPath"></v-list-tile-sub-title> 
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

export default {
    layout: "backoffice",
    data(){
        return{
            dataItem : null ,
            backofficelemon : "backofficelemon"
        }
    },
    asyncData (context) {
        console.log("in async data begin");
        var baseurl = "/backoffice/carousal/viewimage";
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
    methods : {
        triggerEdit(id){
            console.log( " triggerEdit id ",id); 
            this.$router.push("/backofficelemon/carousal/edit/"+id);
        }
    }
}
</script>



/* "/backoffice/carousal/viewimage" */