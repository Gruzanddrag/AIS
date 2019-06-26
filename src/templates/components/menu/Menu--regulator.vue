<template lang="pug">
- var menuArray = ['Данные', 'Правка', 'Документы', 'Отчеты', 'Мониторинг', 'Контроль', 'Информирование', 'Статистика и аналитика','Жалобы и предложения'];
- var userName = "Алексеев А.";

nav.menu-wrapper
  .menu__item-wrapper
    each val in menuArray
      a.menu__item(href="#")= val
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
  name: "Menubar"
};
</script>
