<template>
  
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="imageUrl in getCollectibleHeaderImages" :key="imageUrl" :id="imageUrl.id" :collectionName="imageUrl.collectionName"> 
      
      <!-- <div class="carousel__item" @click="getImageKey"><img :src="imageUrl.id" :alt="imageUrl.collectionName"></div> -->
      <collection-titleimage :key="imageUrl" :id="imageUrl.id" :collectionName="imageUrl.collectionName"></collection-titleimage>
      
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
  
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import { mapGetters } from 'vuex';
import CollectionTitleimage from '../../components/NavigationTitles/CollectionTitleimage.vue';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
    CollectionTitleimage
  },
  computed : {
    ...mapGetters(['getCollectibleHeaderImages'])
  },
  methods: {
    getImageKey() {
      console.log(this.titleName)
    }
  },
  data: () => ({
    
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    },
  }),
});
</script>

<style scoped>

    .carousel__slide {
      border: 1px solid blue;
    }
</style>