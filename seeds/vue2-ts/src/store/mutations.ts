import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  ADD_DEMO_LOG(st, msg): void {
    st.demoLogs.push(msg);
  }
}

export default mutations