<template>
  <section>
    <div class="mainNav">
      <div class="select">
        <label for="actions" class="select__label"><span>{{ selectedCheckbox }}</span> selected</label>
        <select name="actions" id="actions" class="select__actions">
          <option value="Actions" selected hidden>Actions</option>
          <option value="Edit">Edit</option>
          <option value="Archive">Archive</option>
          <option value="Delete">Delete</option>
        </select>
        <button class="select__button">&#10005;</button>
      </div>
      <form class="search">
        <div class="search__filter">
          <label for="group" class="search__filter-label">
            <svg>
              <use xlink:href="@/assets/sprite.svg#group"></use>
            </svg>
          </label>
          <select name="group" id="group" class="search__filter-select">
            <option value="All" selected hidden>All</option>
          </select>
        </div>
        <div class="search__input">
          <label for="search" class="search__input-label">
            <svg>
              <use xlink:href="@/assets/sprite.svg#search"></use>
            </svg>
          </label>
          <input type="search" name="search" id="search" class="search__input-place" placeholder="Search">
        </div>
      </form>
      <button class="mainNav__button" @click="closeOpenWindow">
        <svg>
          <use xlink:href="@/assets/sprite.svg#plus"></use>
        </svg>
        New Project
      </button>
    </div>
    <MainNavGroup class="mainNavGroup"/>
    <CreateProject :window-closed="windowClosed" :close-open-window="closeOpenWindow"/>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import MainNavGroup from "@/components/MainNavGroup.vue"
import CreateProject from "@/components/CreateProject.vue";

@Component({
  name: "MainNav",
  components: {
    MainNavGroup,
    CreateProject
  },
})

export default class MainNav extends Vue {

  private windowClosed: boolean = false;

  closeOpenWindow() {
    this.windowClosed = !this.windowClosed
  }

  get selectedCheckbox(): number {
    return 24
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.mainNav {
  display: grid;
  grid-template-columns: 300px 300px 1fr;
  grid-column-gap: 20px;
  align-items: center;
  padding: 30px;

  .select {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 40px;

    &__label {

      span {
        @include countCircle;
      }
    }

    &__actions {
      @include searchBorder(100px, 6px);
      padding: 5px 10px;
    }

    &__button {
      border: none;
      outline: none;
      background-color: transparent;
      color: #ea3b51;

      &:hover {
        color: #5E5ADB;
      }
    }
  }

  .search {
    display: flex;
    align-items: center;

    &__filter {
      position: relative;

      &-label {
        position: absolute;
        left: 15px;
        top: 10px;

        svg {
          fill: #464F60;
          width: 12px;
          height: 14px;
        }
      }

      &-select {
        @include searchBorder(80px, 6px 0 0 6px);
        padding-left: 30px;
      }
    }

    &__input {
      position: relative;

      &-label {
        position: absolute;
        left: 15px;
        top: 10px;

        svg {
          fill: #868FA0;
          width: 12px;
          height: 14px;
        }
      }

      &-place {
        @include searchBorder(200px, 0 6px 6px 0);
        padding-left: 30px;
      }
    }
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    justify-self: flex-end;
    @include searchBorder(130px, 6px);
    background-color: #5E5ADB;
    color: #fff;

    svg {
      fill: #fff;
      width: 12px;
      height: 14px;
    }
  }
}

.mainNavGroup {
  width: 80%;
}
</style>