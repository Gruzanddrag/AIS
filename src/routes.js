import VueRouter from "vue-router";
import ClientPage from "./templates/pages/Client";
import LoginPage from "./templates/pages/Login";
import Regulator from "./templates/pages/Regulator";

export default new VueRouter({
  routes: [
    {
      path: "",
      component: ClientPage
    },
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/regulator",
      component: Regulator
    }
  ]
});
