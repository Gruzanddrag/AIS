// core
import "./js/common";
import "./scss/main.scss";

//map
import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Map from "./templates/components/map/Map";

new Vue({
  el: "#main",
  render: h => h(Map)
});
