<template>
<v-container>
    <PotHeader></PotHeader>
    <div>
        <span>근처의 팟을 찾아보세요!</span>
        <div class="potlist">
            <button @click = "filter"><img alt="logo" src="../assets/FilterSelector.png">
            </button>
        </div>

        <div class="item_list"></div>
        <div id="potlistadd">
            <button @click = "filter"><img alt="logo" src="../assets/게시물추가.png">
            </button> 
        </div>
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
span {
width: 300px;
height: 100px;
line-height: 120px;
display: flex;
text-align: left;
font-weight: 900;
font-size: 25px;
}
#potlist  {
position: absolute;
height: 45px;
width: 37px;
left: 317px;
top: 108px;
border-radius: 0px;

}
#potlistadd{
position: absolute;
height: 80px;
width: 80px;
left: 286px;
top: 634px;
border-radius: 0px;

}
</style>
