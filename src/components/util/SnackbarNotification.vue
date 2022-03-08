<template>
  <div>
    <v-snackbar
      v-model="haveMessage"
    >
      {{ message.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="message.type"
          text
          v-bind="attrs"
          @click="closeMessage"
        >
          {{ message.textButton }}
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { SNACKBAR_MODULE } from '@/store/snackbar/snackbarModule';
import { SNACKBAR_GETTERS } from '@/store/snackbar/snackbarGetters';
import { SNACKBAR_MUTATIONS } from '@/store/snackbar/snackbarMutations';
import { mapGetters, mapMutations } from 'vuex';

export default {

  computed: {
    ...mapGetters(SNACKBAR_MODULE, {
      haveMessage: SNACKBAR_GETTERS.HAVE_MESSAGE,
      message: SNACKBAR_GETTERS.MESSAGE,
    }),
  },

  methods: {
    ...mapMutations(SNACKBAR_MODULE, {
      closeMessage: SNACKBAR_MUTATIONS.HIDE_NOTIFICATION,
    }),
  },

};
</script>

<style scoped>

</style>
