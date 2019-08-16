<template lang="pug">
.mapcont
  map-Map(style="width: 100%, height: 100%", :zoom="zoom", :center="initialLocation" :options="{zoomControl: false}", ref="osm")
    map-Tile(:url="url")
    map-Marker(:lat-lng="marker", ref="myGeo")
  .wrapper__search
    searchRoute
    searchTransport
    routeList
  mapControls

</template>

<style lang="scss">
.wrapper {
  &__search {
    position: absolute;
    top: 10px;
    left: 10px;
    width: auto;
    height: auto;
    z-index: 400;
  }
}
</style>

<script>
// eslint-disable-next-line no-unused-vars
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import searchRoute from "../search/search-route";
import searchTransport from "../search/search-transport";
import mapControls from "../controls/contols-map";
import { userLocationBus } from "~src/main";
import RouteList from "../list/route-list";
import { setInterval } from "timers";
import axios from "axios";
import { mapState } from "vuex";

var carIcon = L.icon({
  iconUrl: "./assets/static/img/car.png",
  iconSize: [64, 64], // size of the icon
  iconAnchor: [32, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
});

export default {
  name: "Map",
  components: {
    mapMap: LMap,
    mapTile: LTileLayer,
    mapMarker: LMarker,
    searchRoute,
    searchTransport,
    mapControls,
    //userControls,
    routeList: RouteList
  },
  props: {
    initialLocation: {
      type: [Object, Array],
      default: () => [45.044502, 41.969065]
    },
    zoom: {
      type: Number,
      default: 13
    }
  },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      marker: [-100, -100],
      sessionID: "",
      cars: [],
      carMarkers: []
    };
  },
  created() {
    userLocationBus.$on("placeMarker", cords => {
      return (this.marker = cords);
    });
  },
  computed: mapState(["carsGeo"]),
  mounted() {
    //TODO: Сделать это как вход или что-то типа подобного!
    axios
      .get("http://194.58.104.20/Login.php?login=Диспетчер&password=12345678")
      .then(res => {
        this.sessionID = res.data.SessionId; // сохраняем id сессиии
        return res.data.SessionId;
      })
      .then(sessoinID => {
        //После получения id сессии получаем сразу же список машин
        axios
          .get("http://194.58.104.20/GetVehicles.php", {
            params: {
              sessionid: sessoinID
            }
          })
          .then(res => {
            this.cars = res.data; //сохраняем данные пше  о машинах
            this.cars.forEach(car => {
              this.carMarkers[car.vehicleId] = L.marker([-100, -100], {
                title: car.stateNumber,
                icon: carIcon
              })
                .bindPopup(
                  "<i style='color: blue'>" +
                    car.deviceType +
                    "</i> <br/> <b>" +
                    car.stateNumber +
                    "</b>"
                )
                .addTo(this.$refs.osm.mapObject);
              // console.log(this.carMarkers);
            });
          });
      });
    //начинаем опрашивать сервак
    setInterval(() => {
      axios
        .get("http://194.58.104.20/GetVehicleLastLocations.php", {
          params: {
            sessionid: this.sessionID
          }
        })
        .then(res => {
          this.$store.commit("updateGeo", res.data); //Отправляю данные в сторадж
        });
    }, 500);
    this.$store.watch(
      (state, getters) => getters.carsGeo,
      (newValue, oldValue) => {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
          console.log("PROIZOSHEL UPDATE");
          this.$store.state.carsGeo.forEach(car => {
            this.carMarkers[car.vehicleId].setLatLng([
              car.latitude,
              car.longitude
            ]); //двигаю маркеры (надо еще будет обсудить, так как походу надо будет еще внутри массива смотреть измнилось ли шо, ведь когда у меня одна машина пошевелилась он будет всем маркеры обновлять, но эт потом)
          });
        }
      },
      {
        deep: true
      }
    );
  }
};
</script>
