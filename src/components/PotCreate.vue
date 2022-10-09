<template>
<v-container>
    <!-- <div>
      <button @click='firebaseCreateSet()'>Create Set (모두 삭제하고 생성)</button>
      <button @click='firebaseCreatePush()'>Create Push (고유 키를 생성하며 데이터 생성)</button>
      <button @click='firebaseRead()'>Read</button>
      <button @click='firebaseDelete()'>Delete</button>
      <button @click='firebaseUpdate()'>Update (해당 부분만 수정)</button>
    </div> -->
<input type="hidden" id="anPageName" name="page" value="-" />
    <div class="container-center-horizontal">
      <div class="x screen">
             <div class="div" style="overflow-y: scroll; height: 800px;">
        <div class="flex-col">
          <div class="group-400">
            <div class="text-container">
              <div class="text-39 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
              <div class="text-40 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
            </div>
            <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
          </div>
          <div class="text-41 valign-text-middle">배달팟의 주인장이 되어보세요!</div>

          <div class="view-1">
            <div class="text-43 valign-text-middle inter-semi-bold-cape-cod-15px">메뉴 카테고리</div>
            <div class="overlap-group">
              <v-select :items="categories" item-text="value" item-value="key" label = "선택" v-model="pot.category" @change="check()"></v-select> 
              <!-- <div class="text-4 valign-text-bottom inter-normal-cape-cod-13px">선택</div> -->
              <!-- <img class="vector" src="img/vector@2x.svg" alt="Vector" /> -->
            </div>
          </div>
          <div class="view">
            <div class="text-container-1">
              <div class="text-4-1 valign-text-middle inter-semi-bold-cape-cod-15px">제목</div>
              <p class="text-4-2 valign-text-middle">위치와 메뉴가 한눈에 드러나게 적어주세요!</p>
            </div>
            <div class="overlap-group">
              <!-- <div class="text-4 valign-text-bottom inter-normal-cape-cod-13px" contenteditable = "true">입력</div> -->
              <input class="text-4 valign-text-bottom inter-normal-cape-cod-13px" v-model="pot.title" placeholder="입력">
              <img class="vector" src="img/vector@2x.svg" alt="Vector" />
            </div>
          </div>
          <div class="view">
            <div class="text-container-2">
              <div class="text-4-1 valign-text-middle inter-semi-bold-cape-cod-15px">내용</div>
              <p class="text-4-2 valign-text-middle">진행방식과 참고사항에 대해 자세히 적어주세요!</p>
            </div>
            <div class="overlap-group-2">
              <!-- <div class="text-47 valign-text-bottom inter-normal-cape-cod-13px" contenteditable = "true">입력</div> -->
              <textarea v-model="pot.contents" class="text-47 valign-text-bottom inter-normal-cape-cod-13px" placeholder="입력"></textarea>
              <img class="vector-1" src="img/vector-3@2x.svg" alt="Vector" />
            </div>
          </div>
          <div class="view-2">
            <div class="text-5 valign-text-middle inter-semi-bold-cape-cod-15px">선호 성별</div>
            <div class="overlap-group3">
              <div :class="{'overlap-group-3': pot.sex === 'same'}" @click="pot.sex = 'same'"><div class="text-5-1 valign-text-bottom">동성만</div></div>
              <div :class="{'overlap-group-3': pot.sex === 'all'}" @click="pot.sex = 'all'"><div class="x-1 valign-text-bottom inter-semi-bold-gunsmoke-15px">상관X</div></div>
              <!-- <div :class="{'overlap-group-3': pot.sex === 'all'}" @click="pot.sex = 'all'"><div class="x-1 valign-text-bottom inter-semi-bold-gunsmoke-15px">상관X</div></div> -->
              <input style="display: none" type="radio" v-model="pot.sex" value="same">
              <input style="display: none" type="radio" v-model="pot.sex" value="all">
            </div>
          </div>
          <div class="view-3">
            <div class="text-5 valign-text-middle inter-semi-bold-cape-cod-15px">픽업 방식</div>
            <div class="overlap-group4">
              <div :class="{'overlap-group-4': pot.pickup === 'myhome'}" @click="pot.pickup = 'myhome'"><div class="text-54 valign-text-bottom inter-semi-bold-gunsmoke-15px">우리집픽업</div></div>
              <div :class="{'overlap-group-4': pot.pickup === 'half'}" @click="pot.pickup = 'half'"><div class="text-5-1 valign-text-bottom">중간지점픽업</div></div>
              <div :class="{'overlap-group-4': pot.pickup === 'yourhome'}" @click="pot.pickup = 'yourhome'"><div class="text-52 valign-text-bottom inter-semi-bold-gunsmoke-15px">남의집픽업</div></div>
              <input style="display: none" type="radio" v-model="pot.pickup" value="myhome">
              <input style="display: none" type="radio" v-model="pot.pickup" value="yourhome">
              <input style="display: none" type="radio" v-model="pot.pickup" value="half">

            </div>
          </div>
<div class="view-5">
          <div class="text-container-3">
            <div class="text-81 valign-text-middle inter-semi-bold-cape-cod-15px">팟원수 설정</div>
            <p class="text-83 valign-text-middle inter-semi-bold-gunsmoke-13px">
              최소 1명 이상, 최대 10명 이하로 설정해주세요!
            </p>
          </div>
          <div class="overlap-group">
            <div class="text valign-text-bottom inter-normal-cape-cod-13px">
              <input type="number" id="potNumber" name="number" placeholder="입력" min="2" max="10" value="2" style="border:0 solid black" v-model="pot.max"></div>
            <img class="vector" src="img/vector@2x.svg" alt="Vector" />
          </div>
        </div>
        <div class="view-container-1">
          <div class="view-6">
            <div class="text-container-4">
              <div class="text-85 valign-text-middle inter-semi-bold-cape-cod-15px">오픈카톡 링크</div>
              <div class="text-87 valign-text-middle">
                (선택) 오픈카카오톡링크를 생성하여<br />팀원들에게 공유해주세요!
              </div>
            </div>
            <div class="overlap-group">
              <div class="text valign-text-bottom inter-normal-cape-cod-13px">
                <input type="text" id="link" name="link" placeholder="입력" style="border:0 solid black" v-model="pot.openchat"></div>
              <img class="vector" src="img/vector@2x.svg" alt="Vector" />
            </div>
          </div>
          
            <div class="view-7"><div class="text-84 valign-text-middle" @click="create()">배달팟 모으기</div></div>
            <!-- <v-btn @click = "create()">배달팟열기</v-btn> -->
        </div>

          <div class="overlap-group6">
            <div class="active-tip"></div>
            <div class="text-56 valign-text-middle">배달팟 열기</div>
            <div class="bottombar">
              <div class="overlap-group5">
                <div class="group-411">
                  <div class="iconly-light-search">
                    <div class="overlap-group-1">
                      <div class="ellipse_739"></div>
                      <img class="line_181" src="img/line-181-1@2x.svg" alt="Line_181" />
                    </div>
                  </div>
                  <img class="group-411-item" src="img/chat-1@2x.svg" alt="chat" />
                  <div class="iconly-light-search-1">
                    <div class="overlap-group-1">
                      <div class="ellipse_739-1"></div>
                      <img class="line_181" src="img/line-181@2x.svg" alt="Line_181" />
                    </div>
                  </div>
                  <img
                    class="iconly-light-notification"
                    src="img/iconly-light-notification-1@2x.svg"
                    alt="Iconly/Light/Notification"
                  />
                  <img class="group-411-item" src="img/profile-2@2x.svg" alt="profile" />
                </div>
                <div class="icon"><img class="icon-logo" src="img/icon-logo-2@2x.svg" alt="Icon/Logo" /></div>
              </div>
            </div>
          </div>
        </div>
        <img class="job-finder-app-1" src="img/job-finder-app-1@1x.png" alt="job finder app 1" />
      </div>
    </div>
    </div>

</v-container>
</template>
<script>
// import '../../public/css/-.css'
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, set, push, query, onValue, orderByChild, equalTo, off, remove, update } from 'firebase/database'


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
    pot: {
      category: '',
      title : '',
      contents : '',
      sex: 'same',
      pickup : 'half',
      max : '2',
      headcount : 1,
      openchat : '',
      uid: null
    }
  }),
  methods: {
    check: function() {
      console.log(this.pot)
    },
    create: function(){
      this.pot.uid = this.auth.currentUser?.uid || ''
      console.log(this.pot)
      push(ref(this.db, `pots`), this.pot)
      this.$router.push("/potsearch")
    },
    firebaseCreateSet: function() {
      set(ref(this.db, `members`), {
        key1: {
          name: '홍길동',
          age: '39'
        },
        key2: {
          name: '이순신',
          age: '33'
        },
        key3: {
          name: '홍명보',
          age: '44'
        },
        key4: {
          name: '박지삼',
          age: '22'
        },
        [this.auth.currentUser?.uid]: {
          name: '권명순',
          age: '10'
        },
      })
    },
    firebaseCreatePush: function() {
      push(ref(this.db, `members`), {
        name: '춘향이',
        age: '16'
      })
    },
    firebaseRead: function() {
      // const dbRef = query(ref(this.db, 'members'))
      const dbRef = query(ref(this.db, 'members'), orderByChild('name'), equalTo('춘향이'))
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          console.log(childSnapshot.key, childSnapshot.val())
        })
        off(dbRef)
      }, {
        onlyOnce: false
      })
    },
    firebaseDelete: function() {
      const key = 'key1'
      remove(ref(this.db, `members/${key}`))
    },
    firebaseUpdate: function() {
      const key = 'key2'
      update(ref(this.db, `members/${key}/`), {
        name: '충무공',
        address: '광화문'
      })
    }
  },
  created() {
    this.auth = getAuth()
    this.db = getDatabase()
  }
}
</script>

<style scoped>
/* screen - - */

.x {
  align-items: flex-start;
  background-color: var(--zircon);
  border: 1px none;
  display: flex;
  height: 812px;
  overflow: hidden;
  width: 375px;
}

.x .flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: -1px;
  margin-top: 31px;
  min-height: 781px;
  width: 378px;
}

.x .group-400 {
  align-items: center;
  display: flex;
  height: 45px;
  margin-left: 32.0px;
  min-width: 74px;
}

.x .text-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 45px;
  width: 42px;
}

.x .text-39 {
  height: 21px;
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-right: 2.0px;
  min-width: 26px;
  text-decoration: underline;
  white-space: nowrap;
}

.x .text-40 {
  height: 23px;
  letter-spacing: -0.15px;
  line-height: 22.8px;
  margin-top: 1px;
  min-width: 42px;
  text-align: center;
  white-space: nowrap;
}

.x .vector-2 {
  height: 4px;
  margin-bottom: 19.5px;
  margin-left: 20px;
  width: 8px;
}

.x .text-41 {
  align-self: flex-start;
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xxxl);
  font-weight: 700;
  height: 24px;
  letter-spacing: 0;
  margin-left: 21px;
  margin-top: 30px;
  min-width: 255px;
  text-align: center;
}

.x .view-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  margin-right: 1.0px;
  margin-top: 35px;
  min-height: 77px;
  width: 335px;
}

.x .text-43 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-top: -1px;
  white-space: nowrap;
}

.x .overlap-group {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 10px;
  display: flex;
  height: 36px;
  justify-content: flex-end;
  margin-top: 13px;
  min-width: 335px;
  padding: 0 14.5px;
}

.x .text-4 {
  height: 13px;
  letter-spacing: -0.08px;
  line-height: 18px;
  white-space: nowrap;
  width: 200px;
}

.x .vector {
  height: 12px;
  margin-left: 96px;
  margin-top: 0.77px;
  width: 10px;
}

.x .view {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  margin-right: 1.0px;
  margin-top: 14px;
  min-height: 77px;
  width: 335px;
}

.x .text-container-1 {
  height: 18px;
  margin-top: -1px;
  position: relative;
  width: 265px;
}

.x .text-4-1 {
  height: 18px;
  left: 0;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 120px;
}

.x .text-4-2 {
  color: var(--gunsmoke);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-l);
  font-weight: 600;
  height: 18px;
  left: 34px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.x .text-container-2 {
  height: 18px;
  margin-top: -1px;
  position: relative;
  width: 289px;
}

.x .overlap-group-2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 10px;
  display: flex;
  height: 93px;
  justify-content: flex-end;
  margin-top: 13px;
  min-width: 335px;
  padding: 22.7px 14.5px;
}

.x .text-47 {
  height: 34px;
  letter-spacing: -0.08px;
  line-height: 18px;
  width: 200px;
}

.x .vector-1 {
  align-self: center;
  height: 32px;
  margin-left: 96px;
  margin-top: 1.98px;
  width: 10px;
}

.x .view-2 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 90px;
  margin-right: 1.0px;
  margin-top: 63px;
  padding: 5px 0;
  width: 351px;
}

.x .text-5 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-left: 8px;
  white-space: nowrap;
}

.x .overlap-group3 {
  align-items: center;
  align-self: center;
  background-color: var(--concrete);
  border-radius: 10px;
  display: flex;
  height: 47px;
  margin-top: 13px;
  min-width: 335px;
  padding: 0 2px;
}

.x .overlap-group-3 {
  align-items: flex-start;
  background-color: var(--jewel);
  border-radius: 10px;
  display: flex;
  height: 41px;
  min-width: 168px;
  padding: 11px 63px;
}

.x .text-5-1 {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xxl);
  font-weight: 600;
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  white-space: nowrap;
}

.x .x-1 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-bottom: 1.0px;
  margin-left: 63px;
  min-width: 38px;
  white-space: nowrap;
}

.x .view-3 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 90px;
  margin-right: 1.0px;
  margin-top: 14px;
  padding: 5px 0;
  width: 351px;
}

.x .overlap-group4 {
  align-items: center;
  align-self: center;
  background-color: var(--concrete);
  border-radius: 10px;
  display: flex;
  height: 47px;
  justify-content: flex-end;
  margin-top: 13px;
  min-width: 335px;
  padding: 0 16px;
}

.x .text-54 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-bottom: 1.0px;
  min-width: 69px;
  white-space: nowrap;
}

.x .overlap-group-4 {
  align-items: flex-start;
  background-color: var(--jewel);
  border-radius: 10px;
  display: flex;
  height: 41px;
  justify-content: flex-end;
  margin-left: 20px;
  min-width: 103px;
  padding: 11px 16px;
}

.x .text-52 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-bottom: 1.0px;
  margin-left: 22px;
  min-width: 83px;
  white-space: nowrap;
}

.x .overlap-group6 {
  height: 115px;
  margin-top: 16px;
  position: relative;
  width: 378px;
}

.x .active-tip {
  background-color: var(--jewel);
  border: 1px none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  height: 73px;
  left: 36px;
  position: absolute;
  top: 15px;
  width: 306px;
}

.x .text-56 {
  color: var(--cape-cod);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xxxl);
  font-weight: 700;
  height: 24px;
  left: 138px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 39px;
}

.x .bottombar {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 115px;
  left: 0;
  min-width: 378px;
  padding: 0 1px;
  position: absolute;
  top: 0;
}

.x .overlap-group5 {
  background-image: url(../../public/img/rectangle-26-2@2x.svg);
  background-size: 100% 100%;
  height: 123px;
  margin-top: -8.25px;
  position: relative;
  width: 375px;
}

.x .group-411 {
  align-items: flex-end;
  display: flex;
  height: 40px;
  left: 39px;
  min-width: 296px;
  position: absolute;
  top: 36px;
}

.x .iconly-light-search {
  align-items: flex-end;
  border: 1px none;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  min-width: 24px;
  padding: 1.2px 1.7px;
}

.x .overlap-group-1 {
  height: 21px;
  position: relative;
  width: 20px;
}

.x .ellipse_739 {
  border: 1.5px solid;
  border-color: var(--silver-chalice);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.x .line_181 {
  height: 5px;
  left: 15px;
  position: absolute;
  top: 16px;
  width: 5px;
}

.x .group-411-item {
  height: 24px;
  margin-left: 35px;
  width: 24px;
}

.x .iconly-light-search-1 {
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

.x .ellipse_739-1 {
  border: 1.5px solid;
  border-color: var(--white);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.x .iconly-light-notification {
  height: 24px;
  margin-left: 53px;
  width: 24px;
}

.x .icon {
  align-items: flex-end;
  background-color: var(--soft-peach);
  border: 1px none;
  border-radius: 30px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 60px;
  left: 156px;
  min-width: 60px;
  padding: 16.6px 10.4px;
  position: absolute;
  top: 14px;
}

.x .icon-logo {
  height: 27px;
  width: 39px;
}

.x .job-finder-app-1 {
  height: 4096px;
  margin-left: 1477px;
  margin-top: -1388px;
  object-fit: cover;
  width: 974px;
}

</style>