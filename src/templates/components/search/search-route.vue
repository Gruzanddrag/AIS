<template lang="pug">
.wrapper
  .search__route
    h2.search_name Поиск маршрута
    .search_body
      button.search_invert
        svg(width='11', height='74', viewBox='0 0 11 74', fill='none', xmlns='http://www.w3.org/2000/svg')
          path(d='M8.92188 64.5234H3.84375V66.7266H5.67188C7.01042 66.7266 8.07031 67.0521 8.85156 67.7031C9.63802 68.349 10.0312 69.2214 10.0312 70.3203C10.0312 71.4245 9.64062 72.3125 8.85938 72.9844C8.08333 73.651 7.04948 73.9896 5.75781 74H1.47656V62.625H8.92188V64.5234ZM3.84375 68.6172V72.1172H5.71094C6.3099 72.1172 6.78646 71.9531 7.14062 71.625C7.5 71.2969 7.67969 70.8568 7.67969 70.3047C7.67969 69.7891 7.50781 69.3828 7.16406 69.0859C6.82552 68.7839 6.35938 68.6276 5.76562 68.6172H3.84375Z', fill='white')
          path(d='M7.55469 9.65625H3.44531L2.66406 12H0.171875L4.40625 0.625H6.57812L10.8359 12H8.34375L7.55469 9.65625ZM4.07812 7.75781H6.92188L5.49219 3.5L4.07812 7.75781Z', fill='white')
          path(fill-rule='evenodd', clip-rule='evenodd', d='M4.97188 27.2375C5.26355 26.9208 5.73645 26.9208 6.02812 27.2375L10.7812 32.3974C11.0729 32.7141 11.0729 33.2275 10.7812 33.5441C10.4896 33.8608 10.0167 33.8608 9.72499 33.5441L6.24688 29.7683V44.2317L9.72499 40.4559C10.0167 40.1392 10.4896 40.1392 10.7812 40.4559C11.0729 40.7725 11.0729 41.2859 10.7812 41.6026L6.02812 46.7625C5.73645 47.0792 5.26355 47.0792 4.97188 46.7625L0.218756 41.6026C-0.0729188 41.2859 -0.0729188 40.7725 0.218756 40.4559C0.510432 40.1392 0.98333 40.1392 1.27501 40.4559L4.75312 44.2317V29.7683L1.27501 33.5441C0.98333 33.8608 0.510432 33.8608 0.218756 33.5441C-0.0729188 33.2275 -0.0729188 32.7141 0.218756 32.3974L4.97188 27.2375Z', fill='#FF7733')
      .search__input_wrapper
        input.search__input(placeholder="Откуда (улица, дом, нас. пункт, организация)", onfocus="this.placeholder=''", onblur="this.placeholder='Откуда (улица, дом, нас. пункт, организация)'")
        input.search__input(placeholder="Куда (улица, дом, нас. пункт, организация)", onfocus="this.placeholder=''", onblur="this.placeholder='Куда (улица, дом, нас. пункт, организация)'")
</template>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 10px;
  left: 10px;
  width: auto;
  height: auto;
  z-index: 400;
}
</style>

<style lang="scss">
.search {
  &__route {
    width: 460px;
    max-width: 100%;
    height: auto;
    background: #21242b;
    border-radius: 3px;
    padding: 20px 15px;
  }

  &_name {
    color: #fff;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 16px;
  }

  &_body {
    display: flex;
    flex: 1 0 100%;
    justify-content: space-between;
    align-items: stretch;
  }

  &__input {
    width: 100%;
    max-width: 360px;
    max-height: 45px;
    padding: 13px 13px 14px 13px;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 3px;
    color: #fff;

    &::placeholder {
      font-size: 16px;
      line-height: 19px;
      color: rgba(255, 255, 255, 0.75);
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.75);
    }

    &_wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
    }
  }

  &_invert {
    text-orientation: upright;
    writing-mode: tb-rl !important;
    width: 100%;
    max-width: 45px;
    height: 100px;
    margin-right: 10px;
    color: #fff;
    background: #21242b;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 3px;

    &:hover {
      border-color: rgba(255, 255, 255, 0.45);
    }

    &:focus {
      border-color: #ff7733;
    }
  }
}
</style>

<script>
export default {
  name: "SearchRoute"
};
</script>
