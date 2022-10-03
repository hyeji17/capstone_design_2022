<template>
<div>
<input type="hidden" id="anPageName" name="page" value="rogeuin-jeonhwabeonhoibryeogjung" />
    <div class="container-center-horizontal">
      <div class="rogeuin-jeonhwabeonhoibryeogjung screen">
        <div class="flex-col">
          <div class="flex-row">
            <a href="/pothomescreen">
              <img
                class="variants-navigation-button"
                src="img/variants-navigation-button@2x.svg"
                alt="Variants/Navigation Button"
              />
            </a>
            <div class="group-400">
              <div class="text-container">
                <div class="text-3 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
                <div class="text-4 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
              </div>
              <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
            </div>
          </div>
          <div class="text-5">원하는 메뉴의 배달팟을<br />찾아보세요!</div>
          <div class="overlap-group-container-1">
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">치킨</div>
              <div class="rectangle-1"></div>
              <div class="text-1 dmsans-bold-black-24px">🍗</div>
            </div>
            <div class="overlap-group-1">
              <div class="rectangle-19"></div>
              <div class="text-8 valign-text-middle dmsans-normal-black-12px">패스트푸드</div>
              <div class="rectangle-20"></div>
              <div class="text-9 dmsans-bold-black-24px">🍔</div>
            </div>
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text-6 valign-text-middle dmsans-normal-black-12px">피자</div>
              <div class="rectangle-1"></div>
              <div class="text-7 dmsans-bold-black-24px">🍕</div>
            </div>
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">일식</div>
              <div class="rectangle-1"></div>
              <div class="text-1 dmsans-bold-black-24px">🍣</div>
            </div>
          </div>
          <div class="overlap-group-container">
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">중식</div>
              <div class="rectangle-1"></div>
              <img class="x1" src="img/---------1@2x.png" alt="1" />
            </div>
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">디저트</div>
              <div class="rectangle-1"></div>
              <div class="text-1 dmsans-bold-black-24px">🍰</div>
            </div>
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">양식</div>
              <div class="rectangle-1"></div>
              <img class="x1-1" src="img/-------1@2x.png" alt="1" />
            </div>
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">한식</div>
              <div class="rectangle-1"></div>
              <img class="x1-2" src="img/---------1-1@2x.png" alt="1" />
            </div>
          </div>
          <div class="overlap-group-container">
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">분식</div>
              <div class="rectangle-1"></div>
              <img class="x1-3" src="img/---------1-2@2x.png" alt="1" />
            </div>
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">야식</div>
              <div class="rectangle-1"></div>
              <img class="x1-4" src="img/-------1-1@2x.png" alt="1" />
            </div>
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">아시안</div>
              <div class="rectangle-1"></div>
              <img class="x2" src="img/---------2@2x.png" alt="2" />
            </div>
            <div class="overlap-group-1">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">도시락</div>
              <div class="rectangle-1"></div>
              <img class="x1-5" src="img/--------1@2x.png" alt="1" />
            </div>
          </div>
          <div class="view" @click = "$router.push('/potsearch')">
            <div class="overlap-group15">
              <div class="blue"></div>
              <div class="text-23 valign-text-middle inter-normal-white-14px">여기서 메뉴를 못 고르셨나요?</div>
              <div class="text-24 valign-text-middle inter-bold-white-20px">전체 보기</div>
            </div>
          </div>
          <div class="bottombar">
            <div class="overlap-group2">
              <div class="group-411">
                <div class="iconly-light-search">
                  <div class="overlap-group-2">
                    <div class="ellipse_739"></div>
                    <img class="line_181" src="img/line-181-1@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img class="group-411-item" src="img/chat@2x.svg" alt="chat" />
                <div class="iconly-light-search-1">
                  <div class="overlap-group-2">
                    <div class="ellipse_739-1"></div>
                    <img class="line_181" src="img/line-181@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img
                  class="iconly-light-notification"
                  src="img/iconly-light-notification@2x.svg"
                  alt="Iconly/Light/Notification"
                />
                <img class="group-411-item" src="img/profile@2x.svg" alt="profile" />
              </div>
              <div class="icon"><img class="icon-logo" src="img/icon-logo@2x.svg" alt="Icon/Logo" /></div>
            </div>
          </div>
        </div>
        <img class="job-finder-app-1" src="img/job-finder-app-1@1x.png" alt="job finder app 1" />
      </div>
    </div>

  <!-- <div id = "menu">
    <button @click = "chicken"> <img alt = "logo" src="../assets/치킨.png">치킨</button>
  
    <button @click = "pizza"> <img alt = "logo" src="../assets/피자.png">피자</button>
 
    <button @click = "bunsik"> <img alt = "logo" src="../assets/떡볶이.png">분식</button>
 
    <button @click = "koreanfood"> <img alt = "logo" src="../assets/비빔밥.png">한식</button>
  
    <button @click = "chinesfood"> <img alt = "logo" src="../assets/짜장면.png">중식</button>

    <button @click = "japanesefood"> <img alt = "logo" src="../assets/스시.png">일식</button>
 
    <button @click = "americanfood"> <img alt = "logo" src="../assets/파스타.png">양식</button>

    <button @click = "fastfood"> <img alt = "logo" src="../assets/햄버거.png">패스트푸드</button>

    <button @click = "nightfood"> <img alt = "logo" src="../assets/닭발.png">야식</button>

    <button @click = "lunchbox"> <img alt = "logo" src="../assets/도시락.png">도시락</button>

    <button @click = "asianfood"> <img alt = "logo" src="../assets/쌀국수.png">아시안</button>

    <button @click = "dessert"> <img alt = "logo" src="../assets/도넛.png">디저트</button>
  


    <button @click = "wholemenu"><img alt = "logo" src = "../assets/wholemenu.png">
    </button>
  </div> -->
  </div>
</template>

<script>
import "../../public/css/rogeuin-jeonhwabeonhoibryeogjung.css"
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
