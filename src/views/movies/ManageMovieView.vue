<template>
  <v-flex class="pa-2" fill-height fluid>
    <form-movie :save="() => {}" :cancel="() => {}" />
  </v-flex>
</template>

<script>
import FormMovie from '@/components/movie/FormMovie.vue';

export default {
  name: 'ManageMovieView',
  components: { FormMovie },
};
</script>

<style scoped>

</style>
