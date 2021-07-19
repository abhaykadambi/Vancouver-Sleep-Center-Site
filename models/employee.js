const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const employeeSchema = new Schema({
    name: { type:String, default:"" },
    imageLink: {type:String, default:""},
    position: { type: String, default: "" },
    bio: { type:String, default:"" },
    personalLink: { type:String, default:"" }
});
var employee = mongoose.model('employee', employeeSchema);
module.exports = employee;