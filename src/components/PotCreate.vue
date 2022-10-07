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
import '../../public/css/-.css'
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

</style>