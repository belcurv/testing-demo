/* ================================= SETUP ================================= */

// import function to test
const { getOne } = require('../async_thing');

// mock the real `get_json` dependency
jest.mock('../dependencies/get_json');


/* ================================= TESTS ================================= */

describe('async_thing', () => {

  describe('.getOne()', () => {

    /* ========================== POSITIVE TESTS =========================== */

    it('should be a function', () => {
      expect(typeof getOne === 'function').toBeTruthy();
    });

    it('should resolve `result: true` when username is found', async () => {
      const user   = 'leroy';                         // setup
      const result = await getOne(user);              // act
      expect(result).toHaveProperty('result', true);  // assert
    });

    // Same result as above.
    // Note: Jest's .resolves method means no need for async/await.
    it('should resolve `result: true` when username is found', () => {
      expect(getOne('leroy'))
        .resolves
        .toHaveProperty('result', true);
    });

    it('should resolve a user when username is found', () => {
      expect(getOne('leroy'))
        .resolves
        .toHaveProperty('user', expect.objectContaining({
          name : expect.any(String),
          _id  : expect.any(String)
        }));
    });

    
    /* ========================== NEGATIVE TESTS =========================== */

    it('should resolve `result: false` when username not found', () => {
      expect(getOne('jenkins'))
        .resolves
        .toHaveProperty('result', false);
    });

    it('should resolve `user: null` when username not found', () => {
      expect(getOne('jenkins'))
        .resolves
        .toHaveProperty('user', null);
    });


    /* ========================= EXCEPTION TESTS =========================== */

    it('should reject with error when no username is passed', () => {
      expect(getOne())
        .rejects
        .toHaveProperty('error', 'Missing required param "username"');
    });
 
  });

});