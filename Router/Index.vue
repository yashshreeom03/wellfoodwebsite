<script>

import { createRouter, createWebHistory } from 'vue-router';
import  home from 'pages/home.vue'
import services from '~/pages/services.vue';
import Technology from 'pages/Technology.vue'
import Portfolio from 'pages/Portfolio.vue'
import Company from 'pages/Company.vue'
import Career from 'pages/Career.vue'
import Contact from 'pages/Contact.vue'


const routes = [
  { path: '/', component: home } ,
  { path: '/services', component: services },
  { path: '/technology', component: Technology },
  { path: '/portfolio', component: Portfolio },
  { path: '/company', component: Company },
  { path: '/career', component: Career },
  { path: '/contact', component: Contact },
 


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
</script>