<template lang="pug">
.wrapper
  .search__route
    h2.search_name Поиск транспорта
    .search_body
      .search__input_wrapper
        input.search__input(placeholder="Остановка или номер маршрута", onfocus="this.placeholder=''", onblur="this.placeholder='Остановка или номер маршрута'")
</template>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 190px;
  left: 10px;
  width: auto;
  height: auto;
  z-index: 400;
}

.search {
  &__input {
    max-width: 420px;
  }
}
</style>

<script>
export default {
  name: "SearchTransport"
};
</script>
