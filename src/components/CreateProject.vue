<template>
  <section class="create" v-if="windowClosed">
    <header class="create__header">
      <h3>Add new Project</h3>
    </header>
    <form class="create__project" onsubmit="return false">
      <div class="project-name">
        <label for="projectName" class="project-name__label">
          Project name
        </label>
        <input type="text" class="project-name__input" required maxlength="30" id="projectName" v-model="name">
      </div>
      <div class="project-status">
        <h4 class="project-status__title">Project status</h4>
        <label class="project-status__label"
               v-for="label in statusInput"
               :key="`label-${label.id}`"
               :for="label.id"
               :class="{'checked': label.status === status}"
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
               v-model="status"
               name="status"
        />
      </div>
      <div class="project-timeline">
        <h4 class="project-timeline__title">Project timeline</h4>
        <select name="timeGroup" id="timeGroup" v-model="select" class="project-timeline__select">
          <option value="start">Start time</option>
          <option value="range">Range time</option>
        </select>
        <div class="project-timeline__date" v-if="select === 'start'">
          <date-picker v-model="startTime" valueType="DD/MM/YYYY" format="DD/MM/YYYY" placeholder="DD/MM/YYYY"
                       :required="select === 'start'">
          </date-picker>
        </div>
        <div class="project-timeline__range" v-if="select === 'range'">
          <date-picker v-model="rangeTime" valueType="DD/MM/YYYY" format="DD/MM/YYYY"
                       placeholder="DD/MM/YYYY ~ DD/MM/YYYY"
                       range :required="select === 'range'">
          </date-picker>
        </div>
      </div>
    </form>
    <footer class="create__footer">
      <button class="cancel" @click="closeOpenWindow">Cancel</button>
      <button class="add-project" @click="addAndClose(name, status, timeline)">Add project
      </button>
    </footer>
  </section>
</template>

<script lang="ts">
import {Component, Prop} from "vue-property-decorator";
import {namespace} from "vuex-class";
import Vue from "vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css"
import {Options} from "@/store/modules/AddNewProject";
import {types} from "sass";

const addNewProject = namespace("AddNewProject")

interface Status {
  status: string;
  id: string,
}

@Component({
  name: "CreateProject",
  components: {
    DatePicker
  }

})

export default class CreateProject extends Vue {
  @addNewProject.Action protected newProjectAdd!: ({name, status, timeline}: Options) => object;

  @Prop({type: Boolean, required: true}) readonly windowClosed!: boolean;
  @Prop({type: Function, required: true}) readonly closeOpenWindow!: () => void;

  private name: string = "";
  private status: string = "Not Started";
  private select: string = "start";
  private startTime: string | null = null;
  private rangeTime: string[] | null = null;
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

  timeline(): string | string[] | null {
    if (this.select === "start") {
      return this.startTime
    } else {
      return this.rangeTime
    }
  }

  addAndClose(name: string, status: string, timeline: () => string | string[] | null) {
    if (name === "") {
      let nameSpace: HTMLInputElement | null = document.querySelector(".project-name__input");
      nameSpace!.style.borderColor = "red";
    } else {
      this.newProjectAdd({name, status, timeline})
      this.closeOpenWindow()
    }
  }
}


</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.create {
  position: absolute;
  left: 20%;
  top: 25%;
  width: 450px;
  height: 515px;
  border: 2px rgba(70, 79, 96, 0.88) solid;
  border-radius: 15px;
  background-color: #E5E5E5;

  &__header {
    height: 60px;
    padding: 20px;
    border-radius: 12px 12px 0 0;
    background-color: rgba(134, 143, 160, 0.44);
    font-size: 18px;
    font-weight: bold;
  }

  &__project {
    padding: 0 20px;
  }

  .project-name {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    font-weight: bold;

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
    padding: 20px 0;

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
      cursor: pointer;
    }

    &__radio {
      display: none;
    }
  }

  .project-timeline {
    display: grid;
    grid-template: 30px 60px / 1fr 1fr;
    padding: 20px 0;

    &__title {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    &__select {
      @include searchBorder(150px, 6px);
      padding: 5px 10px;
    }

    &__date {
      .mx-datepicker {
        width: 150px;
      }
    }

    &__range {
      .mx-datepicker {
        width: 250px;
      }
    }
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    height: 60px;
    padding: 15px;
    border-radius: 0 0 12px 12px;
    background-color: rgba(134, 143, 160, 0.44);

    .cancel {
      @include searchBorder(100px, 6px);
      background-color: #fff;
      border: none;
    }

    .add-project {
      @include searchBorder(130px, 6px);
      margin-left: 20px;
      background-color: #5E5ADB;
      border: none;
      color: #fff;
    }
  }
}


</style>