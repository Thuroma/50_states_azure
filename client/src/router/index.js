import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import NotFound from '@/components/NotFound'
import StatesVisited from '@/components/StatesVisited'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            // https://next.router.vuejs.org/giude/essentials/dynamic-matching.html#catch-all-404-not-found-route
            path: '/:pathMatch(.*)*',   // match anything that's not one of the other routes
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/statesVisited',
            name: 'StatesVisited',
            component: StatesVisited
        }
    ]
})