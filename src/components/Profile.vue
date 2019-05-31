<template>
  <div class="profile">
    <div class="content">
      <h2>{{ title }}</h2>
      <div class="abount-me">
        <p v-for="(profile, index) in profiles" :key=index>
          <span class="tag">{{ profile.tag }} : </span> 
          <span class="text">{{ profile.text }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      title: 'My Profile', 
      profiles: [
        { tag:'名前', text:'gudtanuki' },
        { tag:'性別', text:'女' },
        { tag:'年齢', text:'22' },
        { tag:'居住地', text:'Japan, Tokyo' },
        { tag:'趣味', text:'スマホゲーム、プログラミング、シーシャ、睡眠！' },
        { tag:'最近はじめたこと', text:'ジム' },
        { tag:'ひとこと', text:'よろしくお願いします！' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$mb: 640px;
@mixin max-screen($break-point) {
  @media screen and (max-width: $break-point) {
    @content
  }
}

div.abount-me {
  text-align: left;
  display: inline-block;
  @include max-screen($mb) {
    margin: 0 15%;
  }
  span {
    vertical-align: top;
    display: inline-block;
  }
  span.tag {
    width: 150px;
  }
  span.text {
    width: 300px;
  }   
}
</style>
