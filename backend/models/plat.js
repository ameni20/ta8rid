// import mongoose module
const mongoose = require('mongoose');
// create plat schema (attributes)
const platSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    note: Number,
    img:String
});
// create Plat model name and affect platSchema
const plat = mongoose.model("Plat", platSchema);
// export model
module.exports = plat;