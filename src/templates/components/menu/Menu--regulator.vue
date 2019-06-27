<template lang="pug">
- var menuArray = [{'name': 'Данные','link': 'data', 'items': ['Администрирование', 'Импорт отчетов', 'Экспорт отчетов', 'Печать']},{'name': 'Правка','link': 'edit','items': ['Добавление', 'Удаление', 'Копировать']},{'name': 'Документы','link': 'documents'},{'name': 'Отчеты','link': 'report'},{'name': 'Мониторинг','link': 'monitor'},{'name':'Контроль','link': 'control'},{'name': 'Информирование','link': 'info'},{'name': 'Статистика и аналитика','link': 'stats'},{'name': 'Жалобы и предложения','link': 'suggest'}];
- var userName = "Алексеев А.";

nav.menu-wrapper
  .menu__item-wrapper
    each item in menuArray
      a.menu__item(href='#' + item.link, @click="setActive")= item.name
        if item.items != undefined
          .menu__item_submenu
            each subitem in item.items
              a= subitem
  .menu__user-account
    p #{userName}
    a(href="#") Выход
</template>

<style lang="scss">
.menu {
  &-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    z-index: 400;
    width: 100%;
    padding: 15px 20px;
    background-color: $accent;
  }

  &__item {
    position: relative;
    margin: 0 10px;
    color: $white !important;

    &:hover {
      cursor: pointer;
      text-decoration: none;

      &::after {
        visibility: visible;
      }
    }

    &::after {
      position: absolute;
      left: 0;
      bottom: -19px;
      content: "";
      width: 100%;
      visibility: hidden;
      height: 2px;
      background-color: $white;
    }

    &_submenu {
      position: absolute;
      top: 50px;
      left: 0;
      display: none;
      flex-direction: column;
      padding: 15px 20px;
      background-color: $accent;
      border-radius: 3px;
    }

    &.is-active {
      .menu__item_submenu {
        display: flex;
      }
    }
  }

  &__user {
    &-account {
      display: flex;
      color: $white;

      p {
        margin: 0 10px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Menubar",
  methods: {
    setActive: function(event) {
      event.preventDefault();
      let currentItem = event.target;
      let items = document.querySelectorAll(".menu__item");
      currentItem.classList.add("is-active");

      items.forEach(item => {
        if (item.classList.contains("is-active") && event.target != item) {
          item.classList.toggle("is-active");
        }
      });
    }
  }
};
</script>
