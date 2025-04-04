<script>

import { createRouter, createWebHistory } from 'vue-router';
import Services from '~/pages/services.vue';
import Technology from '~/pages/Technology.vue'
import Projects from '~/pages/Projects.vue'
import Company from '~/pages/Company.vue'
import Career from '~/pages/Career.vue'
import Contact from '~/pages/Contact.vue'


const routes = [
  { path: '/services', component: Services },
  { path: '/technology', component: Technology },
  { path: '/projects', component: Projects },
  { path: '/company', component: Company },
  { path: '/career', component: Career },
  { path: '/contact', component: Contact },
  { path: '/contact', component: Contact },
 


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
</script>