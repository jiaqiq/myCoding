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

<style lang="scss" scoped>
#app {
  .app-main {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    .app-main-left {
      min-width: 230px;
      position: relative;
    }
    .app-main-right {
      position: relative;
      padding-top: 15px;
      flex: 1;
      max-width: calc(100% - 230px);
    }
  }
}
  
</style>

