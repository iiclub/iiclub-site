const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkshopRegistration = require("./workshopRegistration");

const imageSchema =  new Schema({
    path : {
        type : String,
        required : true
    },
    active : {
        type : Boolean,
        default: false
    },
    listPage : {
        type : Boolean,
        default: false
    },
    detailsPage : {
        type : Boolean,
        default: false
    }
});
const sessionplanSchema =  new Schema({
    topic : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    }
});
const datedurationSchema =  new Schema({
    topic : {
        type : String,
        required : true
    }
});
const feedetailsSchema =  new Schema({
    topic : {
        type : String,
        required : true
    }
});
const otherdetailsSchema =  new Schema({
    topic : {
        type : String,
        required : true
    }
});


const WorkshopSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    overview : {
        type: String,
        required: true
    },
    active :{
        type:Boolean,
        default:false
    },
    images : [imageSchema],
    sessionplan : [sessionplanSchema],
    dateduration : [datedurationSchema],
    feedetails : [feedetailsSchema],
    otherdetails : [otherdetailsSchema],
    startdate : {
        type: String,
        required: true
    },
    starttime : {
        type: String,
        required: true
    },
    workshopRegistration : [
        {
            type : Schema.Types.ObjectId,
            refs : "WorkshopRegistration"
        }
    ]
});

const Workshop = mongoose.model("workshops",WorkshopSchema);

module.exports = Workshop;