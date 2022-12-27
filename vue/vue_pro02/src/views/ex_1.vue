<template>
  <div class="ex_1">
    <h3>변수 머스타치 사용하기</h3>
    <h1>안녕하세요. {{ vname }}반갑습니다. {{ age }}살 입니까?</h1>
    <hr />
    <h3>v-on 기능 사용하기</h3>
    <button v-on:click="func('안녕 팝업이야!')">클릭버튼</button>
    <button @dblclick="func('안녕 팝업이야!')">더블클릭버튼</button>
    <hr />
    <h3>v-if 조건문</h3>
    <h1 v-if="status">제가 보이나요?</h1>
    <!-- false되면 스크립트 날림 -->
    <h1 v-show="status">제가 보이나요?</h1>
    <!-- display 스타일이 됨 -->
    <button v-on:click="status = true">보이게 할게요.</button>
    <button v-on:click="status = false">숨길게요.</button>
    <button v-on:click="status = !status">보이면숨기고 안보이면 보이게.</button>
    <hr />
    <!-- v-on:keyup는 값이 동시에 전달 되게 한다. -->
    <h3>v-model 양방향 데이터</h3>
    <input type="text" v-model="inData" v-on:keyup="func(inData + ' 손땠음')" />
    <input
      type="text"
      v-model="inData"
      v-on:keyup.enter="func(inData + ' 엔터침')"
    />
    <h2>{{ inData }}</h2>
    <hr />
    <h3>v-for 사용하기</h3>
    <button v-on:click="add">추가하기</button>
    <button v-on:click="sub">삭제하기</button>
    <ul>
      <!-- key 필수 -->
      <li v-for="data in arrData" :key="data">{{ data }}</li>
    </ul>
    <p>추가한 값 : {{ anum }}</p>
    <p>삭제한 값 : {{ dnum }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    // 리턴 해줘야함
    return {
      vname: '홍길동 ',
      age: 20,
      status: false,
      inData: '',
      arrData: [1, 2, 3, 4, 5],
      dnum: 0,
      anum: 0
    }
  },
  methods: {
    func: function (text) {
      alert(text)
    },
    add: function () {
      this.arrData.push(this.arrData.length + 1)
      this.anum = this.arrData.length
      this.dnum = ''
    },
    sub: function () {
      this.dnum = this.arrData.pop()
      this.anum = ''
    }
  }
}
</script>

<style>
ul {
  display: flex;
  margin: 0;
}
li {
  position: relative;
  margin: 0 20px;
}
li > text {
  margin-left: -1px;
}
button {
  margin: 0 10px;
}
input {
  margin: 0 10px;
}
</style>
