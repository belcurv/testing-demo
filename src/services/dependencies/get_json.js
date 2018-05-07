/**
 * === THE REAl THING ===
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
    setTimeout(() => {
      if (!username) {
        reject({ error: 'Missing required param "username"' });
      }
      resolve(username === 'leroy' ? found : notFound);
    }, 200);
  });

};

module.exports = { getJSON };
