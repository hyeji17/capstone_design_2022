<template>
<v-container>
<input type="hidden" id="anPageName" name="page" value="potpost-participants" />
    <div class="container-center-horizontal">
      <div class="potpost-participants screen">
        <div class="flex-col">
          <div class="ation-container">
            <a href="javascript:history.back()"
              ><img
                class="variants-navigation-button"
                src="img/variants-navigation-button-5@2x.svg"
                alt="Variants/Navigation Button"
              />
            </a>
            <div class="location">
              <div class="text-container">
                <div class="text-60 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
                <div class="text-61 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
              </div>
              <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
            </div>
          </div>
          <div class="view">
            <div class="overlap-group-1"><div class="text-64 dmsans-bold-black-24px"><img :src = "categories[pot.category]" /> </div></div>
            <div class="flex-col-1">
              <div class="overlap-group1">
                <div class="text-62 valign-text-middle dmsans-bold-masala-24px">{{pot.title}}</div>
                <div class="nn">{{headcount}}/{{pot.max}}</div>
              </div>
              <p class="text-63 valign-text-middle">{{sexes[pot.sex]}} / {{pickups[pot.pickup]}}</p>
            </div>
          </div>
          <div class="overlap-group7">
            <div class="overlap-group2">
              <div class="rectangle-10"></div>
              <div class="text-65">{{pot.contents}}</div>
            </div>
            <!-- <a href="javascript:ShowOverlay('participationoverlay', 'animate-appear');"> -->
              <div class="participation"  v-if="auth.currentUser?.uid !== pot.uid">
                <div class="overlap-group5">
                  <img
                    class="icon-paper_plane"
                    src="img/sf-symbol---arrow-triangle-turn-up-right-circle-fill@2x.svg"
                    alt="icon-paper_plane"
                  />
                  <div class="label valign-text-middle" @click="confirm()">참여하기</div>
                </div>
              </div>
              <!-- </a> -->
              <div class = "participation" v-if="auth.currentUser?.uid === pot.uid">
                <div class="delete-icon-C61RwL">
                  <div class="rectangle-31-vwdJky"></div>
                  <div class="iconly-light-delete-vwdJky"></div>
                </div>
                <div class="edit-icon-C61RwL">
                  <div class="rectangle-30-HyDZAT"></div>
                  <div class="iconly-light-edit-HyDZAT"></div>
                </div>
                <div
                  class="deadline-C61RwL"
                  onclick="Lib.autoanim_redirect('%2A,javascript%3AShowOverlay%28%27deadlinepotoverlay%27%2C%20%27animate-appear%27%29%3B,,,', event)"
                >
                  <div class="blue-w7NT5K"></div>
                  <div class="label valign-text-middle">모집마감</div>
                </div>
              </div>
              22222
          </div>
          <img class="partition" src="img/partition@2x.svg" alt="partition" />
          <!-- <div class="overlap-group3">
            <div class="n valign-text-bottom dmsans-bold-masala-18px">N번째 팟원</div>
            <div class="text-6 valign-text-middle dmsans-normal-masala-13px">댓글참여세부내용</div>
            <img class="partition-1" src="img/-partition@2x.svg" alt="partition" />
          </div>
          <div class="overlap-group4">
            <div class="n-1 valign-text-bottom dmsans-bold-masala-18px">N번째 팟원</div>
            <div class="text-6 valign-text-middle dmsans-normal-masala-13px">댓글참여세부내용</div>
            <img class="partition-2" src="img/partition@2x.svg" alt="partition" />
          </div> -->
          <div class="bottombar">
            <div class="overlap-group6">
              <div class="group-411">
                <div class="iconly-light-search">
                  <div class="overlap-group">
                    <div class="ellipse_739"></div>
                    <img class="line_181" src="img/line-181-1@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img class="group-411-item" src="img/chat-3@2x.svg" alt="chat" />
                <div class="iconly-light-search-1">
                  <div class="overlap-group">
                    <div class="ellipse_739-1"></div>
                    <img class="line_181" src="img/line-181@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img
                  class="iconly-light-notification"
                  src="img/iconly-light-notification-2@2x.svg"
                  alt="Iconly/Light/Notification"
                />
                <img class="group-411-item" src="img/profile-2@2x.svg" alt="profile" />
              </div>
              <a href="home.html#home" data-turbolinks="false">
                <div class="icon"><img class="icon-logo" src="img/icon-logo-4@2x.svg" alt="Icon/Logo" /></div
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="overlay-participationoverlay" class="overlay" style="min-height: 812px"> -->
      <!-- <div class="container-center-horizontal">
        <div class="participationoverlay screen">
          <div class="overlap-group2">
            <div class="text-20 valign-text-middle dmsans-bold-masala-18px">해당 팟에 참여하시겠습니까?</div>
            <div class="flex-row">
              <div class="overlap-group1">
                <div class="text-22 valign-text-middle dmsans-bold-zircon-18px">네!</div>
              </div>
              <a
                href="javascript:HideOverlay('participationoverlay', 'animate-disappear');"
                class="align-self-flex-end"
              >
                <div class="x">
                  <div class="overlap-group">
                    <div class="text-21 valign-text-middle dmsans-bold-mountain-mist-18px">아뇨</div>
                  </div>
                </div></a
              >
            </div>
          </div>
        </div>
      </div> -->
    <!-- </div> -->
    
</v-container>

    
</template>

<script>
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, query, onValue, push, orderByChild, equalTo, update } from 'firebase/database'

export default{
  components: {

  },data: () => ({
    auth: null,
    db: null,
    // categories:[
    //   {key : "chicken", value : "치킨"},
    //   {key : "fastfood", value : "패스트푸드"},
    //   {key : "pizza", value : "피자"},
    //   {key : "japanesfood", value : "일식"},
    //   {key : "chinesefood", value : "중식"},
    //   {key : "dessert", value : "디저트"},
    //   {key : "americanfood", value : "양식"},
    //   {key : "koreanfood", value : "한식"},
    //   {key : "bunsik", value : "분식"},
    //   {key : "nightfood", value : "야식"},
    //   {key : "asianfood", value : "아시안"},
    //   {key : "lunchbox", value : "도시락"},
    // ],
    categories:{
      chicken : "🍗" ,
      fastfood : "🍔",
      pizza : "🍕" ,
      japenesefood : "🍣",
      chinesefood : "img/---------1@2x.png",
      dessert : "🍰",
      americanfood : "img/-------1@2x.png",
      koreanfood : "img/---------1-1@2x.png",
      bunsik : "img/---------1-2@2x.png",
      nightfood : "img/-------1-1@2x.png",
      asianfood : "img/---------2@2x.png",
      lunchbox : "img/--------1@2x.png",
    },
    sexes: {
      same: "동성",
      all: "상관 없음"
    },
    pickups:{
      myhome : "주인장 집",
      half : "중간 지점",
      yourhome : "팟원 집"
    },
    pot: {},
    headcount: 0
  }),
  methods: {
    confirm: function() {
        const result = window.confirm('참여하시겠습니까?')
        if (result === true) {
          push(ref(this.db, `parties`), {
            potid: this.$route.query.potid,
            creatoruid: this.pot.uid,
            uid: this.auth.currentUser?.uid
          })
          // pot headcount + 1
          update(ref(this.db, `pots/${this.$route.query.potid}`), {
            headcount: this.pot.headcount + 1
          })
        }
        console.log(result)
    }
  },
  created() {
    this.auth = getAuth()
    this.db = getDatabase()

    // db에서 pots 가져오기
    const dbRef = query(ref(this.db, `pots/${this.$route.query.potid}`))
    onValue(dbRef, (snapshot) => {
      this.pot = snapshot.val()
      console.log(this.pot)
      // off(dbRef)
      // parties 정보 가져오기
      const dbRefParties = query(ref(this.db, 'parties'), orderByChild('potid'), equalTo(this.$route.query.potid))
      onValue(dbRefParties, (snapshot) => {
        // this.pot = snapshot.val()
        console.log('size', snapshot.size)
        this.headcount = snapshot.size + 1
        // off(dbRefParties)
      }, {
        onlyOnce: false
      })
    }, {
      onlyOnce: false
    })
  }
}
</script>

<style scoped>
/* screen - participationoverlay */

.participationoverlay {
  align-items: flex-start;
  background-color: var(--zircon);
  border: 1px none;
  display: flex;
  height: 127px;
  min-width: 245px;
}

#overlay-participationoverlay {
  background-color: var(--zircon);
}

.overlay .participationoverlay {
  background-color: #00000000;
}

.participationoverlay .overlap-group2 {
  align-items: center;
  background-color: var(--zircon);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 127px;
  padding: 21px 0;
  width: 245px;
}

.participationoverlay .text-20 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-right: 1.0px;
  margin-top: 8px;
  text-align: center;
  white-space: nowrap;
  width: 244px;
}

.participationoverlay .flex-row {
  align-items: flex-start;
  display: flex;
  gap: 15px;
  height: 43px;
  margin-left: 12.0px;
  min-width: 203px;
}

.participationoverlay .overlap-group1 {
  align-items: flex-end;
  background: linear-gradient(180deg, rgb(249.26, 135.89, 31.24) 0%, rgb(249.26, 135.89, 31.24) 0.01%, rgb(255, 119.34, 76.5) 100%);
  border-radius: 10px;
  display: flex;
  height: 42px;
  justify-content: flex-end;
  min-width: 93px;
  padding: 10px 7px;
}

.participationoverlay .text-22 {
  height: 21px;
  letter-spacing: -0.08px;
  line-height: 18px;
  text-align: center;
  white-space: nowrap;
  width: 78px;
}

.participationoverlay .x {
  align-items: flex-start;
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  min-width: 95px;
}

.participationoverlay .overlap-group {
  align-items: flex-start;
  background-color: var(--mystic);
  border-radius: 10px;
  display: flex;
  height: 42px;
  justify-content: flex-end;
  min-width: 93px;
  padding: 11px 29px;
}

.participationoverlay .text-21 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  min-width: 34px;
  text-align: center;
  white-space: nowrap;
}

/* screen - potpost-participants */

.potpost-participants {
  align-items: flex-start;
  background-color: var(--zircon);
  border: 1px none;
  display: flex;
  gap: 658px;
  height: 812px;
  overflow: hidden;
  width: 375px;
}

.potpost-participants .flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: -1px;
  margin-top: 43px;
  min-height: 769px;
  width: 381px;
}

.potpost-participants .ation-container {
  align-items: center;
  align-self: flex-start;
  display: flex;
  gap: 92px;
  margin-left: 1px;
  min-width: 237px;
}

.potpost-participants .variants-navigation-button {
  cursor: pointer;
  height: 80px;
  width: 75px;
}

.potpost-participants .location {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 20px;
  height: 45px;
  margin-bottom: 7.0px;
  min-width: 70px;
}

.potpost-participants .text-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: -1px;
  min-height: 45px;
  width: 42px;
}

.potpost-participants .text-60 {
  height: 21px;
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-right: 2.0px;
  min-width: 26px;
  text-decoration: underline;
  white-space: nowrap;
}

.potpost-participants .text-61 {
  height: 23px;
  letter-spacing: -0.15px;
  line-height: 22.8px;
  min-width: 42px;
  text-align: center;
  white-space: nowrap;
}

.potpost-participants .vector-2 {
  align-self: center;
  height: 4px;
  margin-bottom: 19.5px;
  width: 8px;
}

.potpost-participants .view {
  align-items: center;
  display: flex;
  gap: 15px;
  margin-right: 5.0px;
  margin-top: 9px;
  min-width: 344px;
}

.potpost-participants .overlap-group-1 {
  align-items: flex-start;
  background-color: var(--desert-sand);
  border-radius: 50px;
  display: flex;
  height: 73px;
  justify-content: flex-end;
  min-width: 50px;
  padding: 23px 11.6px;
}

.potpost-participants .text-64 {
  letter-spacing: -0.72px;
  min-height: 26px;
  width: 26px;
}

.potpost-participants .flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 7.0px;
  min-height: 54px;
  width: 275px;
}

.potpost-participants .overlap-group1 {
  height: 31px;
  position: relative;
  width: 275px;
}

.potpost-participants .text-62 {
  height: 31px;
  left: 0;
  letter-spacing: 0;
  position: absolute;
  top: 0;
  width: 211px;
}

.potpost-participants .nn {
  color: var(--tropical-rain-forest);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xxxxl);
  font-weight: 700;
  left: 203px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  text-align: center;
  top: 14px;
  white-space: nowrap;
  width: 72px;
}

.potpost-participants .text-63 {
  color: var(--gunsmoke);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xxl);
  font-weight: 500;
  height: 17px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-bottom: -1px;
  white-space: nowrap;
}

.potpost-participants .overlap-group7 {
  height: 222px;
  margin-left: 14.0px;
  margin-top: 10px;
  position: relative;
  width: 321px;
}

.potpost-participants .overlap-group2 {
  height: 193px;
  left: 0;
  position: absolute;
  top: 0;
  width: 304px;
}

.potpost-participants .rectangle-10 {
  background-color: var(--mystic);
  border: 1px none;
  border-radius: 10px;
  height: 173px;
  left: 0;
  position: absolute;
  top: 0;
  width: 304px;
}

.potpost-participants .text-65 {
  color: var(--black);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  left: 10px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 15px;
  width: 290px;
}

.potpost-participants .participation {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 40px;
  left: 187px;
  min-width: 134px;
  position: absolute;
  top: 182px;
}

.potpost-participants .overlap-group5 {
  align-items: center;
  background: linear-gradient(180deg, rgb(249.26, 135.89, 31.24) 0%, rgb(249.26, 135.89, 31.24) 0.01%, rgb(255, 119.34, 76.5) 100%);
  border-radius: 10px;
  display: flex;
  gap: 10px;
  height: 40px;
  min-width: 132px;
  padding: 0 20px;
}

.potpost-participants .icon-paper_plane {
  height: 19px;
  width: 20px;
}

.potpost-participants .label {
  color: var(--white);
  font-family: var(--font-family-dm_sans);
  font-size: 17px;
  font-weight: 700;
  height: 21px;
  letter-spacing: -0.41px;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  width: 62px;
}

.potpost-participants .partition {
  height: 2px;
  margin-right: 3.0px;
  margin-top: 12px;
  width: 374px;
}

.potpost-participants .overlap-group3 {
  height: 74px;
  margin-right: 4.0px;
  margin-top: 7px;
  position: relative;
  width: 375px;
}

.potpost-participants .n {
  height: 24px;
  left: 24px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  width: 142px;
}

.potpost-participants .text-6 {
  height: 52px;
  left: 28px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 22px;
  width: 235px;
}

.potpost-participants .partition-1 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 72px;
  width: 375px;
}

.potpost-participants .overlap-group4 {
  height: 74px;
  margin-right: 3.0px;
  margin-top: 7px;
  position: relative;
  width: 374px;
}

.potpost-participants .n-1 {
  height: 24px;
  left: 24px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  width: 142px;
}

.potpost-participants .partition-2 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 72px;
  width: 374px;
}

.potpost-participants .bottombar {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 115px;
  margin-right: 3.0px;
  margin-top: 84px;
  min-width: 378px;
  padding: 0 1px;
}

.potpost-participants .overlap-group6 {
  background-image: url(../../public/img/rectangle-26-4@2x.svg);
  background-size: 100% 100%;
  height: 123px;
  margin-top: -8.25px;
  position: relative;
  width: 375px;
}

.potpost-participants .group-411 {
  align-items: flex-end;
  display: flex;
  height: 40px;
  left: 39px;
  min-width: 296px;
  position: absolute;
  top: 36px;
}

.potpost-participants .iconly-light-search {
  align-items: flex-end;
  border: 1px none;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  min-width: 24px;
  padding: 1.2px 1.7px;
}

.potpost-participants .overlap-group {
  height: 21px;
  position: relative;
  width: 20px;
}

.potpost-participants .ellipse_739 {
  border: 1.5px solid;
  border-color: var(--silver-chalice);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.potpost-participants .line_181 {
  height: 5px;
  left: 15px;
  position: absolute;
  top: 16px;
  width: 5px;
}

.potpost-participants .group-411-item {
  height: 24px;
  margin-left: 35px;
  width: 24px;
}

.potpost-participants .iconly-light-search-1 {
  align-items: flex-end;
  align-self: flex-start;
  border: 1px none;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  margin-left: 53px;
  min-width: 24px;
  padding: 1.2px 1.7px;
}

.potpost-participants .ellipse_739-1 {
  border: 1.5px solid;
  border-color: var(--white);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.potpost-participants .iconly-light-notification {
  height: 24px;
  margin-left: 53px;
  width: 24px;
}

.potpost-participants .icon {
  align-items: flex-end;
  background-color: var(--soft-peach);
  border: 1px none;
  border-radius: 30px;
  box-shadow: 0px 4px 4px #00000040;
  cursor: pointer;
  display: flex;
  height: 60px;
  left: 156px;
  min-width: 60px;
  padding: 16.6px 10.4px;
  position: absolute;
  top: 14px;
}

.potpost-participants .icon-logo {
  height: 27px;
  width: 39px;
}

.potpost-participants .job-finder-app-1 {
  height: 4096px;
  margin-top: -1362px;
  object-fit: cover;
  width: 974px;
}

.potpost-owner {
  background-color: #f8fbff;
  border: 1px none;
  height: 812px;
  mix-blend-mode: normal;
  opacity: 1;
  overflow: hidden;
  overflow-x: hidden;
  position: relative;
  width: 375px;
}

.potpost-owner .location-C61RwL {
  --z-index: 0;
  background-color: transparent;
  border: 1px none;
  height: 45px;
  left: 167px;
  opacity: 1;
  position: absolute;
  top: 57px;
  width: 70px;
}

.potpost-owner .text-100-XnGp23 {
  --z-index: 0;
  background-color: transparent;
  color: #1b1b1b;
  font-family: 'DM Sans', Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  height: 21px;
  left: 7px;
  letter-spacing: -0.14px;
  line-height: 21.3px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: left;
  text-decoration: underline;
  top: -1px;
  white-space: nowrap;
  width: auto;
}

.potpost-owner .text-101-XnGp23 {
  --z-index: 1;
  background-color: transparent;
  color: #fe554a;
  font-family: 'DM Sans', Helvetica;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  height: 23px;
  left: 0px;
  letter-spacing: -0.15px;
  line-height: 22.8px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: center;
  top: 21px;
  white-space: nowrap;
  width: auto;
}

.potpost-owner .vector-2-XnGp23 {
  --z-index: 2;
  background-color: transparent;
  background-image: url(../../public/img/vector-2@2x.svg);
  background-size: 100% 100%;
  height: 4px;
  left: 62px;
  opacity: 1;
  position: absolute;
  top: 10px;
  width: 8px;
}

.potpost-owner .job-finder-app-1-C61RwL {
  --z-index: 1;
  background-color: transparent;
  background-image: url(../../public/img/job-finder-app-1@1x.png);
  background-size: 100% 100%;
  height: 4096px;
  left: 1038px;
  mix-blend-mode: normal;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  top: -2252px;
  width: 974px;
}

.potpost-owner .view-C61RwL {
  --z-index: 2;
  background-color: transparent;
  height: 193px;
  left: 36px;
  opacity: 1;
  position: absolute;
  top: 215px;
  width: 306px;
}

.potpost-owner .rectangle-10-UOcbxe {
  --z-index: 0;
  background-color: #e8eaef;
  border: 1px none;
  border-radius: 10px;
  height: 173px;
  left: 0px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 0px;
  width: 304px;
}

.potpost-owner .text-102-UOcbxe {
  --z-index: 1;
  background-color: transparent;
  color: #000000;
  font-family: 'DM Sans', Helvetica;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  height: auto;
  left: 10px;
  letter-spacing: -0.08px;
  line-height: 18px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: left;
  top: 15px;
  width: 290px;
}

.potpost-owner .partition-C61RwL {
  --z-index: 3;
  background-color: transparent;
  background-image: url(../../public/img/partition@2x.svg);
  background-size: 100% 100%;
  height: 2px;
  left: 1px;
  opacity: 1;
  position: absolute;
  top: 449px;
  width: 374px;
}

.potpost-owner .comment1-C61RwL {
  --z-index: 4;
  background-color: transparent;
  height: 74px;
  left: 0px;
  opacity: 1;
  position: absolute;
  top: 458px;
  width: 379px;
}

.potpost-owner .n-EtlK46 {
  --z-index: 0;
  background-color: transparent;
  color: #3c3c3c;
  font-family: 'DM Sans', Helvetica;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  height: 24px;
  left: 24px;
  letter-spacing: -0.08px;
  line-height: 18px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: left;
  top: 0px;
  width: 142px;
}

.potpost-owner .text-103-EtlK46 {
  --z-index: 1;
  background-color: transparent;
  color: #3c3c3c;
  font-family: 'DM Sans', Helvetica;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  height: 52px;
  left: 28px;
  letter-spacing: -0.08px;
  line-height: 18px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: left;
  top: 22px;
  width: 235px;
}

.potpost-owner .partition-EtlK46 {
  --z-index: 2;
  background-color: transparent;
  background-image: url(../../public/img/-partition@2x.svg);
  background-size: 100% 100%;
  height: 2px;
  left: 0px;
  opacity: 1;
  position: absolute;
  top: 72px;
  width: 375px;
}

.potpost-owner .comment2-C61RwL {
  --z-index: 5;
  background-color: transparent;
  height: 74px;
  left: 1px;
  opacity: 1;
  position: absolute;
  top: 539px;
  width: 379px;
}

.potpost-owner .n-5iYmE5 {
  --z-index: 0;
  background-color: transparent;
  color: #3c3c3c;
  font-family: 'DM Sans', Helvetica;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  height: 24px;
  left: 24px;
  letter-spacing: -0.08px;
  line-height: 18px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: left;
  top: 0px;
  width: 142px;
}

.potpost-owner .text-104-5iYmE5 {
  --z-index: 1;
  background-color: transparent;
  color: #3c3c3c;
  font-family: 'DM Sans', Helvetica;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  height: 52px;
  left: 28px;
  letter-spacing: -0.08px;
  line-height: 18px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: left;
  top: 22px;
  width: 235px;
}

.potpost-owner .partition-5iYmE5 {
  --z-index: 2;
  background-color: transparent;
  background-image: url(../../public/img/partition@2x.svg);
  background-size: 100% 100%;
  height: 2px;
  left: -0px;
  opacity: 1;
  position: absolute;
  top: 72px;
  width: 374px;
}

.potpost-owner .delete-icon-C61RwL {
  --z-index: 6;
  background-color: transparent;
  border: 1px none;
  height: 40px;
  left: 300px;
  opacity: 1;
  position: absolute;
  top: 397px;
  width: 40px;
}

.potpost-owner .rectangle-31-vwdJky {
  --z-index: 0;
  background-color: #fbe6e6;
  border: 1px none;
  border-radius: 15px;
  height: 40px;
  left: 0px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 0px;
  width: 40px;
}

.potpost-owner .iconly-light-delete-vwdJky {
  --z-index: 1;
  background-color: transparent;
  background-image: url(../../public/img/iconly-light-delete@2x.svg);
  background-size: 100% 100%;
  height: 24px;
  left: 8px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 8px;
  width: 24px;
}

.potpost-owner .edit-icon-C61RwL {
  --z-index: 7;
  background-color: transparent;
  border: 1px none;
  height: 40px;
  left: 252px;
  opacity: 1;
  position: absolute;
  top: 397px;
  width: 40px;
}

.potpost-owner .rectangle-30-HyDZAT {
  --z-index: 0;
  background-color: #d9f9e4;
  border: 1px none;
  border-radius: 15px;
  height: 40px;
  left: 0px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 0px;
  width: 40px;
}

.potpost-owner .iconly-light-edit-HyDZAT {
  --z-index: 1;
  background-color: transparent;
  background-image: url(../../public/img/iconly-light-edit@2x.svg);
  background-size: 100% 100%;
  height: 24px;
  left: 8px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 8px;
  width: 24px;
}

.potpost-owner .view-VMr6Om {
  --z-index: 8;
  background-color: transparent;
  height: 73px;
  left: 15px;
  opacity: 1;
  position: absolute;
  top: 132px;
  width: 344px;
}

.potpost-owner .text-105-5l5ivn {
  --z-index: 0;
  background-color: transparent;
  color: #3c3c3c;
  font-family: 'DM Sans', Helvetica;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  height: 31px;
  left: 65px;
  letter-spacing: 0.00px;
  line-height: normal;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: left;
  top: 6px;
  width: 211px;
}

.potpost-owner .text-106-5l5ivn {
  --z-index: 1;
  background-color: transparent;
  color: #7e8389;
  font-family: 'DM Sans', Helvetica;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  height: 17px;
  left: 65px;
  letter-spacing: -0.08px;
  line-height: 18px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: left;
  top: 43px;
  white-space: nowrap;
  width: 211px;
}

.potpost-owner .view-5l5ivn {
  --z-index: 2;
  background-color: transparent;
  height: 16px;
  left: 268px;
  opacity: 1;
  position: absolute;
  top: 20px;
  width: 74px;
}

.potpost-owner .nn-PdcPxD {
  --z-index: 0;
  background-color: transparent;
  color: #0b735f;
  font-family: 'DM Sans', Helvetica;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  height: auto;
  left: 0px;
  letter-spacing: 0.00px;
  line-height: 30px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: center;
  top: 0px;
  white-space: nowrap;
  width: 72px;
}

.potpost-owner .chicken-5l5ivn {
  --z-index: 3;
  background-color: transparent;
  height: 73px;
  left: 0px;
  opacity: 1;
  position: absolute;
  top: 0px;
  width: 52px;
}

.potpost-owner .rectangle-21-JXQgsK {
  --z-index: 0;
  background-color: #f0ccc11a;
  border: 1px none;
  border-radius: 50px;
  height: 73px;
  left: 0px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 0px;
  width: 50px;
}

.potpost-owner .text-107-JXQgsK {
  --z-index: 1;
  background-color: transparent;
  color: #000000;
  font-family: 'DM Sans', Helvetica;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  height: auto;
  left: 12px;
  letter-spacing: -0.72px;
  line-height: normal;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: left;
  top: 23px;
  width: 26px;
}

.potpost-owner .deadline-C61RwL {
  --z-index: 9;
  background-color: transparent;
  cursor: pointer;
  height: 40px;
  left: 144px;
  opacity: 1;
  position: absolute;
  top: 397px;
  width: 102px;
}

.potpost-owner .blue-w7NT5K {
  --z-index: 0;
  background: linear-gradient(180deg, rgb(249.26249027252197, 135.88949382305145, 31.237515807151794) 0%, rgb(249.26249027252197, 135.88949382305145, 31.237515807151794) 0.009999999747378752%, rgb(255, 119.33999866247177, 76.49998784065247) 100%);
  background-color: transparent;
  border: 1px none;
  border-radius: 10px;
  height: 40px;
  left: 0px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 0px;
  width: 100px;
}

.potpost-owner .label-w7NT5K {
  --z-index: 1;
  background-color: transparent;
  color: #ffffff;
  font-family: 'DM Sans', Helvetica;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  height: 21px;
  left: 19px;
  letter-spacing: -0.41px;
  line-height: 22px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  text-align: center;
  top: 10px;
  white-space: nowrap;
  width: 62px;
}

.potpost-owner .bottombar-C61RwL {
  --z-index: 10;
  background-color: transparent;
  border: 1px none;
  height: 115px;
  left: -1px;
  opacity: 1;
  position: fixed;
  top: 697px;
  width: 378px;
}

.potpost-owner .rectangle-26-W6j1pI {
  --z-index: 0;
  background-color: transparent;
  background-image: url(../../public/img/rectangle-26-6@2x.svg);
  background-size: 100% 100%;
  height: 123px;
  left: 1px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: -8px;
  width: 375px;
}

.potpost-owner .group-411-W6j1pI {
  --z-index: 1;
  background-color: transparent;
  height: 40px;
  left: 40px;
  opacity: 1;
  position: absolute;
  top: 28px;
  width: 296px;
}

.potpost-owner .group-409-aeV7xi {
  --z-index: 0;
  background-color: transparent;
  height: 24px;
  left: 136px;
  opacity: 1;
  position: absolute;
  top: 0px;
  width: 24px;
}

.potpost-owner .iconly-light-search-6xsDPR {
  --z-index: 0;
  background-color: transparent;
  border: 1px none;
  height: 24px;
  left: 0px;
  mix-blend-mode: normal;
  opacity: 1;
  position: relative;
  top: 0px;
  width: 24px;
}

.potpost-owner .search-M9BZJM {
  --z-index: 0;
  background-color: transparent;
  height: 19px;
  left: 3px;
  opacity: 1;
  position: relative;
  top: 3px;
  width: 19px;
}

.potpost-owner .ellipse_739-rBl3xV {
  --z-index: 0;
  background-color: transparent;
  border: 1.5px solid;
  border-color: #ffffff;
  border-radius: 9.74px;
  height: 19px;
  left: -1px;
  opacity: 1;
  position: absolute;
  top: -1px;
  width: 19px;
}

.potpost-owner .line_181-rBl3xV {
  --z-index: 1;
  background-color: transparent;
  background-image: url(../../public/img/line-181-4@2x.svg);
  background-size: 100% 100%;
  height: 5px;
  left: 14px;
  opacity: 1;
  position: absolute;
  top: 15px;
  width: 5px;
}

.potpost-owner .iconly-light-notification-aeV7xi {
  --z-index: 1;
  background-color: transparent;
  background-image: url(../../public/img/iconly-light-notification-2@2x.svg);
  background-size: 100% 100%;
  height: 24px;
  left: 213px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 16px;
  width: 24px;
}

.potpost-owner .iconly-light-search-aeV7xi {
  --z-index: 2;
  background-color: transparent;
  border: 1px none;
  height: 24px;
  left: 0px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 16px;
  width: 24px;
}

.potpost-owner .search-uqwwBi {
  --z-index: 0;
  background-color: transparent;
  height: 19px;
  left: 3px;
  opacity: 1;
  position: relative;
  top: 3px;
  width: 19px;
}

.potpost-owner .ellipse_739-cmkRQ2 {
  --z-index: 0;
  background-color: transparent;
  border: 1.5px solid;
  border-color: #a9abae;
  border-radius: 9.74px;
  height: 19px;
  left: -1px;
  opacity: 1;
  position: absolute;
  top: -1px;
  width: 19px;
}

.potpost-owner .line_181-cmkRQ2 {
  --z-index: 1;
  background-color: transparent;
  background-image: url(../../public/img/line-181-5@2x.svg);
  background-size: 100% 100%;
  height: 5px;
  left: 14px;
  opacity: 1;
  position: absolute;
  top: 15px;
  width: 5px;
}

.potpost-owner .profile-aeV7xi {
  --z-index: 3;
  background-color: transparent;
  background-image: url(../../public/img/profile-2@2x.svg);
  background-size: 100% 100%;
  height: 24px;
  left: 272px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 16px;
  width: 24px;
}

.potpost-owner .chat-aeV7xi {
  --z-index: 4;
  background-color: transparent;
  background-image: url(../../public/img/chat-2@2x.svg);
  background-size: 100% 100%;
  height: 24px;
  left: 59px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 16px;
  width: 24px;
}

.potpost-owner .icon-W6j1pI {
  --z-index: 2;
  background-color: transparent;
  border: 1px none;
  box-shadow: 0px 4px 4px #00000040;
  cursor: pointer;
  height: 60px;
  left: 157px;
  opacity: 1;
  position: absolute;
  top: 6px;
  width: 60px;
}

.potpost-owner .ellipse-2-2Q7kjW {
  --z-index: 0;
  background-color: #f6e9eb;
  border: 1px none;
  border-radius: 30px;
  height: 60px;
  left: 0px;
  mix-blend-mode: normal;
  opacity: 1;
  position: absolute;
  top: 0px;
  width: 60px;
}

.potpost-owner .icon-logo-2Q7kjW {
  --z-index: 1;
  background-color: transparent;
  background-image: url(../../public/img/icon-logo-6@2x.svg);
  background-size: 100% 100%;
  height: 27px;
  left: 10px;
  opacity: 1;
  position: absolute;
  top: 17px;
  width: 39px;
}

.potpost-owner .variants-navigation-button-C61RwL {
  --z-index: 11;
  align-items: flex-start;
  background-color: transparent;
  background-image: url(../../public/img/variants-navigation-button-2@2x.svg);
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: auto;
  left: 0px;
  mix-blend-mode: normal;
  opacity: 1;
  position: fixed;
  top: 43px;
  width: fit-content;
}






































</style>
