<template>
  <div>
      <Training :urlparam = "$route.params.id"/>  
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
            title: "IICLUB - Robotics - Registration"
        }
    }
</script>
