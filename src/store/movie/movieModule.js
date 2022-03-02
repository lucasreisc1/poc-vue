import actions from './movieActions';
import getters from './movieGetters';
import mutations from './movieMutations';

const state = {
  movies: [],
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
