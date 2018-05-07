/**
 * === MOCK DEPENDENCY ===
 * This is a fake replacement for the "real" thing:
 *   /src/services/dependencies/get_json.js
 * 
 * It's identical, except it omits the setTimeout delay
*/

const getJSON = (username) => {

  const found = {
    result: true,
    user: {
      name: username,
      _id: '032asd2310asd3210asd3210as'
    }
  };

  const notFound = {
    result: false,
    user: null
  };

  return new Promise((resolve, reject) => {
    if (!username) {
      reject({ error: 'Missing required param "username"' });
    }
    resolve(username === 'leroy' ? found : notFound);
  });

};

module.exports = { getJSON };
