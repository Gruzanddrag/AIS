import VueRouter from "vue-router";
import ClientPage from "./templates/pages/Client";
import LoginPage from "./templates/pages/Login";

export default new VueRouter({
  routes: [
    {
      path: "",
      component: ClientPage
    },
    {
      path: "/login",
      component: LoginPage
    }
  ]
});
