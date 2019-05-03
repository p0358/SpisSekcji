export const state = () => ({
  sections: []
})
export const getters = {
  sections: state => state.sections
}
export const mutations = {
  CHANGE_SECTIONS(state, sections) {
    state.sections = sections
  }
}
export const actions = {
  CHANGE_SECTIONS(context) {
    fetch('sections.json')
      .then(response => response.json())
      .then(output =>
        context.commit(
          'CHANGE_SECTIONS',
          Array.from(output.filter(x => x.members >= 200))
        )
      )
  },
  FULL_SECTIONS(context) {
    fetch('sections.json')
      .then(response => response.json())
      .then(output => context.commit('CHANGE_SECTIONS', Array.from(output)))
  }
}
