import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/myrole",
    name: "MyRole",
    component: () =>
      import(/* webpackChunkName: "myrole" */ "@/views/MyRoleView.vue"),
  },
  {
    path: "/lastmodified",
    name: "LastModified",
    component: () =>
      import(/*webpackChunkName: "lastmodified" */ "@/views/LastModified.vue"),
  },
  {
    path: "/members",
    name: "Members",
    component: () =>
      import(/*webpackChunkName: "member" */ "@/views/MembersView.vue"),
  },
  {
    path: "/sections",
    name: "Sections",
    component: () =>
      import(/*webpackChunkName: "sections" */ "@/views/SectionsView.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/*webpackChunkName: "projects" */ "@/views/ProjectsView.vue"),
  },
  {
    path: "/roles",
    name: "Roles",
    component: () =>
      import(/*webpackChunkName: "roles" */ "@/views/RolesView.vue"),
  },
  {
    path: "/editmoderators",
    name: "EditModerators",
    component: () =>
      import(
        /*webpackChunkName: "editmoderators" */ "@/views/EditModeratorsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
