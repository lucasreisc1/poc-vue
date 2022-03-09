export default {
  convertStringToNumber(str) {
    if (this.isString(str)) {
      return +str;
    }
    throw new Error('You must provide a string.');
  },

  convertStringToFloat(str) {
    if (this.isString(str)) {
      return parseFloat(str);
    }
    throw new Error('You must provide a string.');
  },

  isString(str) {
    return str && typeof str === 'string';
  },
};
