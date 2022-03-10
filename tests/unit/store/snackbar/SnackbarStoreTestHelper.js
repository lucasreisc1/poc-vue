import Vue from 'vue';
import Vuex from 'vuex';
import snackbarModule, { SNACKBAR_MODULE } from '@/store/snackbar/snackbarModule';

export default function storeSnackbar(state) {
  Vue.use(Vuex);
  return new Vuex.Store({
    modules: {
      [SNACKBAR_MODULE]: {
        ...snackbarModule,
        state,
      },
    },
  });
}
