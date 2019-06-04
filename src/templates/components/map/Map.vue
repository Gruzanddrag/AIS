<template lang="pug">
#map
  vl-map(:load-tiles-while-animating='true', :load-tiles-while-interacting='true', data-projection='EPSG:4326', style='height: 100%',)
    vl-view(:zoom.sync='zoom', :center.sync='center', :rotation.sync='rotation',)
    vl-geoloc(@update:position='geolocPosition = $event')
      template(slot-scope='geoloc')
        vl-feature#position-feature(v-if='geoloc.position')
          vl-geom-point(:coordinates='geoloc.position')
          vl-style-box
            vl-style-icon(src='_media/marker.png', :scale='0.4', :anchor='[0.5, 1]')
    vl-layer-tile#osm
      vl-source-osm
</template>

<style lang="scss">
.ol-zoom {
  display: none;
}
</style>

<script>
export default {
  data() {
    return {
      zoom: 11,
      center: [402.0045926372336, 45.05981946751842],
      rotation: 0,
      geolocPosition: undefined
    };
  }
};
</script>
