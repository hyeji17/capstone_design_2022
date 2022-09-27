<template>
<v-app>
  <v-main>
      <v-container>
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
        </v-form>
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

<style>
</style>