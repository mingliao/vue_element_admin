import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);

const Login = _import('login/index');

Vue.use(Router);

export const constantRouterMap = [
    {path:'/login',component:Login,hidden:true},
]

export default new Router({
    scrollBehavior: ()=>({y:0}),
    routes:constantRouterMap
})