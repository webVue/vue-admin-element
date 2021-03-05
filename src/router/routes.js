const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("views/home/home")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("views/login/login.vue")
    },
    {
        path: '/account',
        name: 'account',
        component: () => import("views/account/account.vue")
    },
    {
        path: '/address',
        name: 'address',
        component: () => import("views/address/address.vue")
    },
    {
        path: '/404',
        name: 'errorPage',
        component: () => import("views/error-page/404.vue")
    },
    {
        path: '/food',
        name: 'food',
        component: () => import("views/food/food.vue")
    },
    {
        path: '/*',
        redirect: '/404'
    }
]


export default routes;