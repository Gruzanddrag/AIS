<template lang="pug">
  form.form-login__wrapper(@submit.prevent='submit' action="#")
    input.form-login__input(placeholder="Введите логин", onfocus="this.placeholder=''", onblur="this.placeholder='Введите логин'" v-model="login")
    input.form-login__input(type="password",placeholder="Введите пароль", onfocus="this.placeholder=''", onblur="this.placeholder='Введите пароль'" v-model="pass")
    label.form-login__checkbox__label Запомнить меня
      input.form-login__checkbox(type="checkbox", checked)
      span.form-login__checkbox__checkmark
    button.form-login__submit(type='submit') Авторизоваться
</template>

<style lang="scss">
@import "./form-login";
</style>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";

export default {
  name: "LoginForm",
  mixins: [validationMixin],
  data() {
    return {
      login: "",
      pass: "",
      submitStatus: null
    };
  },
  validations: {
    login: {
      required
    },
    pass: {
      required
    }
  },
  methods: {
    submit() {
      // check client-side errors
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        console.log("error");
      } else {
        this.submitStatus = "PENDING";
        this.auth();
      }
    },
    auth() {
      //auth
      if (this.login != null && this.pass != null) {
        let authData = JSON.stringify({
          login: this.login,
          password: this.pass
        });
        axios
          .post("http://165.22.244.227/auth/token", authData)
          .then(res => {
            localStorage.access_token = res.data.token;
            this.$router.push("/regulator");
          })
          // eslint-disable-next-line no-unused-vars
          .catch(error => {
            console.log("U had made mistake!");
            //Todo: Сделать вывод ошибки валидации на форме
          });
      }
    }
  }
};
</script>
