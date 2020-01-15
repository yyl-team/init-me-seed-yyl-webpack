import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
  demoLogs(state): any[] {
    return state.demoLogs;
  }
}

export default getters