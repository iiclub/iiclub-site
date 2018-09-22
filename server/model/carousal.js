const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarousalSchema = new Schema({
    path:{
        type : String,
        required: true
    },
    redirectPath:{
        type:String,
        required: false,
        default : null
    },
    active :{
        type:Boolean,
        default:false
    }
});

const Carousal = mongoose.model("Carousal",CarousalSchema);

module.exports = Carousal;