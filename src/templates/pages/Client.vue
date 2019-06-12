<template lang="pug">
#app
  Map
  userControls
</template>

<script>
import Map from "~src/templates/components/map/Map--client";
import userControls from "~src/templates/components/controls/controls-user";

export default {
  name: "ClientPage",
  components: {
    Map,
    userControls
  }
};
</script>
