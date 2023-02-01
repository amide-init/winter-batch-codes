const mongoose =  require('mongoose');

const taskSchema = mongoose.Schema({
    firstName: {type:String, required: true},
    lastName: {type:String},
    email : {type:String, required: true, unique: true},
    password: {type:String, required: true},
    createdAt : {type:Number, default: Date.now().valueOf()},
    updatedAt: {type:Number, default: Date.now().valueOf()}
});


module.exports = mongoose.model('user', taskSchema);