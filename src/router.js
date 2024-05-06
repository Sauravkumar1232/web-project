import { createRouter, createWebHistory } from "vue-router";
// import UserList from "./components/UserList";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/HelloWorld.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("./components/SignUp.vue"),
  },
  {
    path: "/bookCreate",
    name: "BookCreate",
    component: () => import("./components/BookCreate.vue"),
  },
  {
    path: "/userList",
    name: "UserList",
    component: () => import("./components/UserList.vue"),
  },
  {
    path: "/userEdit/:id",
    name: "UserEdit",
    component: () => import("./components/UserEdit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
