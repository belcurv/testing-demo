/* ================================= SETUP ================================= */

// import function to test
const { factorial1 } = require('../factorial');


/* ================================= TESTS ================================= */

// "canary test" -- makes sure the test runner (Jest) is working
describe('the canary', () => {

  it('it tweets', () => {
    expect(true).toBeTruthy();
  });

});


describe('factorial1', () => {

  /* =========================== POSITIVE TESTS ============================ */

  it('factorial1 should be a function', () => {
    expect(typeof factorial1 === 'function').toBeTruthy();
  });

  it('should calculate the factorial', () => {
    const n = 5;                                // setup
    const result = factorial1(n);               // act
    expect(result).toEqual(5 * 4 * 3 * 2 * 1);  // assert
  });

  it('should calculate the factorial', () => {
    const n = 4;
    const result = factorial1(n);
    expect(result).toEqual(4 * 3 * 2 * 1);
  });


  /* =========================== NEGATIVE TESTS ============================ */

  it('should return zero if negative int passed', () => {
    const n = -1;
    const result = factorial1(n);
    expect(result).toEqual(0);
  });


  /* =========================== EXCEPTION TESTS =========================== */

  it('should throw if no param passed', () => {
    const n = null;
    expect(() => factorial1(n)).toThrowError('Missing param');
  });

});
