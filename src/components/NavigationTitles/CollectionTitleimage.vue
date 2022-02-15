<template>
    <div class="carousel__item" @click="scn">
        <img :src="imageUrl" :alt="collectionName">
    </div>  
</template>

<script>

    export default {
        props: ['id', 'collectionName'],
        computed: {
            imageUrl() {
                const imgHost = 'http://images.neopets.com/ncmall/collectibles/case/buttons/';
                const imgType = '.png';
                return imgHost + this.collectionName + imgType;
            }
        },
        methods: {            
            scn() {                
                console.log(this.id)
                console.log(this.collectionName)
                this.$store.dispatch('caseModule/setCollectionName', {
                    id: this.id, collectionName: this.collectionName
                });
                
            }
        }
    }
</script>


