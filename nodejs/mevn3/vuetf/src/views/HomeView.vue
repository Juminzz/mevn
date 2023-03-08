<template>
  <div>
    <h2>특강 Part3. tfjs 활용</h2>
    <a href="http://www.tensorflow.org/js" target="_blank"
      >www.tensorflow.org</a
    >
    <hr />
    <h3>외부링크들</h3>
    <ol>
      <li v-for="i in 9" :key="i">
        <a :href="'http://localhost:8080/danfo0' + i + '.html'">{{
          `danfo0${i}.html`
        }}</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>
