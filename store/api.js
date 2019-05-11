export const state = () => ({
  result: null,
  sectionsLink: null,
  tagGroupsLink: null
});

export const getters = {
  result: state => state.result,
  sectionsLink: state => state.sectionsLink,
  tagGroupsLink: state => state.tagGroupsLink
};

export const mutations = {
  SET_RESULT(state, result) {
    state.result = result;
  },
  SET_SECTIONSLINK(state, sectionsLink) {
    state.sectionsLink = sectionsLink;
  },
  SET_TAGGROUPSLINK(state, tagGroupsLink) {
    state.tagGroupsLink = tagGroupsLink;
  }
};

export const actions = {
  SET_RESULT(context, result) {
    context.commit("SET_RESULT", result);
  },
  SET_SECTIONSLINK(context) {
    fetch("https://api.github.com/gists/e6fe59c222ff344652706429007c018b")
      .then(response => response.json())
      .then(output =>
        context.commit(
          "SET_SECTIONSLINK",
          output.files["sectionspreview.json"].raw_url
        )
      );
  },
  SET_TAGGROUPSLINK(context) {
    fetch("https://api.github.com/gists/834ab2b54e4cbc39366402e619137d77")
      .then(response => response.json())
      .then(output =>
        context.commit(
          "SET_TAGGROUPSLINK",
          output.files["taggroupspreview.json"].raw_url
        )
      );
  }
};
