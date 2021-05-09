const postsResolvers = require('./posts');
const usersReolvers = require('./users');

module.exports = {
  Query: {
    ...postsResolvers.Query
  },
}