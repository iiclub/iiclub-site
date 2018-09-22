<template>
    <div class="testimonal-container">
        <carousel autoplay :perPage="1" loop :easing="'appear'" :autoplayTimeout="5000">
            <slide v-for="(item,key) in dataItemTestimonal" :key="key">
                <div class="custom" :style="getTestimonalImage(item.src)"></div>
            </slide>
        </carousel>
    </div>
</template>


<script>
export default {
  props:["dataItemTestimonal"],
  methods:{
      getTestimonalImage(src){
          return{
              "background-image": 'url('+src+')'
          }
      }
  }
}
</script>

<style>
    .testimonal-container{
        width: 100%;
        /* background-color: turquoise; */
    }
    .testimonal-container .custom{
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-position-y: 0px;
        height: 200px;
        width: 100%; 
    }
    /* .testimonal-container .custom.image1{
        background-image: url("/upload/testimonals/testimonal1.jpg"); 
    }
    .testimonal-container .custom.image2{
        background-image: url("/upload/testimonals/testimonal2.jpg");
    } */
</style>
