/* eslint-disable no-unused-vars */
<template lang="pug">
#map
  l-map(:zoom='zoom', :center='center', ref="myMap")
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "Map",
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line vue/no-unused-components
  components: { LMap, LTileLayer, LMarker },
  data: function() {
    return {
      map: null,
      tileLayer: null,
      layers: [
        {
          id: 0,
          name: "Restaurants",
          active: false,
          features: []
        }
      ]
    };
  },
  mounted() {
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap() {
      // eslint-disable-next-line no-undef
      this.map = L.map("map").setView([38.63, -90.23], 12);
      // eslint-disable-next-line no-undef
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      );
      this.tileLayer.addTo(this.map);
    },
    initLayers() {}
  }
};
</script>
