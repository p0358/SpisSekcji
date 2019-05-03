export const state = () => ({
  taggroups: []
})
export const getters = {
  taggroups: state => state.taggroups
}
export const mutations = {
  FETCH_TAGGROUPS(state, taggroups) {
    state.taggroups = taggroups
  }
}
export const actions = {
  FETCH_TAGGROUPS(context) {
    fetch('taggroups.json')
      .then(response => response.json())
      .then(output => context.commit('FETCH_TAGGROUPS', Array.from(output)))
  }
}
