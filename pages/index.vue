<template>
    <div>
        <v-carousel dark delimiter-icon="stop">
            <v-carousel-item v-for="(item,i) in dataItemCarousal" :src="item.src" :key="i" @click="carousalTrigger(item.redirectPath)"></v-carousel-item>
        </v-carousel>
        <v-layout column>
            <v-flex xs12 class="testimonals">
                <v-toolbar color="grey darken-4" >
                    <v-toolbar-title>Testimonals</v-toolbar-title>
                </v-toolbar>
            </v-flex>
            <v-flex >
                
                <br />
                <Testimonal :dataItemTestimonal="dataItemTestimonal"/>
            </v-flex>
        </v-layout>        
  </div>
</template>

 
<script>
import Testimonal from '@/components/common/Testimonal.vue'; 

  export default {
    layout: "frontoffice",
    components:{
        Testimonal
    }, 
    data () {
      return {
        dataItem : null
      }
    },
    mounted () {
      console.log(this.$vuetify.breakpoint)
    },
    asyncData (context) {
/*  process.env.backofficePath */
        console.log("in async data begin " );
        var baseurl = "/frontoffice/carousal/getcarousal";
        return context.app.$axios.$get(baseurl).then((res) =>{
            console.log("res sucess ");
            //var content = res.data;
            var content = res;
            if(content.response == "success"){
                console.log("response success data ",content);
                return {
                    dataItemCarousal : content.dataCarousal,
                    dataItemTestimonal : content.dataTestimonal
                }  
            }
            else{
                console.log("response error data ",content.data);
            }
        }).catch((err) => {
            console.log("res err ",err);
        });
    }, 
    methods:{
        carousalTrigger(redirectPath){
            console.log("in carousalTrigger: ",redirectPath);
            this.$router.push(redirectPath);
        }
    }
  }
</script>

<style>
.testimonals .toolbar__content{
    justify-content: center;
}
</style>
