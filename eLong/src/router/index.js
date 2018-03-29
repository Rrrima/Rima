import Vue from 'vue'
import Router from 'vue-router'
import Guide from '@/components/Guide'
import '@/style/style.css'
import reset from 'reset-css'


Vue.use(Router)

export default new Router({
  modes:'history',
  routes: [
    {
      path: '/',
      component: Guide
    }
  ]
})
