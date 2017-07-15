exports.upload = (req, res) => {
    'use strict';
    var multer = require('multer');

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, '././uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
        }
    });

    var upload = multer({ //multer settings
        storage: storage
    }).single('file');

    /** API path that will upload the files */
    //  app.post('/upload', function(req, res) {
    upload(req, res, function (err) {
        console.log(req.file);
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        res.json({ error_code: 0, err_desc: null });
    });
    //   });

}

exports.list = (req, res) => {

	res.json({
	        "list" : "Successfully Inside User List"
	 });
    
}
const db = require("../../config/db");
const User = require('./users.model').User;
const UserTemplates = require('./user-template.model').UserTemplates;

exports.getUserDetails = function (req, res) {
    var filter = {};
    let userId = req.query.userId;
    if (userId) {
        filter.userId = parseInt(userId) || 0;
    }

    User.get(filter, (details) => {
        console.log("Users:", JSON.stringify(details, undefined, 2));
        if (!details.error) {
            res.json(details);
        } else {
            res.json({
                "ERROR": details.error
            });
        }
    });
}

exports.getUserTemplateDetails = function (req, res) {
    var filter = {};
    let userId = req.query.userId;
    if (userId) {
        filter.userId = parseInt(userId) || 0;
    }
    let templateId = req.query.templateId;
    if (templateId) {
        filter.templateId = parseInt(templateId) || 0;
    }

    UserTemplates.get(filter, (details) => {
        console.log("UserTemplate:", JSON.stringify(details, undefined, 2));
        if (!details.error) {
            res.json(details);
        } else {
            res.json({
                "ERROR": details.error
            });
        }
    });
}