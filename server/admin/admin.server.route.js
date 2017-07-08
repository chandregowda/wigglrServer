var Admin = require('./admin.server.controller');
module.exports = function(router) {

    router.get('/dashboard', Admin.dashboard);
};