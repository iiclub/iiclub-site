<template>
  <div id="training_registration">
    <!-- <h3>{{$store.getters.getWorkshop}}</h3> -->
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
          <v-card color="green">
            <v-toolbar color="indigo" class="toolbar-custom">
              <v-toolbar-title>Workshop Registration</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <!-- <h1 class="title">Search for new keywords using a phrase, website or category</h1>
              <h2 class="subheading mb-5">Enter one or more of the following</h2> -->
              <v-text-field
                label="Your Name"
                v-model="username"
                persistent-hint
                prepend-icon="perm_identity"
                required
              ></v-text-field>
              <!-- value="3D printing training" -->
              <v-text-field
                label="CourseID"
                v-model="workshopname"
                persistent-hint
                disabled
                prepend-icon="book"
                required
              ></v-text-field>
              <!-- value="What is this workshop about? 3D Printing is an Additive Manufacturing technique that creates a physical object from a virtual 3D CAD model by depositing successive layers of material. They work like the traditional inkjet printers, but instead of ink, a 3D printer deposits desired material to manufacture an object.What is this workshop about? 3D Printing is an Additive Manufacturing technique that creates a physical object from a virtual 3D CAD model by depositing successive layers of material. They work like the traditional inkjet printers, but instead of ink, a 3D printer deposits desired material to manufacture an object ." -->
              <v-text-field
                label="Course Title"
                v-model="title"
                persistent-hint
                disabled
                prepend-icon="book"
                name="input-7-5"
                class="input-group--focused"
                auto-grow 
                multi-line
                required
                dark
              ></v-text-field>
              <v-select
                label="Occupation"
                persistent-hint
                :items="options"
                v-model="select"
                prepend-icon="work"
                required
              ></v-select>

              <v-text-field
              
              label="Email address"
              :rules="emailRules"
              prepend-icon="email"
              v-model="email"
              persistent-hint
              required
            ></v-text-field>
            <v-text-field
              name="input-3-3"
              label="Phone number"
              prepend-icon="phone"
              single-line
              :mask="mask" v-model="value"
              required
            ></v-text-field>

            <v-flex xs12 >
                  <v-dialog
                    persistent
                    v-model="modal"
                    lazy
                    full-width
                    width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      label="Date of Birth"
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
                  <br/>
            </v-flex> 
            <v-flex xs12 class="custom-submit">
              <v-btn
                color="info"
                :loading="loading4"
                @click="register1()"
                :disabled="loading4"
              >Submit Registration
                <span slot="loader" class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
              </v-btn>
             </v-flex>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Dialogbox :dialogstatus="dialogstatus" :errorMessages="errorMessages" :redirect="redirectDialog" @changedDialogstatus="changedDialogstatus($event)"/>
  </div>
</template>

<script>

import Dialogbox from '@/components/common/Dialogbox.vue';
export default {
  layout: "frontoffice",
  components:{
    Dialogbox
  },
  data () {
    return {
      redirectDialog : "no",
      id : null,
      workshopname: null,
      title : null,
      username : null,
      date: null,
      menu: false,
      modal: false,
      mask: '##########',
      value : null,
      email : "",
      emailRules: [
        v => {
          return !!v || 'E-mail is required'
        },
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      select: [],
      options: [
        {
          value: "Student",
          text: 'Student'
        },
        {
          value: "Working",
          text: 'Working'
        }
      ],
      loader: null,
      loading: false,
      loading4: false,
      dialogstatus: false,
      errorMessages : null
    }
  },
  watch: {
    loader () {
      const l = this.loader;
      this[l] = !this[l];
      this.loader = null
    }
  },
  methods:{
    changedDialogstatus(content){
      console.log("content-- ",content);
      this.dialogstatus = content;
      //this.errorMessages = null;
      if(!content){
        this.errorMessages = null;
      }
    },
    register(){
      console.log("in register1");
      //this.$store.dispatch("setASnackbar", !this.$store.getters.getSnackbar);
    },
    register1(){
      this.loader = 'loading4';

       var apiUrl = "/frontoffice/workshop/register";
        var dataInput = {
          id : this.id,
          occupation : this.select,
          emailid : this.email,
          phone : this.value,
          dateofbirth : this.date,
          username : this.username
        };
        console.log("dataInput ",dataInput);
        var self= this;
        this.$axios.$post(apiUrl,dataInput).then((res) =>{
            this.loading4 = false;
            console.log("res sucess ");
            var content = res;
            if(content.response == "success"){
                console.log("response success data ");
                //this.$store.dispatch("setASnackbar", true);
                //this.$store.dispatch("setASnackbarText", "email");
                this.dialogstatus =true;
                this.errorMessages = ["We will drop you an email in sometime"];
                //self.$router.push("/");
                this.redirectDialog = "yes";
            } 
            else if(content.response == "error"){
              console.log("response error data ",content.data);
              this.dialogstatus =true;
              this.errorMessages = content.data;
              this.redirectDialog = "no";
              console.log("response validationerror data ",content.data);
            }
            else if(content.response == "validationerror"){
              this.dialogstatus =true;
              this.errorMessages = content.data;
              this.redirectDialog = "no";
              console.log("response validationerror data ",content.data);
            } 

        }).catch((err) => {
            this.loading4 = false;
            console.log("res err ",err);
        });    
    }
  },
  created(){
    console.log("created workshop register ");
     this.id = this.$route.params.id;
        var apiUrl = "/frontoffice/workshop/particularWorkshop";
        this.$axios.$get(apiUrl+"?id="+this.id).then((res) =>{
            console.log("res sucess ");
            var content = res;
            if(content.response == "success"){
                console.log("response success data ",content.data);
                this.workshopname = content.data.title;
                this.title = content.data.overview;
            }
            else{
                console.log("response error data ",content.data);
            } 
        }).catch((err) => {
            console.log("res err ",err);
        });   
  },
  head: {
    title: "IICLUB - Workshop - Registration"
  }
}
</script>


<style>
  #training_registration .custom-submit{
    text-align: center;
  }

  #training_registration .toolbar-custom .toolbar__content{
    justify-content: center;
  }

  #training_registration .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
