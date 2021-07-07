<template>
  <!-- kakao login
 1.JavascriptKey
 2.platform domain url
 3.redirect url
 4.public > index.html > sdk 추가
 5.main.js 에서 javascriptkey 입력
 6.로그인 컴포넌트 view > login.vue
 6.로그인 컴포넌트 router > index.js
 7.로그아웃 method 추가-->
  <div>
    <h1>{{ user.email ? "로그인성공!" : "로그인후사용하세요" }}</h1>
    <a v-show="!user.email" id="custom-login-btn" @click="kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>
    <button v-show="user.email" @click="kakaoLogout()">카카오로그아웃</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname,account_email,gender",
        success: this.getKakaoAccount(),

        //   console.log(response);
        // },
        fail: function (error) {
          console.log(error);
        },
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakaoAccount = res.kakao_account;
          console.log(kakaoAccount);

          this.$store.commit("user", kakaoAccount);
        },
      });
    },
    kakaoLogout() {
      if (!Kakao.Auth.getAccessToken()) {
        console.log("Not logged in.");
        return;
      }
      Kakao.Auth.logout((res) => {
        console.log(Kakao.Auth.getAccessToken());
        console.log(res);
        this.$store.commit("user", {});
      });
    },
  },
};
</script>