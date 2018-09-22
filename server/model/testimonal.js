const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestimonalSchema = new Schema({
    path:{
        type : String,
        required: true
    },
    active :{
        type:Boolean,
        default:false
    }
});

const Testimonal = mongoose.model("Testimonal",TestimonalSchema);

module.exports = Testimonal;