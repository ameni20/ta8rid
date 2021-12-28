// import mongoose module
const mongoose = require('mongoose');
// import mongoose unique validator module
const uniqueValidator = require('mongoose-unique-validator');

// create user schema (attributes)
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    tel: String,
    role: String
});
userSchema.plugin(uniqueValidator);
// create Plat model name and affect userSchema
const user = mongoose.model("User", userSchema);
// export model
module.exports = user;