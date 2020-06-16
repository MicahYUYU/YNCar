import Vue from 'vue'
import VueRouter from 'vue-router'

// import Layout from '../components/layout'
import Home from '../views/home'
import Appointment from '../views/Appointment'
import About from '../views/About'
import Enterprise from '../views/Enterprise'
import Watch from '../views/Watch'
Vue.use(VueRouter)


//具体页面在views下面对应页面
//header和footer写在了components下面，模仿主页调用<y-header>（驼峰式写法）
const routes = [
    {
        path: '/',
        name: '主页',
        component: Home
    },
    {
        path: '/appointment',
        name: '车辆检测',
        component: Appointment
    },
    {
        path: '/watch',
        name: '陪同看车',
        component: Watch
    },
    {
        path: '/about',
        name: '关于一诺',
        component: About
    },
    {
        path: '/enterprise',
        name: '企业动态',
        component: Enterprise
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
    // {
    //     path: '/',
    //     name: 'layout',
    //     component: Layout,
    //     redirect: '/home',
    //     children: [
    //         {
    //             path: '/home',
    //             name: '首页',
    //             component: Home
    //         }
    //     ]
    // }
]

const router = new VueRouter({
    routes
})

export default router
