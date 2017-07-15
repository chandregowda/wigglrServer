'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * @module user
 * @description contain the details of user information, conditions and actions.
 */

var UserSchema = new Schema({
  name: { type: String, default:'New Name'},
  userId: { type: Number}
});

UserSchema.statics = {
         /**
      findOne user. return the one user object.
      @param id: get id to find one sample by id.
      @param callback: callback of this form.
    */
    get (filter, callback) {
        console.log("Inside Users:.....FILTER: ", filter);
        this.find(filter, 'name userId', (err, data) => {
            if(err) return {"error":err, result:[]};
            console.log("Got Data", JSON.stringify(data, undefined, 2));
            callback({"error":"", result:data});
        });
    },
   
}

var user = mongoose.model('user', UserSchema);

/** export schema */
module.exports = {
    User: user
};