import {createRouter, createWebHistory} from 'vue-router';
import ListUsersView from '@/view/ListUsersView.vue';
import HomeView from '@/view/HomeView.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/users',
        name: 'Users',
        component: ListUsersView,
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;