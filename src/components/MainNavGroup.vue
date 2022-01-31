<template>
 <div class="group">
   <div class="group__element"
        v-for="(element, i) in group"
        :key="`element-${i}`">
     <p class="group__element-text">{{ element.name }}</p>
     <span class="group__element-count">{{ element.count }}</span>
   </div>
 </div>
</template>

<script lang="ts">
interface GroupType {
  allCount: {
    name:string,
    count: number,
    selected: boolean
  },
  notStartedCount: {
    name:string,
    count: number,
    selected: boolean
  },
  planingCount: {
    name:string,
    count: number,
    selected: boolean
  },
  inProgressCount: {
    name:string,
    count: number,
    selected: boolean
  },
  completedCount: {
    name:string,
    count: number,
    selected: boolean
  },
  droppedCount: {
    name:string,
    count: number,
    selected: boolean
  },
  archivedCount: {
    name:string,
    count: number,
    selected: boolean
  },
}

export default {
  name: "MainNav-group",

  data() {
    return {
      group: {
        allCount: {
          name: "All",
          count: 0,
          selected: true
        },
        notStartedCount: {
          name: "Not started",
          count: 0,
          selected: false
        },
        planingCount: {
          name: "Planing",
          count: 0,
          selected: false
        },
        inProgressCount: {
          name: "In progress",
          count: 0,
          selected: false
        },
        completedCount: {
          name: "Completed",
          count: 0,
          selected: false
        },
        droppedCount: {
          name: "Dropped",
          count: 0,
          selected: false
        },
        archivedCount: {
          name: "Archived",
          count: 0,
          selected: false
        },

      } as GroupType,

      selectedIndex: 0 as number,
    }
  },

  methods: {
    selectElement(index: number): void {
      this.group[this.selectedIndex].selected = false;

    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/mixins";

.group {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 200px;
  padding: 10px 30px;

  div:last-child {
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 10%;
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

}
</style>