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


        <v-card-actions>
          <v-container fluid>
            <v-layout row>
                <v-flex xs4></v-flex>
                <v-flex xs8>
                    <v-btn flat @click="reset()" row >Reset</v-btn>
                    <v-btn color="blue lighten-4" flat @click="insert()">Insert Training</v-btn>
                </v-flex>
            </v-layout>
          </v-container>
        </v-card-actions>


      </v-container>
    </v-card-text>
  </v-card>
</template>



<script>

import axios from "axios";
  export default {
    data () {
      return {
       
        etrainingname : "",
        elevel : "",
        overview : "",
        topic : [],
        kitcontents : [],
        duration : [],
        finalcondition : [],
        levels: [
          { text: 'none' },
          { text: 'level1' },
          { text: 'level2' },
          { text: 'level3' }
        ],
        trainings: [
          { text: 'Robotics' },
          { text: 'Aeromodeling' },
          { text: 'IOT' },
          { text: '3DPRINTING' },
          { text: 'Raspberry PI' },
          { text: 'Arduino' },
          { text: 'Other Courses' },
        ],
      }
    },
    layout: "backoffice",
    methods:{
      test(){
        console.log("test ");
        console.log("e1 ",this.etrainingname.text);
      },
      reset(){
        this.etrainingname = null;
        this.elevel = null;
        this.overview = null;
        this.topic = null;
        this.kitcontents = null;
        this.duration = null;
        this.finalcondition = null;
      },
      insert(){
        console.log("in insert");

        var data = {
          name : this.etrainingname.text,
          level :  this.elevel.text,
          overview : this.overview,
          topic : this.topic,
          kitcontents : this.kitcontents,
          duration : this.duration,
          finalcondition : this.finalcondition
        };  
        console.log("data11 ", data);
         axios.post("/backoffice/training/add", data)
        .then(function (response) {
            console.log(response);
            //self.$router.push("/backoffice/workshop/viewworkshop");
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
    }
  }
</script>