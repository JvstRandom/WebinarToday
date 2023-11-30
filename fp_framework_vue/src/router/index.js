import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import search_page from '@/components/search_page.vue';
import P_Profile from '@/components/P_Profile.vue';
import U_Profile from '@/components/P_Profile.vue';
import webinar_page from '@/components/webinar_page.vue';
import login from '@/components/login.vue';
import Signup from '@/components/Signup.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/profile penyelenggara',
    component: P_Profile,
  },
  {
    path: '/profile user',
    component: U_Profile,
  },
  {
    path: '/search',
    component: search_page,
  },
  {
    path: '/page',
    component: webinar_page,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/sign up',
    component: Signup,
  },
  // Tambahkan rute lain jika diperlukan
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
