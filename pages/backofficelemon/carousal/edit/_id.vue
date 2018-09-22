<template>
  <v-card color=" lighten-4" flat>
    <v-card-text>
      <v-container fluid>
        <h2> IMAGE carousal data</h2>
        <br /><br />

        <v-layout row>
            <v-flex xs4>
                Active
            </v-flex>
            <v-flex xs8>
                <input type="radio" value="true" v-model="imagesList.active" > True<br />
                <input type="radio" value="false" v-model="imagesList.active"> False<br />
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                IMAGE
            </v-flex>
            <v-flex xs8>
                    <a :href="imagesList.path" target="_blank"> 
                        <img :src="imagesList.path" alt="image not found" height="100" width="100" />
                    </a>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs4>
                redirectpath
            </v-flex>
            <v-flex xs8>
                <v-text-field
                        label="redirectpath"
                        v-model="imagesList.redirectPath"
                        required
                ></v-text-field>
            </v-flex>
        </v-layout>

        <v-card-actions>
          <v-container fluid>
            <v-layout row>
                <v-flex xs4></v-flex>
                <v-flex xs8>
                    <v-btn color="blue lighten-4" flat @click="update()">Update Carousal</v-btn>
                    <v-btn color="red" dark  @click="deletethis()">Delete Carousal</v-btn>
                </v-flex>
            </v-layout>
          </v-container>
        </v-card-actions>


      </v-container>
    </v-card-text>
  </v-card>
</template>



<script>

  export default {
    data () {
      return {
        id: null,
        backofficelemon : "/backofficelemon/carousal/view",
        imagesList : {}
      }
    },
    layout: "backoffice",
    methods:{
      update(){
        console.log("in update");
        console.log("imagesList ", this.imagesList); 
        var self = this;
        var apiurl="/backoffice/carousal/update";
        this.$axios.$post(apiurl, this.imagesList)
        .then(function (response) {
            console.log(response);
            self.$router.push(self.backofficelemon);
        })
        .catch(function (error) {
            console.log(error);
        });  
      },
      deletethis(){
            var self = this;
            var apiurl="/backoffice/carousal/delete?id=";
            //var apiurl="http://localhost:3000/backoffice/carousal/delete?id=";
            this.$axios.$get(apiurl+this.imagesList._id)
            .then(function (response) {
                console.log(response);
                self.$router.push(self.backofficelemon);
            })
            .catch(function (error) {
                console.log(error);
            });  
        },
    },
    created(){
        console.log("in edit carousal created");
        this.id = this.$route.params.id;
        var apiUrl = "/backoffice/carousal/editcarousalget";
        this.$axios.$get(apiUrl+"?id="+this.id).then((res) =>{
            var content = res;
            if(content.response == "success"){
                console.log("res sucess ",content.data);
                this.imagesList = content.data;
            }
            else{
                console.log("response error data ",content.data);
            }
        }).catch((err) => {
            console.log("res err ",err);
        });  

    }
  }
</script>