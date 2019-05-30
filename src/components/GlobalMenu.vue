<template>
  <div class="global-menu">
    <ul>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GlobalMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'profile', path: '/profile' },
        { title: 'portfolios', path: '/portfolios' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
div.global-menu {
  ul {
    margin-left: auto;
    width: 400px;
    display:flex;
    justify-content: center;
    padding: 0;
    list-style: none;

    li {
      width: 100px;
      height: 40px;
      margin-left:5px;
      margin-right:5px;
      font-size: 14px;
      position: relative;

      &:hover {
        opacity: 0.5;
      }

      a {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        color: black;
        text-decoration: none;
      }
    }
  }
}
</style>
