<!--左侧菜单-->
<template>
  <div class="menu">
    <div v-for="(title, index) in (Object.keys(data))" class="group-container" :key="index">
      <p class="menu-title">{{title}}</p>
      <div class="menu-items" v-for="(nav, index) in data[title]" v-show="nav.desc" :key="index">
        <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav.name" :to="{name: nav.name}">
          {{nav.desc}}
        </router-link>
        <p v-else class="menu-group">{{nav.desc}}</p>
        <div class="menu-items-son" v-for="(item, index) in nav.items" :key="index">
          <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''"
                       class="menu-component">{{item.desc}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import routerConfig from '@/router/router.json/'

  export default {
    data() {
      return {
        data: routerConfig
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/styl/var.styl"
  .menu
    display: inline-block;
    width: 100%;
    color: #3F536E;
    background-color: #fff;
    z-index: 99;
    padding: 50px 0;
    padding-right: 10px;
    .group-container
      margin-bottom: 15px;
    .menu-title
      font-size: 16px;
      color: $color-primary;
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: .15s ease-out;
      font-weight: 700;
    .menu-items
      font-size: 15px;
      font-weight: normal;
      line-height: 1.8;
      a
        display: block;
        position: relative;
        padding: 8px 0 8px;
        color: #3F536E;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
      .menu-group
        padding: 4px 0 4px 0;
        font-size: 12px;
        color: lighten($color-primary, 30%);
      .menu-component
        display: block;
        position: relative;
        padding: 6px 0;
        color: #616367;
        font-size: 15px;
      .active, a:hover
        color: darken($color-primary, 50%);
        font-weight 600
</style>

