<template>
<v-container>
    <PotHeader></PotHeader>
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