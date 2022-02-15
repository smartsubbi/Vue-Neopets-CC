<template>
    <div class="wrapper">
        <!-- <div class="one">One</div> -->
        <collection-logo></collection-logo>
        <div class="two">Two</div>
        <div class="three">Three</div>
        <div class="four">Four</div>
        <collection-characters></collection-characters>
        <div class="six">Six</div> 
        <div class="seven">Seven</div>
        <div class="eight">Eight</div>
    </div>
</template>
<script>
import CollectionLogo from '../../components/CollectionCase/CollectionLogo.vue'
import CollectionCharacters from '../../components/CollectionCase/CollectionCharacters.vue'
export default {
    components: {
        CollectionLogo,
        CollectionCharacters
    }
}
</script>


<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-template-rows: repeat(10, 50px);
  margin-top: 16px;
}


.two {
  grid-column: 2;
  grid-row: 1 / 6;
}
 .three {
  grid-column: 3;
  grid-row: 1 / 6;
}
.four {
  grid-column: 4;
  grid-row: 1 / 6;
}
.five {
  grid-column: 1;
  grid-row: 4 / 9;
}

.six {
  grid-column: 2;
  grid-row: 6 / 11;
}
.seven {
  grid-column: 3;
  grid-row: 6 / 11;
}
.eight {
  grid-column: 4;
  grid-row: 6 / 11;
}  


.wrapper > div {
    border: 2px solid rgb(233,171,88);
    border-radius: 5px;
    background-color: rgba(233,171,88,.5);
    padding: 1em;
    color: #d9480f;
}
</style>