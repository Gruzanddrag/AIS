<template lang="pug">
    .compTable
        TableComponent
</template>

<style lang="scss">
    .first-card{
        margin: auto;
        margin-top: 50px;
    }
</style>

<script>
    import TableComponent from "~src/templates/components/table/table";
    export default {
        name: "Table",
        components: {
            TableComponent
        }
    };
</script>
