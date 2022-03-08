export const SNACKBAR_MUTATIONS = {
  SHOW_NOTIFICATION_SUCCESS: 'SHOW_NOTIFICATION_SUCCESS',
  SHOW_NOTIFICATION_ERROR: 'SHOW_NOTIFICATION_ERROR',
  HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',
};

export default {

  [SNACKBAR_MUTATIONS.SHOW_NOTIFICATION_SUCCESS](state, payload) {
    state.snackbar = true;
    state.message = { text: payload, type: 'success' };
  },

  [SNACKBAR_MUTATIONS.SHOW_NOTIFICATION_ERROR](state, payload) {
    state.snackbar = true;
    state.message = { text: payload, type: 'error' };
  },

  [SNACKBAR_MUTATIONS.HIDE_NOTIFICATION](state) {
    state.snackbar = false;
    state.message = { text: '', type: '' };
  },

};
