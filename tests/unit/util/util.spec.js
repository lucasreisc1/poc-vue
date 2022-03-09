import util from '@/util/util';

describe('util', () => {
  describe('convertStringToNumber', () => {
    it('convert a valid param string to number', () => {
      // setup:
      const param = '2032';
      // execute:
      const newNumber = util.convertStringToNumber(param);
      // verify:
      expect(typeof newNumber === 'number').toBeTruthy();
      expect(newNumber).toBe(2032);
    });

    it('pass invalid parameter returns exception', () => {
      // setup:
      const param = true;
      let exception;
      // execute:
      try {
        util.convertStringToNumber(param);
      } catch (err) {
        exception = err;
      }
      // verify:
      expect(exception.message).toBe('You must provide a string.');
    });

    it('pass undefined parameter returns exception', () => {
      // setup:
      let exception;
      // execute:
      try {
        util.convertStringToNumber();
      } catch (err) {
        exception = err;
      }
      // verify:
      expect(exception.message).toBe('You must provide a string.');
    });
  });

  describe('convertStringToFloat', () => {
    it('convert a valid param string to float', () => {
      // setup:
      const param = '10.3';
      // execute:
      const newFloat = util.convertStringToFloat(param);
      // verify:
      expect(typeof newFloat === 'number').toBeTruthy();
      expect(newFloat).toBe(10.3);
    });

    it('pass null parameter returns exception', () => {
      // setup:
      let exception;
      // execute:
      try {
        util.convertStringToFloat(null);
      } catch (err) {
        exception = err;
      }
      // verify:
      expect(exception.message).toBe('You must provide a string.');
    });
  });

  describe('isString', () => {
    it('check a string type parameter -> true', () => {
      // setup:
      const validString = 'abcd';
      // execute:
      const isString = util.isString(validString);
      // verify:
      expect(isString).toBeTruthy();
    });

    it('check a null type parameter -> false ', () => {
      // setup:
      const nullParameter = null;
      // execute:
      const isString = util.isString(nullParameter);
      // verify:
      expect(isString).toBeFalsy();
    });

    it('check a undefined type parameter -> false ', () => {
      // setup:
      const undefinedParameter = undefined;
      // execute:
      const isString = util.isString(undefinedParameter);
      // verify:
      expect(isString).toBeFalsy();
    });
  });
});
