<template lang="pug">
.mapcont
  map-Map(style="width: 100%, height: 100%", :zoom="zoom", :center="initialLocation" :options="{zoomControl: false}", ref="osm")
    map-Tile(:url="url")
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    mapMap: LMap,
    mapTile: LTileLayer
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
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    };
  }
};
</script>
