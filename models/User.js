const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    githubId: String,
    displayName: String,
    name: Object,
    emails: Array,
    photos: Array,
    provider: String,
    credits: { type: Number, default: 0 }

});

mongoose.model('users', userSchema);
