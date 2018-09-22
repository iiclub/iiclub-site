<template>
  <div>
    <SmallCard :items="dataItem"/>
  </div>
</template>

<script>

import SmallCard from '@/components/cards/SmallCard.vue';
export default {
  layout: "frontoffice",
  components:{
    SmallCard
  },
  asyncData (context) {
      console.log("in async data begin");
      var baseurl = "/frontoffice/training/type/Arduino";

      return context.app.$axios.$get(baseurl).then((res) =>{
          console.log("res sucess ");
          var content = res;
          if(content.response == "success"){
              console.log("response success data ",content.data);
              return {
                  dataItem : content.data
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
    title: "IICLUB - Arduino"
  }
}
</script>
