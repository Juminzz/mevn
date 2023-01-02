<template>
  <div><h1>채팅창</h1></div>
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <title>채팅창</title>
    </head>
    <body>
      <div>
        <h3>{{ message }}</h3>
      </div>
      <ul id="messages">
        <form action="" id="form">
          <input id="input" autocomplete="off" v-model="message" />
          <button @click="chatting">전송</button>
        </form>
      </ul>
    </body>
  </html>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      socket: null,
      message: '',
      h3: ''
    }
  },
  methods: {
    chatting() {
      // this.h3 = this.message
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding-bottom: 3rem;
}
#form {
  background: rgba(0, 0, 0, 0.2);
  padding: 4px;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  display: flex;
  height: 45px;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}
#input {
  border: none;
  padding: 0 16px;
  flex-grow: 1;
  border-radius: 32px;
  margin: 4px;
}
#input:focus {
  outline: none;
}
#form button {
  background: #333;
  border: none;
  padding: 0.1rem;
  margin: 4px;
  border-radius: 5px;
  outline: none;
  color: #fff;
}
#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages > li {
  padding: 8px 16px;
}
#messages > li:nth-child(odd) {
  /* 홀수만 */
  background: #efefef;
}
</style>
