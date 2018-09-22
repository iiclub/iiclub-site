<template>
  <div>
      <Training :urlparam = "$route.params.id" :registerurl="'/training/iot/register/'+$route.params.id"/>       
  </div>
</template>
<script>
import Training from '@/components/description/training.vue';
export default {
    components:{
        Training
    },
    layout: "frontoffice", 
  head: {
    title: "IICLUB - IOT - Details"
  } 
}
</script>
