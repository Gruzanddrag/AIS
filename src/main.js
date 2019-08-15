//libs
import Vue from "vue";
import VueRouter from "vue-router";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import vuetify from './vtf';
import Vuex from 'vuex';
import axios from "axios";

// import 'vuetify/dist/vuetify.min.css'
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
//routes
import router from "./routes";
Vue.use(VueRouter);
//Vuex
Vue.use(Vuex);
//components
import App from "./App.vue";
// core
import "./js/common";
import "./scss/main.scss";
// import { stat } from "fs";
//bus
export const userLocationBus = new Vue();


const store = new Vuex.Store({
  state: {
    carsGeo: [{}]
  },
  mutations: {
    updateGeo(state, carsNewGeo) {
      state.carsGeo = carsNewGeo;
    }
  },
  getters: {
    findCarById: state => carId => {
      return state.carsGeo.find(car => car.vehicleId === carId);
    },
    carsGeo: state => {
      let res = []
      state.carsGeo.forEach(el => {
        res.push([el.latitude, el.longitude])
      })
      return res;
    }
  }
});

new Vue({
  el: "#map",
  store,
  vuetify,
  render: h => h(App),
  router
});
