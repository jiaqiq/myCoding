<template>
  <div id="app">
    <main-header></main-header>
    <div class="app-main">
      <div class="scroll-container">
        <div class="app-main-left">
          <div class="left-warpper">
            <div class="left-scroll">
              <Menu></Menu>
            </div>
          </div>
        </div>
        <div class="app-main-right">
          <div class="right-warpper">
            <router-view/>
          </div>
        </div>
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
    height: 100%;
    margin: 0 auto;
    .scroll-container {
      display: flex;
      display: -webkit-flex;
    }
    .app-main-left {
      position: fixed;
      top: 0;
      bottom: 0;
      min-width: 260px;
      margin-top: 80px;
        .left-warpper {
          height: 100%;
          .left-scroll {
            overflow-x: hidden;
            height: 100%;
            margin-right: 20px;
          }
        }
    }
    .app-main-right {
      margin-left: 260px;
      position: relative;
      flex: 1;
      width: calc(100% - 260px);
      .right-warpper {
        padding: 50px 0;
      }
    }
  }
}
  
</style>

