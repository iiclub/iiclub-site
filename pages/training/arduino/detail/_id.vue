<template>
  <div>
      <Training :urlparam = "$route.params.id" :registerurl="'/training/arduino/register/'+$route.params.id"/>       
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
    title: "IICLUB - Arduino - Details"
  }
}
</script>
