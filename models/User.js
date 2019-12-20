const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    displayName: String,
    name: Object,
    emails: Array,
    photos: Array,
    provider: String,

});

mongoose.model('users', userSchema);
