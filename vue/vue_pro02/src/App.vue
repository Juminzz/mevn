<template>
  <div>
  <h2>구구단 표 만들기</h2>
  <button v-on:click="func()">시작하기</button><br><br><br><br><br><br>
  </div>
  
    <table v-on:click="func()" class="dd">
      <tr></tr>
      <tr></tr>  
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
    </table>
</template>

<script>
  export default {
    name: 'app',
    data (){
      return{
        gu :0,
      }
    },
    methods:{
      func :function(){
        prompt('2 ~ 9 중 하나를 적어주세요');
        let p =document.createElement('p');
        if(prompt){
          document.body.append(p)
          p.textContent = prompt.value
        }
      },
      // gugu :function(){
      //   for(let i=0;i<10;i++){
      //     td += 'dd'
      //   }
      // }
    }
  }
</script>

<style>
  
</style>
