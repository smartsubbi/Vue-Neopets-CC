<template>
    <div class="carousel__case-characters">
        <img :src="getLogoImageUrl" :alt="collectionName">
    </div>  
</template>

<script>
export default {    
    computed: {
        getLogoImageUrl() {
            const imgHost = 'http://images.neopets.com/ncmall/collectibles/case/collections/';
            const imgType = '.png';
            return imgHost + this.$store.getters['caseModule/getCaseCollectionName'] + imgType;            
        }
    },
    methods: {
       
    } 

}
</script>

<style scoped>
.carousel__case-characters {
  grid-column: 1;
  grid-row: 4 / 11;
}
</style>
