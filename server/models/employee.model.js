const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto:true},
    name:{ type: String, required: true},
    contact:{ type: String, required: true},
    address:{ type: String, required: true}
}, {
    versionKey: false
}); 

const employee = mongoose.model('employee', employeeSchema);
module.exports = employee;
