export const state = () => ({
  sections: [],
  lastUpdateDate: null
})
export const getters = {
  sections: state => state.sections,
  lastUpdateDate: state => state.lastUpdateDate
}
export const mutations = {
  FETCH_SECTIONS(state, sections) {
    state.sections = sections
  },
  SET_DATE(state, lastUpdateDate) {
    state.lastUpdateDate = lastUpdateDate
  }
}
export const actions = {
  FETCH_SECTIONS(context) {
    fetch('https://api.github.com/gists/e6fe59c222ff344652706429007c018b')
      .then(response => response.json())
      .then(output => JSON.parse(output.files['sectionspreview.json'].content))
      .then(output => {
        context.commit('FETCH_SECTIONS', Array.from(output.sections))
        context.commit('SET_DATE', output.lastUpdateDate)
      })
  }
}
