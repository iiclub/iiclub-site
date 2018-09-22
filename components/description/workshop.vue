<template>
  <div id="workshop_description">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
          <v-card color="green">
            <v-toolbar color="indigo" class="toolbar-custom">
              <v-toolbar-title>Details</v-toolbar-title>
            </v-toolbar>
            <v-card-text>

              <v-layout row wrap mb-2 class="text-xs-center">
                    <v-flex xs12 class="title" mb-3>
                      Overview
                    </v-flex>
                    <v-flex xs12 class="body-1 mb-4">
                      What is this workshop about? 3D Printing is an Additive Manufacturing technique that creates a physical object from a virtual 3D CAD model by depositing successive layers of material. They work like the traditional inkjet printers, but instead of ink, a 3D printer deposits desired material to manufacture an object 
                    </v-flex>
                </v-layout>

                  <v-layout row wrap mb-4>
                    <v-flex xs12 class="title">
                      Session plan
                    </v-flex>
                    <v-flex xs12 sm5 mt-1>
                      Left1
                    </v-flex>
                    <v-flex xs10 offset-xs2 sm7 offset-sm0>
                      right1
                    </v-flex>
                    <v-flex xs12 sm5 mt-1>
                      Left2
                    </v-flex>
                    <v-flex xs10 offset-xs2 sm7 offset-sm0>
                      right2
                    </v-flex>
                  </v-layout>

              
                <v-layout row wrap mb-4>
                  <v-flex xs12 class="title">
                      Date &amp; Duration
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      9 to 10
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      11 to 12
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      2 to 4
                    </v-flex>
                </v-layout>

              
                <v-layout row wrap mb-4>
                  <v-flex xs12 class="title">
                      Fee details
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Fee1
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Fee2
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Fee3
                    </v-flex>
                </v-layout>


                <v-layout row wrap mb-4>
                  <v-flex xs12 class="title">
                      Other details11
                    </v-flex>

                    <v-flex xs12 offset-xs1 >
                      Other details1
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                     Other details2
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Other details3
                    </v-flex>
                </v-layout>
              
              <div style="text-align: center;">
                <v-btn color="primary" @click="register()">Register</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items: []
    }
  },
  methods :{
    register(){
      console.log("in register");
      this.$router.push("register");
    }
  }
}
</script>



<style>
#workshop_description .toolbar-custom .toolbar__content{
  justify-content: center;
}

</style>
