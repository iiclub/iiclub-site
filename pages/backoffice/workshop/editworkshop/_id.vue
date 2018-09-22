<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">Title</v-subheader>
            </v-flex>
            <v-flex xs8>
                <v-text-field
                    name="workshop-title"
                    label="Enter Title"
                    single-line
                    dark
                    v-model="title"
                ></v-text-field>
            </v-flex>
        </v-layout>
        <hr>
        <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">Overview</v-subheader>
            </v-flex>
            <v-flex xs8>
                <v-text-field
                name="workshop-overview"
                label="Enter workshop overview"
                multi-line
                dark
                v-model="overview"
                ></v-text-field>
            </v-flex>
        </v-layout>
        <hr>
        <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">
                    Session Plan
                    <v-btn @click="addsession()" color="primary">Add</v-btn>
                </v-subheader>
            </v-flex>
            <v-flex xs8>
                <div v-for="(content,key) in sessionplan" :key="key">
                     <fieldset style="padding: 3%;">
                        <legend>SessionPlan {{key+1}}</legend>
                        <v-text-field
                            label="Enter Topic"
                            v-model="content.topic"
                            required
                        ></v-text-field>
                        <v-text-field
                            label="Enter Date"
                            v-model="content.date"
                            required
                        ></v-text-field>
                        <v-btn color="error" dark  @click="deletesession(key)">Delete</v-btn>
                    </fieldset>
                </div>
            </v-flex>
        </v-layout>
        <hr>
        <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">Date &amp; Duration
                    <v-btn @click="adddate()" color="primary">Add</v-btn>
                </v-subheader>
            </v-flex>
            <v-flex xs8>
                <div v-for="(content,key) in dateduration" :key="key">
                    <fieldset style="padding: 3%;">
                        <legend>Date &amp; Duration {{key+1}}</legend>
                        <v-text-field
                            label="Enter Topic"
                            v-model="content.topic"
                            required
                        ></v-text-field>
                        <v-btn color="error" dark  @click="deletedate(key)">Delete</v-btn>
                    </fieldset>
                </div>
            </v-flex>
        </v-layout>
        <hr>
        <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">Fee Details
                    <v-btn @click="addfeedetails()" color="primary">Add</v-btn>
                </v-subheader>
            </v-flex>
            <v-flex xs8>
                <div v-for="(content,key) in feedetails" :key="key">
                    <fieldset style="padding: 3%;">
                        <legend>Fee Details {{key+1}}</legend>
                        <v-text-field
                            label="Enter Topic"
                            v-model="content.topic"
                            required
                        ></v-text-field>
                        <v-btn color="error" dark  @click="deletefeedetails(key)">Delete</v-btn>
                    </fieldset>
                </div>
            </v-flex>
        </v-layout>
        <hr>

        <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">Other Details
                    <v-btn @click="addotherdetails()" color="primary">Add</v-btn>
                </v-subheader>
            </v-flex>
            <v-flex xs8>
                <div v-for="(content,key) in otherdetails" :key="key">
                    <fieldset style="padding: 3%;">
                        <legend>Other Details {{key+1}}</legend>
                        <v-text-field
                            label="Enter Topic"
                            v-model="content.topic"
                            required
                        ></v-text-field>
                        <v-btn color="error" dark  @click="deleteotherdetails(key)">Delete</v-btn>
                    </fieldset>
                </div>
            </v-flex>
        </v-layout>
        <hr>

        <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">Workshop start date
                </v-subheader>
            </v-flex>
            <v-flex xs8>
                 <v-dialog
                    persistent
                    v-model="modal"
                    lazy
                    full-width
                    width="290px"
                >
                    <v-text-field
                    slot="activator"
                    label="Picker in dialog"
                    v-model="date"
                    prepend-icon="event"
                    readonly
                    ></v-text-field>
                    <v-date-picker v-model="date" scrollable actions>
                    <template slot-scope="{ save, cancel }">
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                        </v-card-actions>
                    </template>
                    </v-date-picker>
                </v-dialog>
            </v-flex>
        </v-layout>
        <hr>
        <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">Workshop start time
                </v-subheader>
            </v-flex>
            <v-flex xs8>
                 <v-dialog
                    persistent
                    v-model="modal2"
                    lazy
                    full-width
                    width="290px"
                >
                    <v-text-field
                    slot="activator"
                    label="Picker in dialog"
                    v-model="time"
                    prepend-icon="access_time"
                    readonly
                    ></v-text-field>
                    <v-time-picker v-model="time" actions>
                    <template slot-scope="{ save, cancel }">
                        <v-card-actions>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">Save</v-btn>
                        </v-card-actions>
                    </template>
                    </v-time-picker>
                </v-dialog>
            </v-flex>
        </v-layout>
        <hr>
        <v-layout row>
            <v-flex xs4>
                <v-subheader class="grey--text text--lighten-1">
                    active
                </v-subheader>
            </v-flex>
            <v-flex xs8>
                <div>
                    <input type="radio" name="workshop" value="true" v-model="active" > True<br />
                    <input type="radio" name="workshop" value="false" v-model="active"> False<br />
                </div>
            </v-flex>
        </v-layout>
        <hr>
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
        <hr>
        <v-layout row >
            <v-flex xs4>
                <v-btn color="red" dark  @click="deletethis()">Delete this workshop</v-btn>
            </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
        <v-container fluid>
        <v-layout row>
            <v-flex xs4></v-flex>
            <v-flex xs8>
                <v-btn color="blue lighten-4" flat @click="update()">Update</v-btn>
                <v-btn color="green lighten-4" flat @click="test()">Test</v-btn>
            </v-flex>
        </v-layout>
        </v-container>
    </v-card-actions>

</v-card>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            title : "",
            overview : "",
            sessionplan : [],
            dateduration : [],
            feedetails:[],
            otherdetails:[],
            active : "false",
            id : null,
            imagesList : "",

            date: null,
            menu: false,
            modal: false,

            time: null,
            menu2: false,
            modal2: false,

            activeListpage : false,
            activeDetailspage : false
        }
    },
    methods:{
        update(){
            var self = this;
            var dataContent = {
                title : this.title,
                overview : this.overview,
                sessionplan : this.sessionplan,
                dateduration : this.dateduration,
                feedetails : this.feedetails,
                otherdetails : this.otherdetails,
                active : this.active,
                id : this.id,
                imagesList : this.imagesList,
                date : this.date,
                time : this.time,
            };
            axios.post("/backoffice/workshop/edit",dataContent )
            .then(function (response) {
                console.log(response);
                self.$router.push("/backoffice/workshop/viewworkshop");
            })
            .catch(function (error) {
                console.log(error);
            });  
        },
        addsession(){
            var length =  this.sessionplan.length;
            var data = {topic : "",date : ""};
            this.sessionplan.push(data);
        },
        deletesession(key){
            console.log("key-",key ,"-this.sessionplan-",this.sessionplan);

            this.sessionplan.splice(key,1);
        },
        adddate(){
            var data = {topic : ""};
            this.dateduration.push(data);
        },
        deletedate(key){
            console.log("key-",key ,"-this.dateduration-",this.dateduration);
            this.dateduration.splice(key,1);
        },
        addfeedetails(){
            var data = {topic : ""};
            this.feedetails.push(data);
        },
        deletefeedetails(key){
            console.log("key-",key ,"-this.feedetails-",this.feedetails);
            this.feedetails.splice(key,1);
        },
        addotherdetails(){
            var data = {topic : ""};
            this.otherdetails.push(data);
        },
        deleteotherdetails(key){
            console.log("key-",key ,"-this.otherdetails-",this.otherdetails);
            this.otherdetails.splice(key,1);
        },
        deletethis(){
            console.log("in delete() this.id ",this.id);
            var self = this;
            axios.get("/backoffice/workshop/delete?id="+this.id).then((res) =>{
                console.log("res sucess ");
                var content = res.data;
                if(content.response == "success"){
                    console.log("response success data ",content.data);
                    self.$router.push("/backoffice/workshop/viewworkshop");
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
            axios.get("/backoffice/workshop/deleteimage?id="+this.id+"&imageid="+imageId).then((res) =>{
                console.log("res sucess ");
                var content = res.data;
                if(content.response == "success"){
                    console.log("response success data ",content.data);
                    self.$router.push("/backoffice/workshop/viewworkshop");
                    
                }
                else{
                    console.log("response error data ",content.data);
                }
            }).catch((err) => {
                console.log("res err ",err);
            });  
        },
        formatDate (date) {
            if (!date) {
               return null
            }
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        parseDate (date) {
            if (!date) {
                return null
            }
            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        }
    },
    layout: "backoffice",
    created(){
        console.log("in editworkshop created");

        this.id = this.$route.params.id;
        var apiUrl = "/backoffice/workshop/edit";

        axios.get(apiUrl+"?id="+this.id).then((res) =>{

            console.log("res sucess ");
            var content = res.data;
            if(content.response == "success"){
                console.log("response success data ",content.data);
                 this.title = content.data.title;
                this.overview = content.data.overview;
                this.sessionplan = content.data.sessionplan;
                this.dateduration = content.data.dateduration;
                this.feedetails = content.data.feedetails;
                this.otherdetails = content.data.otherdetails;
                this.active = content.data.active;
                this.imagesList = content.data.images;
                this.time = content.data.starttime;
                this.date = content.data.startdate; 
                
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

<style>

</style>
