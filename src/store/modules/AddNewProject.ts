import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'

export interface Options {
    name: string,
    status: string,
    timeline: () => string | string[]
}

@Module({namespaced: true})
export default class AddNewProject extends VuexModule {
    public projectOptions: object = {}


    @Mutation
    updateOptions(newProjectAdd: object) {
        Object.assign(this.projectOptions, newProjectAdd)
    }

    @Action({commit: "updateOptions"})
    newProjectAdd({name, status, timeline}:Options): object {
        return {
            name: name,
            status: status,
            timeline: timeline()
        }
    }
}