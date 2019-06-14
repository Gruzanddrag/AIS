<template lang="pug">
  form.form-login__wrapper
    input.form-login__input(placeholder="Введите логин", onfocus="this.placeholder=''", onblur="this.placeholder='Введите логин'")
    input.form-login__input(type="password",placeholder="Введите пароль", onfocus="this.placeholder=''", onblur="this.placeholder='Введите пароль'")
    label.form-login__checkbox__label Запомнить меня
      input.form-login__checkbox(type="checkbox", checked)
      span.form-login__checkbox__checkmark
    button.form-login__submit(type='submit') Авторизоваться
</template>

<style lang="scss">
@import "./form-login";
</style>

<script>
export default {
  name: "LoginForm"
};
</script>
