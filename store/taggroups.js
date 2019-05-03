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
    fetch('https://api.github.com/gists/7f10483c0ebd5d6358657202b04b3c3b')
      .then(response => response.json())
      .then(output =>
        context.commit(
          'FETCH_TAGGROUPS',
          JSON.parse(output.files['taggroups.json'].content)
        )
      )
  }
}
