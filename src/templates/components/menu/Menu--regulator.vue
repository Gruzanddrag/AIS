<template lang="pug">
- var userName = "Алексеев А.";

nav.menu-wrapper
  .menu__item-wrapper
      a.menu__item(v-for="item in menu", :href="'#' + item.link", :data-target="'#' + item.link", @click="setActive") {{ item.name }}
          .menu__item_submenu(v-if="item.items != undefined")
              a(v-for="submenu in item.items") {{ submenu }}
  .menu__user-account
    p #{userName}
    a(href="#") Выход
  .menu--statistics
    .menu--statistics__sidebar
      p some info
    .menu--statistics__main
      p some info
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
      z-index: 500;
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

  &--statistics {
    position: fixed;
    display: flex;
    width: 100%;
    bottom: 0;
    left: 0;
    height: calc(100% - 56px);
    background: rgba(33, 36, 43, 0.65);
    color: #fff;
    transition: transform 1s ease;
    transform: translateX(-100%);

    &__sidebar {
      width: 100%;
      max-width: 320px;
      height: 100%;
      padding: 15px 20px 15px 30px;
      background: rgba(33, 36, 43, 0.35);
    }

    &__main {
      width: 100%;
      padding: 25px 85px 60px 80px;
    }

    &.is-active {
      transform: translateX(0);
    }
  }
}
</style>

<script>
export default {
  name: "Menubar",
  data() {
    return {
      menu: [
        {
          name: "Данные",
          link: "data",
          items: [
            "Администрирование",
            "Импорт отчетов",
            "Экспорт отчетов",
            "Печать"
          ]
        },
        {
          name: "Правка",
          link: "edit",
          items: ["Добавление", "Удаление", "Копировать"]
        },
        { name: "Документы", link: "documents" },
        { name: "Отчеты", link: "report" },
        { name: "Мониторинг", link: "monitor" },
        { name: "Контроль", link: "control" },
        { name: "Информирование", link: "info" },
        { name: "Статистика и аналитика", link: "stats" },
        { name: "Жалобы и предложения", link: "suggest" }
      ]
    };
  },
  methods: {
    setActive: function(event) {
      event.preventDefault();
      let currentItem = event.target;
      let items = document.querySelectorAll(".menu__item");
      let map = document.querySelector(".vue2leaflet-map");
      currentItem.classList.add("is-active");

      items.forEach(item => {
        if (item.classList.contains("is-active") && event.target != item) {
          item.classList.toggle("is-active");
        } else if (
          item.classList.contains("is-active") &&
          item.dataset.target == "#stats"
        ) {
          let stats = document.querySelector(".menu--statistics");
          stats.classList.add("is-active");
        }

        map.addEventListener("click", function() {
          if (item.classList.contains("is-active")) {
            item.classList.remove("is-active");
          }
        });
      });
    }
  }
};
</script>
