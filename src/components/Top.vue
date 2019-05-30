<template>
  <div class="top">
    <h1>{{ title }}</h1>
    <div class="indtruction">
      <p>{{ introduction }}</p>
    </div>
    <div class="websights">
      <div class="sigt" v-for="(web, index) in webs" :key=index>
        <i v-bind:class=web.icon></i><a v-bind:href=web.url>{{ web.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      title: 'Welcome to My Portfolio Page',
      introduction: 'Vueを勉強するために作ったポートフォリオ？サイトです。随時更新されます。',
      webs: [
        { icon:'fab fa-twitter-square', name:'Twitter', url:'https://twitter.com/gudtanuki' },
        { icon:'fab fa-github-square', name:'GitHub', url:'https://github.com/gudanago' },
        { icon:'fas fa-pen-square', name:'qiita', url:'https://qiita.com/gudanago' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  a{
    color: black;
  }
</style>
