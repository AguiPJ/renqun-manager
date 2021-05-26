import {createRouter, createWebHashHistory} from "vue-router";

export const routes = [
    {
        path: '/',
        component: () => import("./home"),
        name: "主页"
    },
    {
        name: "报警管理",
        path:"/alert",
        component: () => import("./alert"),
        children: [
            {
                path: '/receive',
                component: () => import("./receive"),
                name: "接收管理",
            }, {
                path: '/lishi',
                component: () => import("./lishi"),
                name: "历史报警",
            }
        ]
    },
    {
        path: '/区域管理',
        component: () => import("./quyu"),
        name: "区域管理"
    }, {
        path: '/数据备份',
        component: () => import("./back"),
        name: "数据备份"
    }, {
        path: '/统计分析',
        component: () => import("./tongji"),
        name: "统计分析"
    },{
        path: '/table',
        component: () => import("../components/my-table"),
        name: "table"
    },

]

export default createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})