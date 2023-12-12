import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import search_page from '@/components/search_page.vue';
import P_Profile from '@/components/P_Profile.vue';
import U_Profile from '@/components/U_Profile.vue';
import webinar_page from '@/components/webinar_page.vue';
import login from '@/components/login.vue';
import Signup from '@/components/Signup.vue';
import Dashboard from '@/components/dashboard.vue';
import daftarWebinar from '@/components/daftarWebinar.vue'
import addWebinar from '@/components/addWebinar.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { showHeader: true, showFooter: true },
  },
  {
    path: '/profile-penyelenggara',
    component: P_Profile,
    meta: { showHeader: true, showFooter: true },
  },
  {
    path: '/profile-user',
    component: U_Profile,
    meta: { showHeader: true, showFooter: true },
  },
  {
    path: '/search',
    component: search_page,
    meta: { showHeader: true, showFooter: true },
  },
  {
    path: '/page/:id',
    component: webinar_page,
    meta: { showHeader: true, showFooter: true },
  },
  {
    path: '/login',
    component: login,
    meta: { showHeader: true, showFooter: true },
  },
  {
    path: '/sign-up',
    component: Signup,
    meta: { showHeader: true, showFooter: true },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { showHeader: true, showFooter: true, requiresAuth: true },
  },
  {
    path: '/daftar',
    component: daftarWebinar,
    meta: { showHeader: true, showFooter: true },
  },
  {
    path: '/addWebinar',
    component: addWebinar,
    meta: { showHeader: true, showFooter: true },
  },
  // Tambahkan rute lain jika diperlukan
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
