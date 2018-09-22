<template>
  <div>
    <v-layout row>
        <v-flex xs4>
            <v-subheader class="grey--text text--lighten-1">Select image to upload 
                <input type="file" name="fileToUpload[]" id="fileToUpload" multiple>
            </v-subheader>
        </v-flex>
    </v-layout>
    <div>
        <v-btn color="blue" @click="uploadImage()">Upload Image</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    layout: "backoffice",
    data(){
        return{
            id : null
        }
    },
    methods : {
        uploadImage(){
            console.log("in uploadImage this.id ",this.id);
            var self = this;

            var formData = new FormData();
            var imagefile = document.querySelector('#fileToUpload');
            for(var i=0;i<imagefile.files.length;i++) {
                console.log("index ",i);
                formData.append("myimage", imagefile.files[i]);  
            } 
            formData.append("id", this.id);
            var contentType = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            axios.post("/backoffice/workshop/uploadImage", formData,contentType)
            .then(function(response) {
                console.log("success ", response);
                self.$router.push("/backoffice/workshop/viewworkshop");
            }).catch(function (error) {
                console.log("error ", error);
            });  
        }
    },
    created(){
        console.log("in created hook addimage");
        this.id = this.$route.params.id;
        console.log("this id ",this.id);
    }
}
</script>

<style>

</style>
