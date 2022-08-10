import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addGoods',
    name: 'AddGoods',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddGoods.vue')
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue')
  },
  {
    path: '/screenShort',
    name: 'ScreenShort',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScreenShort.vue')
  },
  {
    path: '/cropper',
    name: 'Cropper',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cropper.vue')
  },
  {
    path: '/countUp',
    name: 'CountUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/CountUp.vue')
  },
  {
    path: '/qrCode',
    name: 'QrCode',
    component: () => import(/* webpackChunkName: "about" */ '../views/QrCode.vue')
  },
  {
    path: '/copy',
    name: 'Copy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Copy.vue')
  },
  {
    path: '/drag',
    name: 'Drag',
    component: () => import(/* webpackChunkName: "about" */ '../views/Drag.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "about" */ '../views/Video.vue')
  },
  {
    path: '/pdf',
    name: 'Pdf',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pdf.vue')
  },
  {
    path: '/chartDouble',
    name: 'ChartDouble',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChartDouble.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table.vue')
  },
  {
    path: '/html2canvas',
    name: 'Html2Canvas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Html2Canvas.vue')
  },
  {
    path: '/screenCapture',
    name: 'ScreenCapture',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScreenCapture.vue')
  },
  {
    path: '/copyTo',
    name: 'CopyTo',
    component: () => import(/* webpackChunkName: "about" */ '../views/CopyTo.vue')
  },
  {
    path: '/randomColor',
    name: 'RandomColor',
    component: () => import(/* webpackChunkName: "about" */ '../views/RandomColor.vue')
  },
  {
    path: '/vue-codemirror',
    name: 'Vue-codemirror',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vue-codemirror.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
