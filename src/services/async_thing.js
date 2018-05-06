// import a dependency -- we mock this thing in our tests
const { getJSON } = require('./dependencies/get_json');

// a method that uses the dependency
const getOne = async (username) => {
  return getJSON(username);
};

module.exports = { getOne };
