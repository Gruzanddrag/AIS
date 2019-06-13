<template lang="pug">
.login__wrapper
  .login__container
    p.login__descr.
      Региональная система управления автомобильным транспортом
      и городским наземным электрическим транспортом, осуществляющим
      регулярную перевозку пассажиров и багажа
      #[br]
      #[strong.portal__name АИС «Управление транспортом»]

    p.login__descr Региональный сегмент субъекта РФ Ставропольский край

    login-form
</template>

<style lang="scss">
.login {
  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("/assets/static/img/login-bg.jpg");
  }

  &__container {
    width: 100%;
    max-width: 820px;
  }

  &__descr {
    @extend .paragraph;

    font-size: rem(24);
    line-height: rem(36);
    color: $white;
    text-align: center;
  }
}

.portal {
  &__name {
    font-weight: bold;
    line-height: rem(28);
  }
}
</style>

<script>
import LoginForm from "../components/form/form-login";

export default {
  name: "LoginPage",
  components: {
    LoginForm
  }
};
</script>
