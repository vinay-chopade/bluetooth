const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    cnum: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true       
    },
    pass: {
        type: String,
        required: true
    },
    cpass: {
        type: String,
        required: true
    }

})

userSchema.pre('save', async function (next) {
    const user = this;
    console.log("Just before saving before hashing  ", user.pass);
    if (!user.isModified('pass')) {
        return next();
    }
    user.pass = await bcrypt.hash(user.pass, 8);
    console.log("Just before saving & after hashing", user.pass);
    next();
})


mongoose.model("User", userSchema);
