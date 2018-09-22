<template>
  <div>
      <Training :urlparam = "$route.params.id" :registerurl="'/training/robotics/register/'+$route.params.id"/>       
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
        title: "IICLUB - Robotics - details"
    }
}
</script>
