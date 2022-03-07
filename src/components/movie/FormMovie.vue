<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="movie.name"
            :rules="nameRules"
            label="Movie name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="movie.genre"
            label="Genre"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="movie.year"
            label="Year"
          ></v-text-field>
        </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="movie.imdbRating"
              label="Imdb Rating"
            ></v-text-field>
          </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="movie.duration"
            label="Duration"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="save" >
      Save
    </v-btn>
    <v-btn @click="cancel">
      Cancel
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'FormMovie',

  props: {
    save: {
      type: Function,
      required: true,
    },

    cancel: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      movie: {},
      valid: false,
      nameRules: [
        (v) => !!v || 'Field is required',
      ],
      email: '',
    };
  },
};
</script>

<style scoped>

</style>
