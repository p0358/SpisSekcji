export const state = () => ({
  result: null
})

export const getters = {
  result: state => state.result
}

export const mutations = {
  SET_RESULT(state, result) {
    state.result = result
  }
}

export const actions = {
  SET_RESULT(context, result) {
    context.commit('SET_RESULT', result)
  }
}
