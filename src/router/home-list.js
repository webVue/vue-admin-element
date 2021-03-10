const homeList = [
    {
        path: '/about',
        name: 'about',
        component: () => import("views/about/about.vue")
    },
    {
        path: 'account',
        name: 'account',
        component: () => import("views/account/account.vue")
    },
    {
        path: 'account-list',
        name: 'account-list',
        component: () => import("views/account/account-list.vue")
    },
    {
        path: 'account-create',
        name: 'account-create',
        component: () => import("views/account/account-create.vue")
    },
    {
        path: 'address',
        name: 'address',
        component: () => import("views/address/address.vue")
    },
    {
        path: 'food',
        name: 'food',
        component: () => import("views/food/food.vue")
    },
    {
        path: 'book',
        name: 'book',
        component: () => import("views/book/book.vue")
    },
    {
        path: 'book1',
        name: 'book1',
        component: () => import("views/book/book1.vue")
    },
    {
        path: 'book2',
        name: 'book2',
        component: () => import("views/book/book2.vue")
    },
    {
        path: '/404',
        name: 'errorPage',
        component: () => import("views/error-page/404.vue")
    },
]

export default homeList;