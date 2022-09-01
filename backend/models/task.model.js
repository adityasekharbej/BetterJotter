const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('task', taskSchema)