const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
    age: Number,
    major: String,
    createdDate: Date,
    updatedDate: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);