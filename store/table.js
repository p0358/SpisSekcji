export const state = () => ({
  toggle: false,
  columns: [
    {
      name: "Name",
      label: "Nazwa",
      field: "name",
      align: "left",
      sortable: true,
      sort: (a, b, rowA, rowB) => {
        const lettermap = {
          Ё: "JO",
          Й: "J",
          Ц: "C",
          У: "U",
          К: "K",
          Е: "E",
          Н: "N",
          Г: "G",
          Ш: "SZ",
          Щ: "SZCZ",
          З: "Z",
          Х: "H",
          Ъ: "'",

          ё: "jo",
          й: "j",
          ц: "c",
          у: "u",
          к: "k",
          е: "e",
          н: "n",
          г: "g",
          ш: "sz",
          щ: "szcz",
          з: "z",
          х: "h",
          ъ: "'",

          Ф: "F",
          Ы: "Y",
          В: "W",
          А: "A",
          П: "P",
          Р: "R",
          О: "O",
          Л: "L",
          Д: "D",
          Ж: "Ż",
          Э: "E",

          ф: "f",
          ы: "y",
          в: "w",
          а: "a",
          п: "p",
          р: "r",
          о: "o",
          л: "l",
          д: "d",
          ж: "ż",
          э: "e",

          Я: "JA",
          Ч: "CZ",
          С: "S",
          М: "M",
          И: "I",
          Т: "T",
          Ь: "'",
          Б: "B",
          Ю: "JU",

          я: "ja",
          ч: "cz",
          с: "s",
          м: "m",
          и: "i",
          т: "t",
          ь: "'",
          б: "b",
          ю: "ju",

          Ї: "JI",
          ї: "ji"
        };
        const transliterate = function(word) {
          return word
            .split("")
            .map(function(char) {
              return lettermap[char] || char;
            })
            .join("");
        };
        [a, b] = [a, b].map(s =>
          transliterate(s + "")
            .toLowerCase()
            .replace(/[^a-z0-9 ]/gi, "")
            .trim()
        );
        return a > b ? 1 : a === b ? 0 : -1;
      }
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
