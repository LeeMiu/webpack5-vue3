import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '默认空白页',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/Empty'),
  },
  // {
  //   path: '/pinia',
  //   name: 'Pinia',
  //   meta: {
  //     title: 'Pinia测试',
  //     keepAlive: true,
  //     requireAuth: false,
  //   },
  //   component: () => import('@/components/usePinia'),
  // },
  {
    path: '/vueuse',
    name: 'Vueuse',
    meta: {
      title: 'vueuse测试',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/vueUse'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
