'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * @module user
 * @description contain the details of user information, conditions and actions.
 */

var UserTemplatesSchema = new Schema({
  templateId: { type: Number},
  userId: { type: Number},
  filenames: {type: Array}
});

UserTemplatesSchema.statics = {
         /**
      findOne user. return the one user object.
      @param id: get id to find one sample by id.
      @param callback: callback of this form.
    */
    get (filter, callback) {
        console.log("Inside Users:.....FILTER: ", filter);
        this.find(filter, 'templateId userId filenames', (err, data) => {
            if(err) return {"error":err, result:[]};
            console.log("Got Data", JSON.stringify(data, undefined, 2));
            callback({"error":"", result:data});
        });
    },
   
}

var userTemplates = mongoose.model('user_templates', UserTemplatesSchema);

/** export schema */
module.exports = {
    UserTemplates: userTemplates
};