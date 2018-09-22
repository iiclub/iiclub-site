<template>
  <div>
      <Training :urlparam = "'3dprinting'" :registerurl="'/training/3dprinting/register/'+$route.params.id"/>       
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
    title: "IICLUB - 3D Printing - Details"
  } 
}
</script>
