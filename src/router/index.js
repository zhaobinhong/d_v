/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2017-12-27 11:24:06
 * @Last Modified time: 2017-12-27 11:24:06
 * @Description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Castle from '@/components/fantasy/castle/Castle'
import Fireworks from '@/components/stride/fireworks/Fireworks'
import simpleLineChartII from '@/components/line'
import pie from '@/components/pie'
import bar from '@/components/bar'
import timeline from '@/components/timeline'
import Sailor from '@/components/excleamation/sailor/Sailor'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [{
      path: 'index',
      component: Castle
    }, {
      path: 'index/detail',
      component: Fireworks
    }, {
      path: 'index/lineD3SimpleChartII',
      component: simpleLineChartII
    }, {
      path: 'index/bar',
      component: bar
    }, {
      path: 'index/pie',
      component: pie
    }, {
      path: 'index/timeline',
      component: timeline
    }, {
      path: 'excleamation/sailor',
      component: Sailor
    }]
  }]
})
