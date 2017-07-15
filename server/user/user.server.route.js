var Users = require('./user.server.controller');

module.exports = function(router) {
    router.post('/upload', Users.upload);
    router.post('/list', Users.list);
    router.get('/getUserDetails', Users.getUserDetails);
    router.get('/getUserTemplateDetails', Users.getUserTemplateDetails);
};