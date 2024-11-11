const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    description:{
        type: String
    },

    status:{
        type:String,
        enum:['To Do', 'In Progress', 'Done'],
        default:'To Do'
    },
    
    createdBy:{
        id:{
            type:mongoose.Schema.Types.ObjectId
        },

        name:{
            type:String
        }
    },

    createdAt: {
        type: Date,
        default:Date.now()
    }
});

const task=new mongoose.model('task',taskSchema);

module.exports = task;
