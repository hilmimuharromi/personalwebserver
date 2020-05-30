const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

userSchema.pre('save', function () {
    const hashedPassword = bcrypt.hashSync(this.password, 12);
    this.password = hashedPassword;
});

const user = mongoose.model('user', userSchema);

module.exports = user