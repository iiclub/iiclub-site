const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var regexUsername = /^[a-zA-Z]{3,30}$/;
var regexPhone = /^[0-9]{10,10}$/;
var regexEmail = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
var regexDateofbirth = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

const WorkshopRegistrationSchema = new Schema({
   occupation : {
    type : String,
    validate : {
        validator : (data)=>{
            return data == "Student" || data == "Working";
        },
        message : "Select your Occupation"
    }
   },
   emailid : {
    type : String,
    validate : {
        validator : (data)=>{
            return regexEmail.test(data);
        },
        message : "Enter proper emailid"
    }
   },
   phone : {
    type : String,
    validate : {
        validator : (data)=>{
            return regexPhone.test(data);
        },
        message : "Enter proper phone number"
    }
   },
   dateofbirth : {
    type : String,
    validate : {
        validator : (data)=>{
            return regexDateofbirth.test(data);
        },
        message : "Enter proper date of birth"
    }
   },
   username : {
    type : String,
    validate : {
        validator : (data)=>{
            return regexUsername.test(data);
        },
        message : "Enter proper name"
    }
   },
   registrationDate :{
        type: Date, 
        default: Date.now 
   }
});

const WorkshopRegistration = mongoose.model("workshopregistrations",WorkshopRegistrationSchema);
module.exports = WorkshopRegistration;