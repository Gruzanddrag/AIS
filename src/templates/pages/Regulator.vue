<template lang="pug">
.regulator
  Map
  Menubar
</template>

<script>
import Map from "~src/templates/components/map/Map--regulator";
import Menubar from "~src/templates/components/menu/Menu--regulator";
export default {
  name: "Regulator",
  components: {
    Map,
    Menubar
  }
};
</script>
