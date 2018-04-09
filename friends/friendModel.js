const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        maxlength: 120,
        minlength:1,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    }
  })
const friendModel = mongoose.model('Friend', friendSchema);

module.exports = friendModel;