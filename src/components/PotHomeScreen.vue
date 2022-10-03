<template>
<v-container>
   <input type="hidden" id="anPageName" name="page" value="home" />
    <div class="container-center-horizontal">
      <div class="home screen">
        <div class="flex-col">
          <div class="group-400">
            <div class="text-container">
              <div class="text-30 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
              <div class="text-31 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
            </div>
            <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
          </div>
          <div class="text-38">어떤 기능을 찾고 계세요?</div>
          <a href="/potmenu">
            <div class="view">
              <div class="text-container-1">
                <div class="text-33 valign-text-middle inter-bold-white-20px">메뉴찾기</div>
                <div class="text-32 valign-text-middle inter-normal-white-14px">메뉴를 결정하지 못하셨나요?</div>
              </div>
            </div></a
          >
          <div class="view-container">
            <a href="/potsearch">
              <div class="view-1">
                <div class="text-container-2">
                  <div class="text-35 valign-text-middle inter-bold-white-20px">배달팟 참여하기</div>
                  <div class="text-34 valign-text-middle inter-normal-white-14px">배달팟원이<br />되어보세요!</div>
                </div>
              </div></a
            ><a href="/potcreate">
              <div class="view-2">
                <div class="text-container-3">
                  <div class="text-37 valign-text-middle inter-bold-white-20px">배달팟 모으기</div>
                  <div class="text-36 valign-text-middle inter-normal-white-14px">배달팟의 주인장이 되어보세요!</div>
                </div>
              </div></a
            >
          </div>
          <div class="bottombar">
            <div class="overlap-group2">
              <div class="group-411">
                <div class="iconly-light-search">
                  <div class="overlap-group">
                    <div class="ellipse_739"></div>
                    <img class="line_181" src="img/line-181-1@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img class="group-411-item" src="img/chat@2x.svg" alt="chat" />
                <div class="iconly-light-search-1">
                  <div class="overlap-group">
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
              <div class="icon"><img class="icon-logo" src="img/icon-logo-2@2x.svg" alt="Icon/Logo" /></div>
            </div>
          </div>
        </div>
        <img class="job-finder-app-1" src="img/job-finder-app-1@1x.png" alt="job finder app 1" />
      </div>
    </div>

    <!-- <div id="menu-container">
        <button  @click="$router.push('/potmenu')"><img alt="logo" src="../assets/메뉴찾기.png">
        </button>
    </div>
    <div id="delivery-search-container">
        <button @click="$router.push('/potsearch')"><img alt="logo" src="../assets/배달팟찾기.png">
        </button>
    </div>
    <div id="delivery-create-container">
        <button @click="$router.push('/potcreate')"><img alt="logo" src="../assets/배달팟구하기.png">
        </button>
    </div> -->

</v-container>
</template>

<script>

import "../../public/css/home.css"

export default{
  components: {
  },   
}
</script>

<style scoped>

</style>