const mongoose =  require('mongoose');

const taskSchema = mongoose.Schema({
    title : {type:String, required: true},
    decription: {type:String},
    createdAt : {type:Number, default: Date.now().valueOf()},
    updatedAt: {type:Number, default: Date.now().valueOf()}
});


module.exports = mongoose.model('task', taskSchema);