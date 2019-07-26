<template lang="pug">
     v-card(max-width="334" class="first-card")
         v-card-title I'm a title
         v-card-text I'm card text
         v-card-actions
             v-btn(text) Click
</template>

<script>
    export default {
        name: "TableComponent"
    };
</script>