import homeList from './home-list'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("views/home/home"),

        redirect: '/about',
        children: [
            ...homeList
        ]
    },
    // 登录路由 后续要是可以的话 有注册路由
    {
        path: '/login',
        name: 'login',
        component: () => import("views/login/login.vue")
    },
    // 错误路由重定向
    {
        path: '/*',
        redirect: '/404'
    }
]


export default routes;