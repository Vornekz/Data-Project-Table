import Vue from "vue"
import Vuex from "vuex"
import AddNewProject from "@/store/modules/AddNewProject"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    AddNewProject
  }
})

export default store
