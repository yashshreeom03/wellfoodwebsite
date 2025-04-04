function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "Career",
    path: "/Career",
    component: () => import("../pages/Career.vue.mjs")
  },
  {
    name: "Company",
    path: "/Company",
    component: () => import("../pages/Company.vue.mjs")
  },
  {
    name: "Contact",
    path: "/Contact",
    component: () => import("../pages/Contact.vue.mjs")
  },
  {
    name: "Projects",
    path: "/Projects",
    component: () => import("../pages/Projects.vue.mjs")
  },
  {
    name: "services",
    path: "/services",
    component: () => import("../pages/services.vue.mjs")
  },
  {
    name: "Technology",
    path: "/Technology",
    component: () => import("../pages/Technology.vue.mjs")
  },
  {
    name: "CareerDetail",
    path: "/CareerDetail",
    component: () => import("../pages/CareerDetail.vue.mjs")
  },
  {
    name: "projectsDetail",
    path: "/projectsDetail",
    component: () => import("../pages/projectsDetail.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt_D__2025-04-04_wellfoodwebsite_.nuxt_routes.mjs.map
