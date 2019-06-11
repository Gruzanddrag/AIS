// core
import "./js/common";
import "./scss/main.scss";

//map
import Vue from "vue";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Map from "./templates/components/map/Map--client";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
export const userLocationBus = new Vue();

new Vue({
  el: "#map",
  render: h => h(Map)
});
