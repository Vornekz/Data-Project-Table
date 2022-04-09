<template>
  <div class="header">
    <h1 class="header__title">Projects</h1>
    <div class="header__count">{{headerCount}}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
  name: "Header",
})

export default class Header extends Vue{

  get headerCount():number {
      return 4
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  background-color: #F7F9FC;
  text-align: center;

  &__title {
    margin-right: 10px;
  }

  &__count {
    font-size: 20px;
    @include countCircle();
  }
}
</style>