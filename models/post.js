const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        default: 'https://lh3.googleusercontent.com/proxy/6Evr_-EZkT-9ERXEkdrlniP87ne0U3qt62ZY-KpyK2UzHzBXirv6S2nty8Tgy3Nk-OzgIvXRVv2S9WBMJdTcrAaCkat2ERAwsEbDbPAMjKe3rZ5Anw'
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
})



const post = mongoose.model('post', postSchema);

module.exports = post