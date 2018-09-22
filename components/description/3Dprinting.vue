<template>
  <div id="threeDPrint_description">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
          <v-card color="blue-grey lighten-2">
            <v-toolbar color="green accent-4" class="toolbar-custom">
              <v-toolbar-title>3D Printing Details</v-toolbar-title>
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
                      Topic
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Topic1
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Topic2
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Topic3
                    </v-flex>
                  </v-layout>
              
                <h1 class="title">Kit contents</h1>
                <v-layout row wrap mb-4>
                    <v-flex xs12 offset-xs1 >
                      Screw driver
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Arduino device
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Multimeter
                    </v-flex>
                </v-layout>

              <h1 class="title">Duration</h1>
                <v-layout row wrap mb-4>
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

                <h1 class="title">Final Condition</h1>
                <v-layout row wrap mb-4>
                    <v-flex xs12 offset-xs1 >
                      Come on time
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      No free food
                    </v-flex>
                    <v-flex xs12 offset-xs1 >
                      Bring laptop and Charger
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
      items: [
          {
            value: true,
            name: 'Frozen Yogurt',
            calories: "sdfsdfsdfgsdgsgfg159"
          },
          {
            value: true,
            name: 'Ice cream sandwich',
            calories: 237
          },
          {
            value: true,
            name: 'Eclair',
            calories: 262
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305
          }
        ]
    }
  },
  methods :{
    register(){
      console.log("in register");
      this.$router.push("/training/3dprinting/register");
    }
  }
}
</script>



<style>
#threeDPrint_description .toolbar-custom .toolbar__content{
  justify-content: center;
}

</style>
