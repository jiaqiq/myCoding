<template>
  <div id="app">
    <main-header></main-header>
    <div class="app-main">
      <div class="app-main-left">
        <Menu></Menu>
      </div>
      <div class="app-main-right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from './components/menu.vue';
export default {
  name: 'App',
  components:{
    Menu
  }
}
</script>

<style lang="stylus">
#app
  .app-main
    display: flex;
    min-width: 1101px;
    margin: 0 auto 50px auto;
    width: 85%;
    .app-main-left
      min-width 230px
      position relative
    .app-main-right
      position relative
      padding-top 15px
      flex 1
</style>

