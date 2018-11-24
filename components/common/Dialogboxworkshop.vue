<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">
            {{redirectheader}}
            
          </span>
        </v-card-title>
            <v-card-text v-for="(errorMessage,index) in errorMessages" :key="index">
                {{errorMessage}}
            </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.prevent="clickTrigger()">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    props : ["dialogstatus","errorMessages","redirect"],
    data () {
      return {
        dialog: false
      }
    },
    computed:{
      redirectheader(){
        if(this.redirect =="yes"){
          return  "You are registered";
        } else{
          return  "Enter valid details";
        }
      }
    },
    watch:{
        dialogstatus(newdata,old){
            this.dialog = this.dialogstatus;
        },
        dialog(){
            console.log("dialog ",this.dialog);
            
        }
    },
    methods:{
      clickTrigger(){
        console.log("click trigger");
        this.dialog = false;
        this.$emit("changedDialogstatus",this.dialog);
        if(this.redirect =="yes"){
          console.log("yes in");
          this.$router.push("/");
        } else{
          console.log("no in");
        }
      }
    }
  }
</script>