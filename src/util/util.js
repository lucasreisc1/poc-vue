export default {
  convertStringToNumber(str) {
    if (typeof str === 'string') {
      return +str;
    }
    throw Error('Invalid type param');
  },

  convertStringToFloat(str) {
    if (typeof str === 'string') {
      return parseFloat(str);
    }
    throw Error('Invalid type param');
  },
};
