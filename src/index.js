// core
import "./js/common";
import "./scss/main.scss";

//map
import Vue from "vue";
import VueLayers from "vuelayers";
import "vuelayers/lib/style.css";
Vue.use(VueLayers);
import Map from "./templates/components/map/Map";

new Vue({
  el: "#main",
  render: h => h(Map)
});

// eslint-disable-next-line no-unused-vars
var template = require("./index.pug");
