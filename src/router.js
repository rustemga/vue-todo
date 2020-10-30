import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home"

Vue.use(Router) //регистрируем роутер как плагин

export default new Router({//новый экземпляр класса Router с объектом в конструкторе
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        }
    ]
})