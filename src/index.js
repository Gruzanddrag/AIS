// core
import "./js/common";
import "./scss/main.scss";

//map
import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import * as Vue2Leaflet from "vue2-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
import Map from "./templates/components/map/Map";

new Vue({
  el: "#main",
  render: h => h(Map)
});

// eslint-disable-next-line no-unused-vars
var template = require("./index.pug");
