<template>
  <div>
      <Training :urlparam = "'3dprinting'"/>  
  </div>
</template>

<script>
    import Training from '@/components/registrationform/training.vue';
    export default {
        components:{
            Training
        },
        layout: "frontoffice", 
  head: {
    title: "IICLUB - 3D Printing - Registration"
  } 
    }
</script>
