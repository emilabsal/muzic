import { createRouter, createWebHistory } from 'vue-router';
import ViewWallet from '@/views/ViewWallet.vue';
import ViewWalletArtist from '@/views/ViewWalletArtist.vue';

const routes = [
  {
    path: '/',
    name: 'wallet',
    component: ViewWallet,
  },
  {
    path: '/wallet/artist',
    name: 'wallet-artist',
    component: ViewWalletArtist,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
