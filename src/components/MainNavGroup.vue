<template>
  <div class="group">
    <div class="group__element"
         v-for="(element, i) in group"
         :key="`element-${i}`"
         :class="{'selected': element.selected}"
         @click="selectElement(i)"
    >
      <p class="group__element-text">{{ element.name }}</p>
      <span class="group__element-count">{{ element.count }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import Vue from "vue";

interface GroupType {
  name: string,
  count: number,
  selected: boolean
}


@Component({
  name: "MainNavGroup"
})

export default class MainNavGroup extends Vue {

  private group: GroupType[] = [
    {
      name: "All",
      count: 0,
      selected: true
    },
    {
      name: "Not started",
      count: 0,
      selected: false
    },
    {
      name: "Planing",
      count: 0,
      selected: false
    },
    {
      name: "In progress",
      count: 0,
      selected: false
    },
    {
      name: "Completed",
      count: 0,
      selected: false
    },
    {
      name: "Dropped",
      count: 0,
      selected: false
    },
    {
      name: "Archived",
      count: 0,
      selected: false
    },
  ];

  private selectedIndex: number = 0;

  selectElement(index: number): void {
    this.group[this.selectedIndex].selected = false;
    this.selectedIndex = index;
    this.group[this.selectedIndex].selected = true;
  }

}

</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.group {
  display: grid;
  position: relative;
  grid-template-columns: 130px 130px 130px 130px 130px 130px 150px;
  grid-column-gap: 20px;
  padding: 10px 30px;

  div:last-child {
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: -10%;
      width: 1px;
      height: 100%;
      background-color: #D5DBE5;
    }
  }

  &__element {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    min-width: 125px;
    cursor: pointer;

    &:hover {
      color: #5E5ADB;
    }

    &-text {
      margin-right: 10px;
    }

    &-count {
      @include countCircle();
    }

  }

  .selected {
    color: #5E5ADB;

    &:before {
      content: "";
      position: absolute;
      bottom: -5px;
      width: 100%;
      height: 3px;
      background-color: #5E5ADB;
    }
  }
}


</style>