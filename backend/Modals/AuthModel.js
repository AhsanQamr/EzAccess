const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: "Email is not valid",
        },
    },
    password: {
        type: String,
        required: true,
    }
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // }
})

module.exports=mongoose.model("Users", userSchema);