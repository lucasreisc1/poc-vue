<template>
  <v-flex class="pa-2" fill-height fluid>
    <form-movie :save="save" :cancel="cancel" />
  </v-flex>
</template>

<script>
import FormMovie from '@/components/movie/FormMovie.vue';
import { mapActions } from 'vuex';
import { MOVIE_MODULE } from '@/store/movie/movieModule';
import { MOVIE_ACTIONS } from '@/store/movie/movieActions';

export default {
  name: 'ManageMovieView',

  components: { FormMovie },

  methods: {
    ...mapActions(MOVIE_MODULE, {
      createMovie: MOVIE_ACTIONS.CREATE_MOVIE,
    }),

    cancel() {
      this.$router.push({ path: '/' });
    },

    async save(movie) {
      try {
        await this.createMovie(movie);
        this.cancel();
      } catch (error) {
        console.log();
      }
    },
  },

};
</script>

<style scoped>

</style>
