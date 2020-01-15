import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

interface IState {
  demoLogs: any[]
}

let state: IState = {
  demoLogs: []
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})