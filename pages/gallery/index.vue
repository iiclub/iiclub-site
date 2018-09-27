<template>
    <div id="gallerypage">
        <h2 style="text-align:center;">Video Gallery</h2>
        <div class="gallerycontainer">
            <div class="gallerydata" v-for="gallery in galleryData" :key="gallery.id"
            :class="{extend : galleryData.length ==1}">
                <!-- <div>{{gallery.id}}</div> -->
                <div class="galleryvideo">
                    <iframe  
                        :src="gallery.youtubelink" 
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen></iframe>
                </div>
                <h4 style="padding: 10px 0px;">{{gallery.description}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout : "frontoffice",
    head:{
        title: "IICLUB - Video Gallery"
    },
    /*asyncData(context){
        return{
            galleryData : [
                {
                    id: "1",
                    youtubelink : "https://www.youtube.com/embed/Gg4lS0XMWbU",
                    description: "image1 description"
                },
                {
                    id: "2",
                    youtubelink : "https://www.youtube.com/embed/Gg4lS0XMWbU",
                    description: "image2 description"
                },
                {
                    id: "3",
                    youtubelink : "https://www.youtube.com/embed/Gg4lS0XMWbU",
                    description: "image3 description"
                },
                {
                    id: "4",
                    youtubelink : "https://www.youtube.com/embed/Gg4lS0XMWbU",
                    description: "image4 description"
                }
            ]
        }
    },*/
    asyncData (context) {
      console.log("in async data frontoffice gallery begin");
      var baseurl = "/frontoffice/gallery/getdata";
      return context.app.$axios.$get(baseurl).then((res) =>{
          console.log("res sucess ");
          var content = res;
          if(content.response == "success"){
              console.log("response success data ",content.data);
              if(content.data !== undefined){
                  console.log("in not undefined")
                return {
                    galleryData : content.data
                }
              }
              else{
                  console.log("is undefined")
                return {
                    galleryData : []
                }
              }
               
          }
          else{
              console.log("response error data ",content.data);
          }
      }).catch((err) => {
          console.log("res err ",err);
      });
  },
}
</script>

<style scoped>
#gallerypage{
    box-sizing: border-box;
    padding:20px;
}
#gallerypage .gallerycontainer{
    text-align: center;
}

#gallerypage .gallerydata{
    width: 30%;
    min-width: 350px;
    height: 300px;
    display: inline-block;
    /* margin: 10px; */
    position: relative;
    text-align: center;
}

#gallerypage .gallerydata:not(:last-child){
    margin-right:15px;
}

#gallerypage .gallerydata .galleryvideo {
    height: 300px;
}

#gallerypage .gallerydata .galleryvideo iframe{
    width: 100%;
    height: 100%;
}
#gallerypage .extend{
    width: 60%;
}
#gallerypage .gallerydata.extend .galleryvideo{
    height: 350px;
}

@media only screen and (max-width: 740px) {
    #gallerypage .gallerydata{
        min-width: 100%;
    }
}
@media only screen and (max-width: 1148px) {
    #gallerypage .gallerydata{
        width: 45%;
    }
}
</style>
