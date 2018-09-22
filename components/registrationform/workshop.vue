<template>
  <div id="workshop_registration">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
          <v-card color="purple">
            <v-toolbar color="pink" class="toolbar-custom">
              <v-toolbar-title>Workshop Registration</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <!-- <h1 class="title">Search for new keywords using a phrase, website or category</h1>
              <h2 class="subheading mb-5">Enter one or more of the following</h2> -->
              <v-text-field
                label="Your Name"
                value=""
                persistent-hint
                prepend-icon="perm_identity"
                required
              ></v-text-field>
              <v-text-field
                label="WorkshopID"
                value="IOT workshop"
                persistent-hint
                disabled
                prepend-icon="book"
                required
              ></v-text-field>
              <v-text-field
                label="Workshop Title"
                value="This is a great way to being IOT by using the very popular Arduino board. By doing this IoT workshop students will learn to develop an electronic device that can sense the temperature.This is a great way to being IOT by using the very popular Arduino board. By doing this IoT workshop students will learn to develop an electronic device that can sense the temperature.This is a great way to being IOT by using the very popular Arduino board. By doing this IoT workshop students will learn to develop an electronic device that can sense the temperature"
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
    </v-flex>



            <v-flex xs12 class="custom-submit">
              <v-btn
                color="info"
                :loading="loading4"
                @click.native="loader = 'loading4'"
                :disabled="loading4"
              >
                Submit
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
  </div>
</template>


<script>
  export default {
    data () {
      return {
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
            value: 1,
            text: 'Student'
          },
          {
            value: 2,
            text: 'Working'
          }
        ],
        loader: null,
        loading: false,
        loading4: false,
      }
    },
    
    watch: {
      loader () {
        const l = this.loader
        console.log("this " ,this);
        console.log("l ",l);
        
        console.log("1 this[l] ",this[l]);
        this[l] = !this[l]
        console.log("2 this[l] ",this[l]);
        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }
</script>

<style>
#workshop_registration .custom-submit{
  text-align: center;
}

#workshop_registration .toolbar-custom .toolbar__content{
  justify-content: center;
}

#workshop_registration .custom-loader {
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
