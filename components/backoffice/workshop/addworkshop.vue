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
                <v-subheader class="grey--text text--lighten-1">Select image to upload</v-subheader>
            </v-flex>
            <v-flex xs8>
                <input type="file" name="fileToUpload[]" id="fileToUpload" multiple>
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
        <v-layout row v-if=" id !=null">
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
                <v-btn flat @click="reset()" row v-if=" id ==null">Reset</v-btn>
                <v-btn color="blue lighten-4" flat @click="insert()">Insert Workshop</v-btn>
                <v-btn color="green lighten-4" flat @click="test()">Test</v-btn>
            </v-flex>
        </v-layout>
        </v-container>
    </v-card-actions>

</v-card>
</template>


<script>

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
            date: null,
            menu: false,
            modal: false,
            time: null,
            menu2: false,
            modal2: false
        }
    },
    methods:{
        test(){
            console.log("in test()");
            console.log("date ",this.date);
            console.log("time ",this.time);

        },
        insert(){
            console.log("in submit active " , this.active);
            var self = this;
            var formData = new FormData();
            var imagefile = document.querySelector('#fileToUpload');
            for(var i=0;i<imagefile.files.length;i++) {
                console.log("index ",i);
                formData.append("myimage", imagefile.files[i]);  
            } 

            formData.append("title", this.title);
            formData.append("overview", this.overview);
            
            console.log("fe:sessionplan ", JSON.stringify(this.sessionplan));

            formData.append("sessionplan", JSON.stringify(this.sessionplan));
            formData.append("dateduration",  JSON.stringify(this.dateduration));
            formData.append("feedetails",  JSON.stringify(this.feedetails));
            formData.append("otherdetails",  JSON.stringify(this.otherdetails));
            formData.append("active",  JSON.stringify(this.active));
            formData.append("date",  this.date);
            formData.append("time",  this.time);

            console.log("this.sessionplan ", JSON.stringify(this.sessionplan));
            
            var contentType = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };

            this.$axios.$post("/backoffice/workshop/add", formData,contentType)
            .then(function (response) {
                console.log(response);
                self.$router.push("/backofficelemon/workshop/viewworkshop");
            })
            .catch(function (error) {
                console.log(error);
            });  

        },
        reset(){
            this.title = null;
            this.overview = null;
            this.sessionplan= [];
            this.dateduration= [];
            this.feedetails =[];
            this.otherdetails =[];
            this.active = false;
            this.date = null;
            this.time = null;

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
            this.$axios.$get("/backoffice/workshop/delete?id="+this.id).then((res) =>{
                console.log("res sucess ");
                var content = res;
                if(content.response == "success"){
                    console.log("response success data ",content.data);
                    
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
    }
}
</script>
<style>
.sessionplan{
    outline: 2px solid yellow;
}
.sessionplan:focus{
    outline: green;
    border: 2px solid red;
}
</style>
