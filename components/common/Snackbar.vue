<template>
  <v-card color="green lighten-4">
    <v-snackbar
      :timeout="timeout"
      :top="y === 'top'"
      :right="x === 'right'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn flat color="pink" @click.native="$store.dispatch('setASnackbar',false)">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    data () {
      return {
        /* snackbar: false, */
        y: 'top',
        x: 'right',
        mode: '',
        timeout: 4000,
        text: 'Registration successful.Check your e-mail for details'
      }
    },
    computed: {
    ...mapGetters({
      snackbar: 'getSnackbar'
    })
    },
    created(){
      console.log("in snackbar : ",this.$store.getters.getSnackbar);
    }
  }
</script>