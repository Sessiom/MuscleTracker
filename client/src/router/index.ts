import { createRouter, createWebHashHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { getSession } from '@/model/session';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    { path: "/login", name: "login", component: LoginView },
    {
      path: "/MyActivity",
      name: "MyActivity",
      component: () => import("../views/MyActivityView.vue"),
      beforeEnter: requireLogin,
    },
    {
      path: "/Friends",
      name: "Friends",
      component: () => import("../views/FriendsActivity.vue"),
     // beforeEnter: requireLogin,
    },
    {
      path: "/Admin",
      name: "Admin",
      component: () => import("../views/AdminView.vue"),
      beforeEnter: requireAdmin,
    }
  ],
});

function requireLogin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  
  const session = getSession();
  if(!session.user){
    session.redirectUrl = to.fullPath;
    next('/login');
  }else{
    next();
  }
}

function requireAdmin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const session = getSession();
  if(!session.user){
    session.redirectUrl = to.fullPath;
    next('/login');
  }else if(session.user.role !== 'admin'){
    next('/');
  }else{
    next();
  }
}

export default router