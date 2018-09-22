const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TrainingRegistration = require("./TrainingRegistration");

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
const topicSchema =  new Schema({
    topic : {
        type : String,
        required : true
    }
});
const kitcontentsSchema =  new Schema({
    topic : {
        type : String,
        required : true
    }
});
const durationSchema =  new Schema({
    topic : {
        type : String,
        required : true
    }
});
const finalconditionSchema =  new Schema({
    topic : {
        type : String,
        required : true
    }
});

const TrainingSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    level : {
        type : String,
        required : true
    },
    overview : {
        type : String,
        required : true
    },
    topic : [topicSchema],
    kitcontents : [kitcontentsSchema],
    duration : [durationSchema],
    finalcondition : [finalconditionSchema],
    images : [imageSchema],
    trainingRegistration : [
        {
            type : Schema.Types.ObjectId,
            refs : "TrainingRegistration"
        }
    ]
});

const Training = mongoose.model("trainings",TrainingSchema);

module.exports = Training;