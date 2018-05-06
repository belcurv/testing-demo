/**
 * Factorialize this!
 * @param   {Number}   n   An integer (we hope)
 * @returns {Number}       The calculated factorial of `n`
 */
const factorial1 = (n) => {

  if (!n) {
    throw new Error('Missing param');
  }

  if (n < 0) {
    return 0;
  }

  return (n === 1) ? 1 : n * factorial1(n - 1);
};

module.exports = { factorial1 };
