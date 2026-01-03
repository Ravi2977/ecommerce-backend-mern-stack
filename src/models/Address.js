const mongoose =require("mongoose");
const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,             
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    zipCode: {
        type: Number,
        required: true,
        trim: true,
    },
    latitude: {
        type: Number,
        required: true,
        trim: true,
    },
    longitude: {
        type: Number,       
        required: true,
        trim: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Address", addressSchema);