import { createRouter, createWebHistory } from 'vue-router'
import Labels from './labels'
import store from '../../store/index'
import Base from '../views/Base.vue'

const routes: Array<any> = [
  { name: "Login", path: '/login',  component: () => import('../views/Login.vue')},
  {
    path: '/',
    name: 'Adm',
    component: Base,
    children: Labels,
  }
]


const router = createRouter({

  history: createWebHistory(process.env.BASE_URL ? process.env.BASE_URL : ''),
  routes
})

router.beforeEach((to, from, next) => {
      store.commit('changeName', to.name);
      if(!localStorage.getItem("token") && to.name != "Login")
        router.push({ path: '/login' });
      next();
});

export default router
