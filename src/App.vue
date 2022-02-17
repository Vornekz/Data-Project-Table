<template>
  <div id="app">
    <Header/>
    <MainNav/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Header from "@/components/Header.vue";
import MainNav from "@/components/MainNav.vue"

@Component({
  name: "App",
  components: {
    Header,
    MainNav,
  }
})

export default class App extends Vue {

}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-size: 16px;

}

</style>
