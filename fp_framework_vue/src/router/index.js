import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< HEAD
import Home from '@/view/Home.vue';
import search_page from '@/view/webinar/search_page.vue';
import P_Profile from '@/view/profile/P_Profile.vue';
import U_Profile from '@/view/profile/U_Profile.vue';
import webinar_page from '@/view/webinar/webinar_page.vue';
import login from '@/view/register/login.vue';
import Signup from '@/view/register/Signup.vue';
import Dashboard from '@/view/dashboard/dashboard.vue';
import daftarWebinar from '@/view/webinar/daftarWebinar.vue'
import addWebinar from '@/view/webinar/addWebinar.vue';
import loginUser from '@/view/register/login_u.vue';
import SignupUser from '@/view/register/Signup_U.vue';
=======
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
import loginUser from '@/components/login_U.vue';
import SignupUser from '@/components/Signup_U.vue';
>>>>>>> 3cb3cd0a676c2c9df16ce0993f0d354b7d09c8e6

const routes = [
  {
    path: '/',
    component: Home,
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
  {
    path: '/loginuser',
    component: loginUser,
    meta: { showHeader: true, showFooter: true },
  },
  {
    path: '/signUpUser',
    component: SignupUser,
    meta: { showHeader: true, showFooter: true },
  },
  // {
  //   path: '/editWebinar/:webinar_id/:organisasi_id',
  //   name: 'editWebinar',
  //   component: PlayerEdit
  // },
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
