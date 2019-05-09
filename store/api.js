export const state = () => ({
  result: null,
  sectionsLink: null,
  tagGroupsLink: null
})

export const getters = {
  result: state => state.result,
  sectionsLink: state => state.sectionsLink,
  tagGroupsLink: state => state.tagGroupsLink
}

export const mutations = {
  SET_RESULT(state, result) {
    state.result = result
  },
  SET_SECTIONSLINK(state, sectionsLink) {
    state.sectionsLink = sectionsLink
  },
  SET_TAGGROUPSLINK(state, tagGroupsLink) {
    state.tagGroupsLink = tagGroupsLink
  }
}

export const actions = {
  SET_RESULT(context, result) {
    context.commit('SET_RESULT', result)
  },
  SET_SECTIONSLINK(context) {
    fetch('https://api.github.com/gists/a3bdcc6a27d9410f97685b5b6cee5b69')
      .then(response => response.json())
      .then(output =>
        context.commit(
          'SET_SECTIONSLINK',
          `https://gist.githubusercontent.com/Mensix/a3bdcc6a27d9410f97685b5b6cee5b69/raw/${
            output.files['sections.json'].raw_url
          }
          /sections.json`
        )
      )
  },
  SET_TAGGROUPSLINK(context) {
    fetch('https://api.github.com/gists/7f10483c0ebd5d6358657202b04b3c3b')
      .then(response => response.json())
      .then(output =>
        context.commit(
          'SET_TAGGROUPSLINK',
          `https://gist.githubusercontent.com/Mensix/7f10483c0ebd5d6358657202b04b3c3b/raw/
            ${output.files['taggroups.json'].raw_url}}
            /taggroups.json`
        )
      )
  }
}
