var Users = require('./user.server.controller');
module.exports = function(router) {

    router.get('/list', Users.list);
};