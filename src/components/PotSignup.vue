<template>
<v-app>
  <v-main>
      <v-container>
        <input type="hidden" id="anPageName" name="page" value="screen2" />
    <div class="container-center-horizontal">
      <div class="screen2 screen">
        <div class="flex-col">
        <div class="div" style="overflow-y: scroll; height: 800px;">
          <img class="icon" src="img/icon-4@2x.svg" alt="Icon" />
          <div class="text-61 dmsans-bold-eerie-black-24px">회원가입</div>
          <p class="text-62 dmsans-normal-masala-14px">본인의 이름, 전화번호, 이메일 정보를 수집합니다.</p>
          <v-form ref="formFirst">
            <div class="form-1">
              <!-- <div class="title dmsans-normal-masala-12px">이름</div> -->
              <!-- <div class="overlap-group"><div class="place-holder dmsans-normal-silver-chalice-14px">김배달</div></div> -->
              <v-col>
                <h6>이름</h6>
                <v-text-field v-model = "name" label = "name" :rules="[value => !!value || '이름을 입력 하세요.']" placeholder="김배달"> </v-text-field>
              </v-col>
            </div>
            <div class="form">
              <!-- <div class="title dmsans-normal-masala-12px">E-mail</div> -->
              <!-- <div class="overlap-group">
                <div class="place-holder dmsans-normal-silver-chalice-14px">baedalpot@gmail.com</div>
            </div> -->
              <v-col>
                <h6>e-mail주소</h6>
                <v-text-field v-model = "email" label ="email" :rules="[value => !!value || '이메일을 입력 하세요.']" placeholder="baedalpot@gmail.com"></v-text-field>
              </v-col>
            </div>
            <div class="form">
              <!-- <div class="title dmsans-normal-masala-12px">휴대전화번호</div>
              <div class="overlap-group">
                <div class="place-holder dmsans-normal-silver-chalice-14px">010-1234-5678</div>
              </div> -->
              <v-col>
                <h6> 휴대전화 번호(-포함해서 입력하세요)  </h6>
                <v-text-field v-model = "phonenum" label = "phonenum" :rules="[value => !!value || '전화번호를 입력 하세요.']" placeholder="010-1234-5678"></v-text-field>
                <div id = "recaptcha-container" ></div>
                <v-btn @click="setKeyIdentifier()">인증받기</v-btn>
              </v-col>
            </div>
          </v-form>
          <div class="form">
            <!-- <div class="title dmsans-normal-masala-12px">인증번호</div>
            <div class="overlap-group">
              <p class="place-holder-1 dmsans-normal-silver-chalice-12px">
                휴대전화로 발송된 인증번호 4자리를 입력하세요
              </p>
            </div> -->
            <v-form ref="formSecond">
              <div class = "IdentifierNum">
                <v-col>
                  <h6>인증번호 입력</h6>
                  <v-text-field v-model = "identifiernum" label = "identifier" :rules="[value => !!value || '인증번호를 입력 하세요.']" placeholder="휴대전화로 발송된 인증번호 6자리를 입력하세요"></v-text-field>
                </v-col>
                <v-checkbox label = "개인정보수집, 위치정보수집에 동의합니다." v-model="agree" class="type-here"> </v-checkbox>
              </div>
            </v-form>
          </div>

          <!-- <div class="checkbox"><div class="type-here">개인정보수집, 위치정보수집에 동의합니다.</div></div> -->
          <div class="group-458">
            <div class="button" @click="SignIn()"><div class="create-an-account dmsans-bold-white-14px">회원가입</div></div>
            <a href="/login">
              <div class="button-1"><div class="create-an-account-1">기존 계정으로 로그인하기</div></div></a
            >
          </div>
        </div>
        <img class="job-finder-app-1" src="img/job-finder-app-1@1x.png" alt="job finder app 1" />
        </div>
      </div>
    </div>




        <!-- <v-form ref="formFirst">
          <div class =  "Name">
            <v-col>
              <h6>이름</h6>
              <v-text-field v-model = "name" label = "name" :rules="[value => !!value || '이름을 입력 하세요.']" placeholder="김배달"> </v-text-field>
            </v-col>
          </div>
          <div class = "Email">
            <v-col>
            <h6>e-mail주소</h6>
            <v-text-field v-model = "email" label ="email" :rules="[value => !!value || '이메일을 입력 하세요.']" placeholder="baedalpot@gmail.com"></v-text-field>
            </v-col>
          </div>
          <div class = "PhoneNumber">
            <v-col>
              <h6> 휴대전화 번호</h6>
              <h6> -포함해서 입력하세요 </h6>
              <v-text-field v-model = "phonenum" label = "phonenum" :rules="[value => !!value || '전화번호를 입력 하세요.']" placeholder="010-1234-5678"></v-text-field>
              <div id = "recaptcha-container" ></div>
              <v-btn @click="setKeyIdentifier()">인증받기</v-btn>
            </v-col>
          </div>
        </v-form>
        <v-form ref="formSecond">
          <div class = "IdentifierNum">
            <v-col>
              <h6>인증번호 입력</h6>
              <v-text-field v-model = "identifiernum" label = "identifier" :rules="[value => !!value || '인증번호를 입력 하세요.']" placeholder="휴대전화로 발송된 인증번호 4자리를 입력하세요"></v-text-field>
            </v-col>
            <v-checkbox label = "개인정보수집, 위치정보수집에 동의합니다." v-model="agree"> </v-checkbox>
            <v-btn @click="SignIn()">회원가입</v-btn>
          </div>
        </v-form> -->
      </v-container>
  </v-main>
</v-app>
</template>

<script>
import "../../public/css/screen2.css"
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from '../firebase/auth'

export default {
  data() {
    return {
      msg: "인증 완료!",
      auth: getAuth(),
      // phonenum : '+1 650-555-1234',
      phonenum : '',
      // appVerifier : window.recaptchaVerifier(),
      name : "",
      email : "",
      identifiernum : "",
      confirmationResult : null,
      agree: false
    };
  },
  methods: {
    onSignInSubmit() {
      console.log(this.msg)
    },
    setKeyIdentifier() {
      firebaseAuth.setKeyIdentifier(this)
    },
    SignIn(){
      if (!this.agree) {
        alert('약관에 동의 해주세요.')
        return
      }
      firebaseAuth.Confirm(this)
    },
    // Login(){
    //   window.confirmationResult.confirm(this.code).then(() => {
    //     // User signed in successfully.
    //     // const user = result.user;
    //     // ...
    //   }).catch(() => {
    //     // User couldn't sign in (bad verification code?)
    //     // ...
    //   });

    //   var credential = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, this.code);

    //   firebase.auth().signInWithCrendential(credential);
    // },
    LogOut(){
      signOut(this.auth).then(() => {
        // Sign-out successful.
      }).catch(() => {
        // An error happened.
      });
    },
    beforeCreate() {
      onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user.email);
        this.$router.push({ path: "PotMain" });
        // ...
      } else {
        console.log("not logged in");
        // User is signed out
        // ...
      }
    });
  },

  }
};
</script>

<style scoped>

</style>