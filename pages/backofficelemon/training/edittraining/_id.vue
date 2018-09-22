<template>
  <v-card color=" lighten-4" flat>
    <v-card-text>
      <v-container fluid>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Training Name</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-select
              v-bind:items="trainings"
              v-model="etrainingname"
             

              label="Select training"
              single-line
              
              bottom
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>LEVEL</v-subheader>
          </v-flex>
          <v-flex xs8>
           <v-select
              v-bind:items="levels"
              v-model="elevel"
              label="Select Level"
              single-line
              bottom
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Overview</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="input-7-1"
              label="Overview"
              v-model="overview"
              multi-line
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Topic
              <v-btn @click="addtopic()" color="primary">Add</v-btn>

            </v-subheader>
          </v-flex>
          <v-flex xs8>
              <div v-for="(content,key) in topic" :key="key">
                     <fieldset style="padding: 3%;">
                        <legend>Topic {{key+1}}</legend>
                        <v-text-field
                            label="Enter Topic"
                            v-model="content.topic"
                            required
                        ></v-text-field>
                        
                        <v-btn color="error" dark  @click="deletetopic(key)">Delete</v-btn>
                    </fieldset>
                </div>
          </v-flex>
        </v-layout>


        <v-layout row>
          <v-flex xs4>
            <v-subheader>Kit contents
              <v-btn @click="addkit()" color="primary">Add</v-btn>

            </v-subheader>
          </v-flex>
          <v-flex xs8>
              <div v-for="(content,key) in kitcontents" :key="key">
                     <fieldset style="padding: 3%;">
                        <legend>kitcontent {{key+1}}</legend>
                        <v-text-field
                            label="Enter Topic"
                            v-model="content.topic"
                            required
                        ></v-text-field>
                        
                        <v-btn color="error" dark  @click="deletekit(key)">Delete</v-btn>
                    </fieldset>
                </div>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs4>
            <v-subheader>Duration
              <v-btn @click="addduration()" color="primary">Add</v-btn>

            </v-subheader>
          </v-flex>
          <v-flex xs8>
              <div v-for="(content,key) in duration" :key="key">
                     <fieldset style="padding: 3%;">
                        <legend>Duration {{key+1}}</legend>
                        <v-text-field
                            label="Enter Topic"
                            v-model="content.topic"
                            required
                        ></v-text-field>
                       
                        <v-btn color="error" dark  @click="deleteduration(key)">Delete</v-btn>
                    </fieldset>
                </div>
          </v-flex>
        </v-layout>


      <v-layout row>
          <v-flex xs4>
            <v-subheader>Final Condition
              <v-btn @click="addfinalcondition()" color="primary">Add</v-btn>

            </v-subheader>
          </v-flex>
          <v-flex xs8>
              <div v-for="(content,key) in finalcondition" :key="key">
                     <fieldset style="padding: 3%;">
                        <legend>Final Condition {{key+1}}</legend>
                        <v-text-field
                            label="Enter Topic"
                            v-model="content.topic"
                            required
                        ></v-text-field>
                       
                        <v-btn color="error" dark  @click="deletefinalcondition(key)">Delete</v-btn>
                    </fieldset>
                </div>
          </v-flex>
        </v-layout>

<hr />
 <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">
                    imagesList
                </v-subheader>
            </v-flex>
            <v-flex xs8>
                <div v-for="(image,index) in imagesList" :key="index">
                    <fieldset style="padding: 3%;">
                        <div>
                            <p>Active</p>
                            <input type="radio" value="true" v-model="image.active" > True<br />
                            <input type="radio" value="false" v-model="image.active"> False<br />
                        </div>
                        <br/>
                        <div>
                            <p>Listpage</p>
                            <input type="radio" value="true" v-model="image.listPage" > True<br />
                            <input type="radio" value="false" v-model="image.listPage"> False<br />
                        </div>
                        <br/>
                        <div>
                            <p>Detailspage</p>
                            <input type="radio" value="true" v-model="image.detailsPage" > True<br />
                            <input type="radio" value="false" v-model="image.detailsPage"> False<br />
                        </div>
                        <br />
                        <div>
                            <a :href="image.path" target="_blank"> 
                                <img :src="image.path" alt="image not found" height="100" width="100" />
                            </a>
                        </div>
                         <br />
                         <v-btn color="red" dark @click="deleteImage(image._id)">Delete image</v-btn>
                    </fieldset>
                </div>
            </v-flex>
        </v-layout>
<hr />

        <v-card-actions>
          <v-container fluid>
            <v-layout row>
                <v-flex xs4></v-flex>
                <v-flex xs8>
                    <v-btn flat @click="test()" row >test</v-btn>
                    <v-btn color="blue lighten-4" flat @click="update()">Update Training</v-btn>
                    <v-btn color="red" dark  @click="deletethis()">Delete this Training</v-btn>
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
        etrainingname : "",
        elevel : "",
        overview : "",
        topic : [],
        kitcontents : [],
        duration : [],
        finalcondition : [],
        /* levels: [
          { text: 'none' },
          { text: 'level1' },
          { text: 'level2' },
          { text: 'level3' }
        ], */
        levels: [
          'none',
          'level1',
          'level2',
          'level3'
        ],
        /* trainings: [
          { text: 'Robotics' },
          { text: 'Aeromodeling' },
          { text: 'IOT' },
          { text: '3DPRINTING' },
          { text: 'Raspberry PI' },
          { text: 'Arduino' },
          { text: 'Other Courses' },
        ], */
        trainings: [
           'Robotics',
           'Aeromodeling',
           'IOT',
           '3DPRINTING',
           'Raspberry PI',
           'Arduino',
           'Other Courses',
        ],
         imagesList : this.imagesList
      }
    },
    layout: "backoffice",
    methods:{
      test(){
        console.log("test ");
        console.log("e1 ",this.etrainingname);
      },
      update(){
        console.log("in update");

        var data = {
          id : this.id,
          name : this.etrainingname,
          level :  this.elevel,
          overview : this.overview,
          topic : this.topic,
          kitcontents : this.kitcontents,
          duration : this.duration,
          finalcondition : this.finalcondition,
          images: this.imagesList
        };  
        console.log("data11 ", data);
        var self = this;
         this.$axios.$post("/backoffice/training/edit", data)
        .then(function (response) {
            console.log(response);
            self.$router.push("/backofficelemon/training/viewtraining");
        })
        .catch(function (error) {
            console.log(error);
        });  
      },
      addtopic(){
        var data = {topic : ""};
        this.topic.push(data);
      },
      addkit(){
        var data = {topic : ""};
        this.kitcontents.push(data);
      },
      addduration(){
        var data = {topic : ""};
        this.duration.push(data);
      },
      addfinalcondition(){
        var data = {topic : ""};
        this.finalcondition.push(data);
      },
      deletetopic(key){
            console.log("key-",key ,"-this.topic-",this.topic);
            this.topic.splice(key,1);
      },
       deletekit(key){
            console.log("key-",key ,"-this.kitcontents-",this.kitcontents);
            this.kitcontents.splice(key,1);
      },
       deleteduration(key){
            console.log("key-",key ,"-this.duration-",this.duration);
            this.duration.splice(key,1);
      },
       deletefinalcondition(key){
            console.log("key-",key ,"-this.finalcondition-",this.finalcondition);
            this.finalcondition.splice(key,1);
      },
      deletethis(){
          console.log("in delete() this.id ",this.id);
            var self = this;
            this.$axios.$get("/backoffice/training/delete?id="+this.id).then((res) =>{
                console.log("res sucess ");
                var content = res;
                if(content.response == "success"){
                    console.log("response success data ",content.data);
                    self.$router.push("/backofficelemon/training/viewtraining");
                }
                else{
                    console.log("response error data ",content.data);
                }
            }).catch((err) => {
                console.log("res err ",err);
            }); 
      },
      deleteImage(imageId){
             var self = this;
            console.log("in deleteImage() this.id ",this.id, " imageId ",imageId);
            this.$axios.$get("/backoffice/training/deleteimage?id="+this.id+"&imageid="+imageId).then((res) =>{
                console.log("res sucess ");
                var content = res;
                if(content.response == "success"){
                    console.log("response success data ",content.data);
                    self.$router.push("/backofficelemon/training/viewtraining");
                    
                }
                else{
                    console.log("response error data ",content.data);
                }
            }).catch((err) => {
                console.log("res err ",err);
            });  
        },
    },
    created(){
        console.log("in editworkshop created");

        this.id = this.$route.params.id;
        var apiUrl = "/backoffice/training/edit";

       this.$axios.$get(apiUrl+"?id="+this.id).then((res) =>{

            console.log("res sucess ");
            var content = res;
            if(content.response == "success"){
                console.log("response success data ",content.data);
                this.etrainingname = content.data.name;
                this.elevel = content.data.level;
                this.overview = content.data.overview;
                this.topic = content.data.topic;
                this.kitcontents = content.data.kitcontents;
                this.duration = content.data.duration;
                this.finalcondition = content.data.finalcondition;
                this.imagesList = content.data.images;
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