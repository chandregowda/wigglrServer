module.exports = function (router) {

  require("./admin/admin.server.route")(router);
  require("./user/user.server.route")(router);
 
};
