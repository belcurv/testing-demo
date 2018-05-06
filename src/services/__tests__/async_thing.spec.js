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

    it('should return `result: true` when given a valid user', async () => {
      const user = 'leroy';
      const result = await getOne(user);
      expect(result).toHaveProperty('result', true);
    });

    it('should return a user when given and valid user', async () => {
      const user = 'leroy';
      const result = await getOne(user);
      expect(result).toHaveProperty('user');
    });

    
    /* ========================== NEGATIVE TESTS =========================== */

    it('should return `result: false` when given invalid user', async () => {
      const user = 'jenkins';
      const result = await getOne(user);
      expect(result).toHaveProperty('result', false);
    });

    it('should return `user: null` when given invalid user', async () => {
      const user = 'jenkins';
      const result = await getOne(user);
      expect(result).toHaveProperty('user', null);
    });


    /* ========================= EXCEPTION TESTS =========================== */

    it('should throw an error when username param is omitted', async () => {
      const user = undefined;
      expect(getOne(user))
        .rejects
        .toMatch('Missing required param "username"');
    });
 
  });


});