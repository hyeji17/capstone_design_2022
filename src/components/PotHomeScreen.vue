<template>
<v-container>
    <PotHeader></PotHeader>
    <div id="menu-container">
        <button @click = "menu"><img alt="logo" src="../assets/메뉴찾기.png">
        </button>
    </div>
    <div id="delivery-search-container">
        <button @click = "search"><img alt="logo" src="../assets/배달팟찾기.png">
        </button>
    </div>
    <div id="delivery-create-container">
        <button @click = "create"><img alt="logo" src="../assets/배달팟구하기.png">
        </button>
    </div>
    <PotFooter></PotFooter>
</v-container>
</template>

<script>

import PotHeader from './PotHeader.vue';
import PotFooter from './PotFooter.vue';

export default{
  components: {
    PotHeader,
    PotFooter,
  },   
}
</script>

<style scoped>

</style>