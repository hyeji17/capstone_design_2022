<template>
<v-container>
     <input type="hidden" id="anPageName" name="page" value="baedalpas-moeugi" />
    <div class="container-center-horizontal">
      <div class="baedalpas-moeugi screen">
        <div class="flex-col">
          <div class="flex-row">
            <div class="flex-col-1">
              <div class="group-400">
                <div class="text-container">
                  <div class="text-25 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
                  <div class="text-26 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
                </div>
                <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
              </div>
              <div class="text-27 valign-text-middle">근처의 팟을 찾아보세요!</div>
            </div>
            <div class="filter-selector">
              <img class="filter-icon" src="img/filter-icon@2x.svg" alt="Filter Icon" />
            </div>
          </div>
          <div>
            <div v-for="(pot, index) in pots" :key="index">{{pot.title}} {{pot.category}}</div>
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
                <img class="group-411-item" src="img/chat-1@2x.svg" alt="chat" />
                <div class="iconly-light-search-1">
                  <div class="overlap-group">
                    <div class="ellipse_739-1"></div>
                    <img class="line_181" src="img/line-181@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img
                  class="iconly-light-notification"
                  src="img/iconly-light-notification-1@2x.svg"
                  alt="Iconly/Light/Notification"
                />
                <img class="group-411-item" src="img/profile-1@2x.svg" alt="profile" />
              </div>
              <div class="icon"><img class="icon-logo" src="img/icon-logo-1@2x.svg" alt="Icon/Logo" /></div>
            </div>
          </div>
        </div>
        <img class="job-finder-app-1" src="img/job-finder-app-1@1x.png" alt="job finder app 1" />
      </div>

    </div>

</v-container>
</template>
<script>

import "../../public/css/baedalpas-moeugi.css"
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, query, onValue, off, orderByChild, equalTo } from 'firebase/database'

export default{
  components: {
  },   
  data: () => ({
    auth: null,
    db: null,
    categories:[
      {key : "chicken", value : "치킨"},
      {key : "fastfood", value : "패스트푸드"},
      {key : "pizza", value : "피자"},
      {key : "japanesfood", value : "일식"},
      {key : "chinesefood", value : "중식"},
      {key : "dessert", value : "디저트"},
      {key : "americanfood", value : "양식"},
      {key : "koreanfood", value : "한식"},
      {key : "bunsik", value : "분식"},
      {key : "nightfood", value : "야식"},
      {key : "asianfood", value : "아시안"},
      {key : "lunchbox", value : "도시락"},
    ],
    pots: [],
  }),
  created() {
    this.auth = getAuth()
    this.db = getDatabase()
    console.log('created')

    // db에서 pots 가져오기
    const category = this.$route.query.category
    let dbRef
    if (category) {
      dbRef = query(ref(this.db, 'pots'), orderByChild('category'), equalTo(category))
    } else {
      dbRef = query(ref(this.db, 'pots'))
    }
    onValue(dbRef, (snapshot) => {
      this.pots = snapshot.val()
      snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot.key, childSnapshot.val())
      })
      off(dbRef)
    }, {
      onlyOnce: false
    })
  }
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
