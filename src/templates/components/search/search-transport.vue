<template lang="pug">
.wrapper__transport_search
  .search__route
    h2.search__name Поиск транспорта
    .search__body
      .search__input_wrapper
        input.search__input(placeholder="Остановка или номер маршрута", onfocus="this.placeholder=''", onblur="this.placeholder='Остановка или номер маршрута'")
</template>

<script>
export default {
  name: "SearchTransport"
};
</script>
