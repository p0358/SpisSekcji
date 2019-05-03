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
    fetch('https://api.github.com/gists/a3bdcc6a27d9410f97685b5b6cee5b69')
      .then(response => response.json())
      .then(output =>
        context.commit(
          'FETCH_SECTIONS',
          JSON.parse(output.files['sections.json'].content)
        )
      )
  }
}
