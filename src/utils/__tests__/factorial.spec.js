/* ================================= SETUP ================================= */

// import function to test
const { factorial } = require('../factorial');


/* ================================= TESTS ================================= */

// "canary test" -- makes sure the test runner (Jest) is working
describe('the canary', () => {

  it('it tweets', () => {
    expect(true).toBeTruthy();
  });

});


describe('factorial', () => {

  /* =========================== POSITIVE TESTS ============================ */

  it('should be a function', () => {
    expect(typeof factorial === 'function').toBeTruthy();
  });

  it('should calculate the factorial of 5', () => {
    const n = 5;                                // setup
    const result = factorial(n);                // act
    expect(result).toEqual(5 * 4 * 3 * 2 * 1);  // assert
  });

  // can combine setup, act, assert
  it('should calculate the factorial of 4', () => {
    expect(factorial(4)).toEqual(4 * 3 * 2 * 1);
  });


  /* =========================== NEGATIVE TESTS ============================ */

  it('should return zero when n = 0', () => {
    const n = 0;
    expect(factorial(n)).toEqual(0);
  });

  it('should return zero when n = -1', () => {
    const n = -1;
    expect(factorial(n)).toEqual(0);
  });


  /* =========================== EXCEPTION TESTS =========================== */

  it('should throw if no param is passed', () => {
    expect(() => factorial()).toThrowError('Missing param');
  });

  it('should throw if non-numeric param is passed', () => {
    expect(() => factorial('leroy')).toThrowError('Invalid param');
  });

});
