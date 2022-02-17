<template>
  <section class="create">
    <header class="create__header">
      <h3>Add new Project</h3>
    </header>
    <form class="create__project" onsubmit="return false">
      <div class="create__project-name project-name">
        <label for="" class="project-name__label">
          Project name
        </label>
        <input type="text" class="project-name__input" required maxlength="30">
      </div>
      <div class="create__project-status project-status">
        <h4 class="project-status__title">Project status</h4>
        <label class="project-status__label"
               v-for="label in statusInput"
               :key="`label-${label.id}`"
               :for="label.id"
               :class="{'checked': label.status === checked}"
        >
          {{ label.status }}
        </label>
        <input type="radio"
               required
               class="project-status__radio"
               v-for="radio in statusInput"
               :key="`radio-${radio.id}`"
               :id="radio.id"
               :value="radio.status"
               v-model="checked"
               name="status"
        />

      </div>
    </form>
  </section>

</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import Vue from "vue";

interface Status {
  status: string;
  id: string,
}

@Component({
  name: "CreateProject"
})

export default class CreateProject extends Vue {
  private checked: string = "";
  private statusInput: Status[] = [
    {
      status: "Not Started",
      id: "notStarted"
    },
    {
      status: "Planing",
      id: "planing"
    },
    {
      status: "In Progress",
      id: "inProgress"
    },
    {
      status: "Completed",
      id: "completed"
    },
    {
      status: "Dropped",
      id: "dropped"
    }
  ]
}
</script>

<style lang="scss" scoped>
.create {
  position: absolute;
  right: 10%;
  top: 20%;
  width: 450px;
  height: 650px;
  border: 2px rgba(70, 79, 96, 0.88) solid;
  border-radius: 15px;
  background-color: #E5E5E5;

  &__header {
    width: 100%;
    height: 60px;
    padding: 20px;
    border-radius: 15px 15px 0 0;
    background-color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  .project-name {
    display: flex;
    flex-direction: column;
    padding: 10px 20px;

    &__label {
      margin-bottom: 10px;
    }

    &__input {
      height: 30px;
      border: 1px #9fa5b0 solid;
      border-radius: 5px;
      padding-left: 10px;
    }
  }

  .project-status {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 20px;

    &__title {
      width: 100%;
      margin-bottom: 5px;
    }

    .checked {
      background-color: #5E5ADB;
      color: #fff;
    }

    &__label {
      padding: 5px;
      margin: 10px 10px 10px 0;
      background-color: #fff;
      border: 1px #9fa5b0 solid;
      border-radius: 5px;
    }

    &__radio {
      display: none;
    }
  }
}


</style>