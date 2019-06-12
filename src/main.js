//libs
import Vue from "vue";
import VueRouter from "vue-router";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
//routes
import router from "./routes";
Vue.use(VueRouter);
//components
import App from "./App.vue";
// core
import "./js/common";
import "./scss/main.scss";
//bus
export const userLocationBus = new Vue();

new Vue({
  el: "#map",
  render: h => h(App),
  router
});
