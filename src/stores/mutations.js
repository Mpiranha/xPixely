export default {
  updateFilter(state, payload) {
    state.filters.push(payload);
  },
  removeElementFilterList(state, payload) {
    state.filters.splice(state.filters.indexOf(payload), 1);
  },
};

