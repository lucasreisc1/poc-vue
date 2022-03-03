import Vue from 'vue';
import Vuex from 'vuex';
import movieModule, { MOVIE_MODULE } from '@/store/movie/movieModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [MOVIE_MODULE]: movieModule,
  },
});
