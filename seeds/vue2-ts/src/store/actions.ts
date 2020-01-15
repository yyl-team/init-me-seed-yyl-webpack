import { ActionTree } from 'vuex'

const actions: ActionTree<any, any> = {
  addDemoLog({ commit }, msg) {
    commit('ADD_DEMO_LOG', msg);
  }
}

export default actions;
