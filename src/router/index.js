import { createRouter, createWebHistory } from 'vue-router';
import ViewWallet from '@/views/ViewWallet.vue';

const routes = [
  {
    path: '/',
    name: 'wallet',
    component: ViewWallet,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
