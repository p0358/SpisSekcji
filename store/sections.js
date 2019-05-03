export const state = () => ({
  sections: []
})
export const getters = {
  sections: state => state.sections
}
export const mutations = {
  FETCH_SECTIONS(state, sections) {
    state.sections = sections
  }
}
export const actions = {
  FETCH_SECTIONS(context) {
    fetch('sections.json')
      .then(response => response.json())
      .then(output => context.commit('FETCH_SECTIONS', Array.from(output)))
  }
}
