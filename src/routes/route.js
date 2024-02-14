import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue")
    },

    {
        path: "/blog",
        name: "blog",
        component: () => import("../views/Blog.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    },
})

export default router;