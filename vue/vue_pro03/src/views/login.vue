<template>
  <div class="login-page">
    <h1>로그인 페이지</h1>
  </div>
  <div class="login-text">
    <input
      v-model="text"
      class="bt-a"
      type="text"
      placeholder="닉네임을 입력하세요."
      @keyup.enter="submit"
    />
    <button id="login-bt" @click="submit">확인</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: [],
      name: '',
      text: ''
    }
  },
  methods: {
    submit() {
      alert(this.text + '님 안녕하세요')
      window.open('../chat', '_self')
    }
  }
}
</script>

<style>
#login-bt {
  margin-left: 20px;
}
.login-text {
  margin-top: 200px;
}
.login-page {
  text-align: center;
}
.login-text {
  text-align: center;
}
</style>
