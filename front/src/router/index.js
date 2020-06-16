import Vue from 'vue'
import VueRouter from 'vue-router'

// import Layout from '../components/layout'
import Home from '../views/home'
import Appointment from '../views/Appointment'
import About from '../views/About'
import Enterprise from '../views/Enterprise'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/appointment',
        name: 'Appointment',
        component: Appointment
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/enterprise',
        name: 'Enterprise',
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
