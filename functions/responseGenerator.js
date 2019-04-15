const { OK } = require('http-status')

/** Response payload generator
 * @param {String} status http-status code
 * @param {Object} errors Object contain errors
 * @return {Object} res.status(status).json({ isComplete: boolean (auto detect), errors )})
 */
module.exports = (res, status, errors) => {
  res
    .status(status || '200')
    .json({
      isComplete:
        (status === '200' || status === OK || !status) ? true : false,
      errors,
    })
}
