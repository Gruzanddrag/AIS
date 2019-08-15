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
      cars: []
    };
  },
  created() {
    userLocationBus.$on("placeMarker", cords => {
      this.$refs.myGeo.mapObject.bindPopup("MY GEO");
      return (this.marker = cords);
    });
  },
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
            this.cars = res.data; //сохраняем данные о машинах
            console.log(this.cars);
          });
      });
    //начинаем опрашивать сервак
    setInterval(() => {}, 100);
  }
};
</script>
