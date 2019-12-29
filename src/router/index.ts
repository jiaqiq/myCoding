import Vue from 'vue'
import Router from 'vue-router'
// import navConf from './router.json'
const navConf = require('./router.json')

Vue.use(Router)

let routes:any = [];

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})

let addComponent = (router:any) => {
  router.forEach((route:any) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      // if (route.type === 'other') {
      //   route.component = r => require.ensure([], () =>
      //     r(require(`../other/${route.name}.vue`)))
      //   return
      // }
      route.component = (r:any) => require.ensure([], () =>
        r(require(`../docs/${route.name}.md`)))
    }
  })
}
//console.log(routes)
addComponent(routes)
routes.push({ path: '/', redirect: '/giud' })
export default new Router({
  routes: routes
})


