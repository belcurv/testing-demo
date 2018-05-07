/**
 * Factorialize this!
 * @param   {Number}   n   An integer (we hope)
 * @returns {Number}       The calculated factorial of `n`
 */
const factorial = (n) => {

  if (n === null || n === undefined) {
    throw new Error('Missing param');
  }

  if (isNaN(n)) {
    throw new Error('Invalid param');
  }

  if (n < 1) {
    return 0;
  }

  return (n === 1) ? 1 : n * factorial(n - 1);
};

module.exports = { factorial };
