const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
    youtubelink:{
        type : String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    active :{
        type:Boolean,
        default:false
    }
});

const Gallery = mongoose.model("Gallery",GallerySchema);

module.exports = Gallery;