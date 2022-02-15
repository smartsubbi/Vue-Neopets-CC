<template>
    <div class="carousel__case-logo">
        <img :src="getLogoImageUrl" :alt="collectionName">
    </div>  
</template>

<script>
export default {    
    computed: {
        getLogoImageUrl() {
            const imgHost = 'http://images.neopets.com/ncmall/collectibles/case/logos/';
            const imgType = '.png';
            return imgHost + this.$store.getters['caseModule/getCaseCollectionName'] + imgType;            
        }
    },
    methods: {
       
    } 

}
</script>

<style scoped>
.carousel__case-logo {
  grid-column: 1 ;
  grid-row: 1 / 4;
}
</style>
