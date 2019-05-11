export const state = () => ({
  toggle: false,
  columns: [
    {
      name: "Name",
      label: "Nazwa",
      field: "name",
      align: "left",
      sortable: true
    },
    {
      name: "Members",
      label: "Liczba członków",
      field: "members",
      align: "left",
      sortable: true
    },
    { name: "Link", label: "Link", field: "link", align: "left" },
    { name: "Posting", label: "Aktywna", field: "posting", align: "left" }
  ],
  pagination: {
    sortBy: "Name",
    page: 0,
    rowsPerPage: 0,
    rowsCount: 0
  },
  isLoaded: false,
  userInput: null
});

export const getters = {
  toggle: state => state.toggle,
  columns: state => state.columns,
  pagination: state => state.pagination,
  isLoaded: state => state.isLoaded,
  userInput: state => state.userInput
};

export const mutations = {
  SET_TOGGLE(state, value) {
    state.toggle = value;
  },
  SET_LOADED(state) {
    state.isLoaded = true;
  },
  SET_USERINPUT(state, userInput) {
    state.userInput = userInput;
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = pagination;
  }
};
export const actions = {
  SET_TOGGLE(context, value) {
    context.commit("SET_TOGGLE", value);
  },
  SET_LOADED(context) {
    context.commit("SET_LOADED");
  },
  SET_USERINPUT(context, userInput) {
    context.commit("SET_USERINPUT", userInput);
  },
  SET_PAGINATION(context, pagination) {
    context.commit("SET_PAGINATION", pagination);
  }
};
