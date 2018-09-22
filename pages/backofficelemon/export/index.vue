<template>
  <div style="margin:0 auto;width:50%">
      <h1>Export registered members data</h1>
    <br /><br />
    <div>
        <input type="radio" id="workshop" name="whattoexport" value="workshop" v-model="whattoexport"/>
        <label for="workshop"> Workshop </label><br/>
        <input type="radio" id="training" name="whattoexport" value="training" v-model="whattoexport" /> 
        <label for="training"> Training </label>
    </div>
    <br /><br />
    <div>
        <h3>From date </h3>
            <v-layout row wrap>
                <v-flex xs11 sm5>
                    <v-menu
                        lazy
                        :close-on-content-click="false"
                        v-model="menu"
                        transition="scale-transition"
                        offset-y
                        full-width
                        :nudge-right="40"
                        max-width="290px"
                        min-width="290px"
                    >
                        <v-text-field
                            slot="activator"
                            label="Date in M/D/Y format"
                            v-model="date"
                            prepend-icon="event"
                            @blur="date = parseDate(dateFormatted)"
                        ></v-text-field>
                        <v-date-picker v-model="date" @input="dateFormatted = formatDate($event)" no-title scrollable actions>
                            <template slot-scope="{ save, cancel }">
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="save">OK</v-btn>
                                </v-card-actions>
                            </template>
                        </v-date-picker>
                    </v-menu>
                    <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
                </v-flex>
            </v-layout>
        </div>
    <br /><br />

<div>
        <h3>To date </h3>
            <v-layout row wrap>
                <v-flex xs11 sm5>
                    <v-menu
                        lazy
                        :close-on-content-click="false"
                        v-model="tomenu"
                        transition="scale-transition"
                        offset-y
                        full-width
                        :nudge-right="40"
                        max-width="290px"
                        min-width="290px"
                    >
                        <v-text-field
                            slot="activator"
                            label="Date in M/D/Y format"
                            v-model="todate"
                            prepend-icon="event"
                            @blur="todate = parseDate(todateFormatted)"
                        ></v-text-field>
                        <v-date-picker v-model="todate" @input="todateFormatted = formatDate($event)" no-title scrollable actions>
                            <template slot-scope="{ save, cancel }">
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="save">OK</v-btn>
                                </v-card-actions>
                            </template>
                        </v-date-picker>
                    </v-menu>
                    <!-- <p>Date in ISO format: <strong>{{ todate }}</strong></p> -->
                </v-flex>
            </v-layout>
        </div>
        <br /><br />
        <div>
            <v-btn @click.prevent="exportdata()" color="primary">Export</v-btn>
        </div>


  </div>
</template>

<script>
export default {
  layout: "backoffice",
  data(){
      return{
        whattoexport : "workshop",
        date: null,
        dateFormatted: null,
        menu: false,
        todate: null,
        todateFormatted: null,
        tomenu: false
      }
  },
  methods: {
      formatDate (date) {
        if (!date) {
          return null
        }

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) {
          return null
        }

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      exportdata(){
          var fromdate = this.date;
          var todate = this.todate;
          var url = "http://localhost:3000/backoffice/exportdata";
          window.open(url+"?fromdate="+fromdate+"&todate="+todate+"&export="+this.whattoexport, '_blank');
      }
    }
}
</script>


<style>

</style>
