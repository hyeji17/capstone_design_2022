<template>
  <div id = "menu">
    <button @click = "chicken"> <img alt = "logo" src="../assets/치킨.png">치킨</button>
  
    <button @click = "pizza"> <img alt = "logo" src="../assets/피자.png">피자</button>
 
    <button @click = "bunsik"> <img alt = "logo" src="../assets/떡볶이.png">분식</button>
 
    <button @click = "koreanfood"> <img alt = "logo" src="../assets/비빔밥.png">한식</button>
  
    <button @click = "chinesfood"> <img alt = "logo" src="../assets/짜장면.png">중식</button>

    <button @click = "Japanesefood"> <img alt = "logo" src="../assets/스시.png">일식</button>
 
    <button @click = "americanfood"> <img alt = "logo" src="../assets/파스타.png">양식</button>

    <button @click = "fastfood"> <img alt = "logo" src="../assets/햄버거.png">패스트푸드</button>

    <button @click = "nightfood"> <img alt = "logo" src="../assets/닭발.png">야식</button>

    <button @click = "lunchbox"> <img alt = "logo" src="../assets/도시락.png">도시락</button>

    <button @click = "asianfood"> <img alt = "logo" src="../assets/쌀국수.png">아시안</button>

    <button @click = "dessert"> <img alt = "logo" src="../assets/도넛.png">디저트</button>
  


    <button @click = "wholemenu"><img alt = "logo" src = "../assets/wholemenu.png">
    </button>
  </div>
</template>

<script>
export default {
  name : 'MenuPage',
}
</script>

<style scoped>

#menu{

position: absolute;
width: 323px;
height: 347px;
left: 26px;
top: 143px;

background: rgba(255, 210, 96, 0.6);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

</style>
