<template>
  <div>
    <data-table-movie :movies="movies"/>
    <v-btn
      data-test-movie="btn-new-movie"
      class="mx-2"
      fab
      @click="createNewMovie">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>

import DataTableMovie from '@/components/movie/DataTableMovie.vue';
import { MOVIE_MODULE } from '@/store/movie/movieModule';
import { MOVIE_ACTIONS } from '@/store/movie/movieActions';
import { mapActions, mapGetters } from 'vuex';
import { MOVIE_GETTERS } from '@/store/movie/movieGetters';

export default {
  name: 'MovieView',
  components: { DataTableMovie },

  created() {
    this.loadViewModel();
  },

  computed: {
    ...mapGetters(MOVIE_MODULE, {
      movies: MOVIE_GETTERS.GET_MOVIES,
    }),
  },

  methods: {
    ...mapActions(MOVIE_MODULE, {
      findAllMovies: MOVIE_ACTIONS.FIND_ALL_MOVIES,
    }),

    loadViewModel() {
      try {
        this.findAllMovies();
      } catch (error) {
        console.log('Error find all movies');
        throw error;
      }
    },

    createNewMovie() {
      this.$router.push({ path: '/movies' });
    },
  },
};
</script>
