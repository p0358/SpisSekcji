export const state = () => ({
  taggroups: []
})
export const getters = {
  taggroups: state => state.taggroups
}
export const mutations = {
  CHANGE_TAGGROUPS(state, taggroups) {
    state.taggroups = taggroups
  }
}
export const actions = {
  CHANGE_TAGGROUPS(context) {
    fetch('taggroups.json')
      .then(response => response.json())
      .then(output => context.commit('CHANGE_TAGGROUPS', Array.from(output)))
  }
}
