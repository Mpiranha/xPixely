export default {
  updateFilter(state, payload) {
    state.filters.push(payload);
  },
  removeElementFilterList(state, payload) {
    state.filters.splice(state.filters.indexOf(payload), 1);
  },
  togglePane(state) {
    state.paneOpen = !state.paneOpen;
  },
};

