<template>
  <div>
    <WrappedCard :items="items" />
  </div>
</template>


<script>
import axios from "axios";
import WrappedCard from '@/components/cards/WrappedCard.vue';
export default {
  layout: "frontoffice",
  components:{
    WrappedCard
  },
  asyncData (context) {
      console.log("in async data frontoffice begin");
      var baseurl = "/frontoffice/workshop/view";
      return context.app.$axios.$get(baseurl).then((res) =>{
          console.log("res sucess ");
          var content = res;
          if(content.response == "success"){
              console.log("response success data ",content.data);
              return {
                  items : content.data
              } 
          }
          else{
              console.log("response error data ",content.data);
          }
      }).catch((err) => {
          console.log("res err ",err);
      });
  },
  head: {
    title: "IICLUB - Workshop"
  }
}
</script>
