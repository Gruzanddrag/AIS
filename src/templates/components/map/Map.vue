<template lang="pug">
.mapcont
  map-Map(style="width: 100%, height: 100%", :zoom="zoom", :center="initialLocation" :options="{zoomControl: false}", ref="osm")
    map-Tile(:url="url")
    map-Marker(:lat-lng="marker")
  searchRoute
  searchTransport
  mapControls
  userControls
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import searchRoute from "../search/search-route";
import searchTransport from "../search/search-transport";
import mapControls from "../controls/contols-map";
import userControls from "../controls/controls-user";
import { userLocationBus } from "../../../index";

export default {
  name: "Map",
  components: {
    mapMap: LMap,
    mapTile: LTileLayer,
    mapMarker: LMarker,
    searchRoute,
    searchTransport,
    mapControls,
    userControls
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
      marker: [-100, -100]
    };
  },
  created() {
    userLocationBus.$on("placeMarker", cords => {
      return (this.marker = cords);
    });
  }
};
</script>
