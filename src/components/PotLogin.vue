<template>
<v-app>
  <v-main>
      <v-container>
<input type="hidden" id="anPageName" name="page" value="screen" />
    <div class="container-center-horizontal">
      <div class="screen screen" >
        <div class="flex-col">
          <!-- <div class="div" style="overflow-y: scroll; height: 800px;"> -->
          <img class="icon" src="img/icon-3@2x.svg" alt="Icon" />
          <div class="text-59 dmsans-bold-eerie-black-24px">로그인</div>
          <div class="text-60 dmsans-normal-masala-14px">전화번호로 로그인합니다.</div>
        <v-form ref="formFirst">
          <div class = "PhoneNumber">
            <v-col>
              <h6> 휴대전화 번호</h6>
              <h6> -포함해서 입력하세요 ex. 010-1234-5678</h6>
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
              <v-text-field v-model = "identifiernum" label = "identifier" :rules="[value => !!value || '인증번호를 입력 하세요.']"  placeholder="휴대전화로 발송된 인증번호 4자리를 입력하세요"></v-text-field>
            </v-col>
          <div class="form-1"> 
          <div class="button" @click="Login()"><div class="login dmsans-bold-white-14px" style="top:-50px; postion:relative">로그인</div></div>
          </div>
          </div>
        </v-form>
        <img class="job-finder-app-1" src="img/job-finder-app-1@1x.png" alt="job finder app 1" />
      </div>
      </div>
      </div>
    <!-- </div> -->

<!-- 
        <v-form ref="formFirst">
          <div class = "PhoneNumber">
            <v-col>
              <h6> 휴대전화 번호</h6>
              <h6> -포함해서 입력하세요 ex. 010-1234-5678</h6>
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
              <v-text-field v-model = "identifiernum" label = "identifier" :rules="[value => !!value || '인증번호를 입력 하세요.']"  placeholder="휴대전화로 발송된 인증번호 4자리를 입력하세요"></v-text-field>
            </v-col>
            <v-btn @click="Login()">로그인</v-btn>
          </div>
        </v-form> -->
      </v-container>
  </v-main>
</v-app>
</template>

<script>

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
      confirmationResult : null
    };
  },
  methods: {
    onSignInSubmit() {
      console.log(this.msg)
    },
    setKeyIdentifier() {
      firebaseAuth.setKeyIdentifier(this)
    },
    Login(){
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
/* @import url("../../public/css/screen.css") */
/* screen - screen */

.screen {
  align-items: flex-start;
  background-color: var(--zircon);
  border: 1px none;
  cursor: pointer;
  display: flex;
  height: 812px;
  overflow: hidden;
  width: 375px;
}

.screen .flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 28px;
  min-height: 684px;
  width: 335px;
}

.screen .icon {
  height: 23px;
  margin-left: 1.0px;
  width: 34px;
}

.screen .text-59 {
  align-self: flex-start;
  letter-spacing: -0.72px;
  margin-left: 24px;
  margin-top: 49px;
  min-height: 31px;
}

.screen .text-60 {
  letter-spacing: 0;
  line-height: 19.2px;
  margin-top: 15px;
  min-height: 19px;
  white-space: nowrap;
  width: 287px;
}

.screen .form {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  margin-left: 1.0px;
  margin-top: 37px;
  min-height: 76px;
  width: 334px;
}

.screen .title {
  letter-spacing: 0;
  line-height: 16.4px;
  margin-left: 23px;
  margin-top: -1px;
  min-height: 16px;
  white-space: nowrap;
}

.screen .overlap-group {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--mercury);
  border-radius: 15px;
  display: flex;
  height: 50px;
  margin-top: 11px;
  min-width: 334px;
  padding: 14px 22px;
}

.screen .place-holder {
  letter-spacing: 0;
  line-height: 19.2px;
  min-height: 19px;
  white-space: nowrap;
}

.screen .form-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  margin-left: 1.0px;
  margin-top: 18px;
  min-height: 76px;
  width: 334px;
}

.screen .place-holder-1 {
  letter-spacing: 0;
  line-height: 16.4px;
  min-height: 16px;
  white-space: nowrap;
}

.screen .button {
  align-items: flex-start;
  background: linear-gradient(180deg, rgb(249.26, 135.89, 31.24) 0%, rgb(255, 119.34, 76.5) 100%);
  border: 1px none;
  border-radius: 20px;
  box-shadow: 0px 10px 30px #c942101a;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  margin-top: 289px;
  padding: 15px 20px;
  width: 335px;
}

.screen .login {
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-top: -1.00px;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.screen .job-finder-app-1 {
  height: 4096px;
  margin-left: 1424px;
  margin-top: -466px;
  object-fit: cover;
  width: 974px;
}

</style>