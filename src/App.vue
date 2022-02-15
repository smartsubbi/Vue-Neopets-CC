<template>
<div class="container">
  <h3>Testing </h3>
  <navigation-titles></navigation-titles>
  <collectible-case></collectible-case>
  </div>
</template>

<script>
import NavigationTitles from './components/NavigationTitles/NavigationTitles.vue';
import CollectibleCase from './components/NavigationTitles/CollectibleCase.vue';

export default {
  components: {
    NavigationTitles,
    CollectibleCase
  }
}

</script>

<style scoped>
  .carousel__slide {
    border: 1px solid red;
  }
  .container {
    margin: 0 auto;
    padding: 1.5rem;
    max-width: 1080px;
    border: 2px solid red;
  }
</style>
