import request from "@/api/request"

export const state = {
  res: [],
  searchKeywords: ''
}
  
export const getters = {
  get_res(state) {
    return state.res
  }
}
  
export const mutations = {
  set_res(state, payload) {
    state.res = payload
    console.log('####MUTATIONS FETCH_RESPONSE: ', state.res)
  }
}
  
export const actions = {
  async get_api(context, payload) {
    let source = context.state.searchKeywords !=='' ? `https://restcountries.com/v2/name/${context.state.searchKeywords}?fullText=false` : 'https://restcountries.com/v2/all'
    const res = await request.get(source)
    if (res) {
      payload = res
      // const pageObj = {
      //   currentPage: 1,
      //   totalNum: res.length
      // } 
      console.log('####ACTIONS: ', res)
      context.commit('set_res', payload)
    } else {
      this.$alert('DATA GET FIALED', 'ERROR', {
        confirmButtonText: 'OK',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}