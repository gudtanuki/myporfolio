<template>
    <div class="portfolios">
        <h2>{{ title }}</h2>
        <div class="contents">
            <p>{{ url }}{{ name }}{{ endurl }}</p>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolios',
    data () {
        return {
            title: 'My Portfolios',
            name: 'Myblog', 
            text: 'Laravelで簡易的ではありますがブログアプリを作成しました。',
            url: '<a href="http://gudblog.herokuapp.com/">',
            endurl: '</a>'
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

div.contents {
  @include max-screen($mb) {
    margin: 0 15%;
  }
}
</style>
