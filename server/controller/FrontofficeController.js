const Workshop = require("../model/workshop");
const WorkshopRegistration = require("../model/workshopRegistration");
const Training = require("../model/Training");
const TrainingRegistration = require("../model/TrainingRegistration");
const Carousal = require("../model/carousal");

const Testimonal = require("../model/Testimonal");

module.exports = {
    welcome(req,res){
        console.log("default route invoked via get for frontofficecontroller");
        res.send({"hi":"welcome front"});
    },

    viewWorkshop(req,res){
        console.log("in viewWorkshop frontoffice controller");
        Workshop.find({active : true}).then((data)=>{
            console.log("data length ",data.length);
            var properData = [];
            var temp = {};
            var tempimage = null;
            var dummyimage = "/dummyimage.png";
            var urlpath = "/workshop/detail/";
            data.forEach((element,index) => {
                temp = {};
                tempimage = null;
                temp.path = urlpath+ element._id;
                temp.title = element.title;
                tempimage = element.images.filter((ele,index) => {
                    if(ele.active && ele.listPage){
                        return true;
                    }
                });
                if(tempimage.length>0){
                    temp.imgsrc  = tempimage[0].path;
                }
                else{
                    temp.imgsrc=dummyimage;
                }
                console.log("tempimage ",tempimage);
                properData.push(temp);
            });
            res.send({"response" :"success", "data" : properData});
        }).catch((err) =>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        }); 
    },
    particularWorkshop(req,res){
        console.log("in particularWorkshop method");
        var id = req.query.id;
        console.log("id ",id);
        var properData = {};       
        var tempimage = null;
        var dummyimage = "/dummyimage.png";
        var registerPath = "/workshop/register/";
        Workshop.findById(id)
        .populate('array').then((data) =>{
            tempimage = data.images.filter((ele,index) => {
                if(ele.active && ele.detailsPage){
                    return true;
                }
            });
            if(tempimage.length>0){
                properData.imagepath  = tempimage[0].path;
            }
            else{
                properData.imagepath =dummyimage;
            }
            properData.registerPath = registerPath+data._id;
            properData.title = data.title;
            properData.overview = data.overview;
            properData.sessionplan = data.sessionplan;
            properData.dateduration = data.dateduration;
            properData.feedetails = data.feedetails;
            properData.otherdetails = data.otherdetails;
            properData.startdate = data.startdate;
            properData.starttime = data.starttime;

            console.log("tempimage ",properData);
            res.send({"response" : "success", "data" : properData});
        }).catch((err)=>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        });
    },
    registerWorkshop(req,res){
        console.log("in registerWorkshop nethod");
        console.log("registerWorkshop ",req.body); 
        var workshopid = req.body.id;
        var occupation = req.body.occupation;
        var emailid = req.body.emailid;
        var phone = req.body.phone;
        var dateofbirth = req.body.dateofbirth;
        var username = req.body.username;
        var dataContent = {occupation,emailid,phone,dateofbirth,username};
        var registration = new WorkshopRegistration(dataContent);
        var validationResult = registration.validateSync();
        var errormessages = [];
        if(validationResult == null){
            console.log("validationResult true");
            Workshop.findById(workshopid).populate('array').then((data) =>{
                data.workshopRegistration.push(registration);
                Promise.all([data.save(),registration.save()]).then((resData)=>{
                    //console.log("resData ",resData.length);
                    res.send({"response" : "success"});
                }).catch((err)=>{
                    console.log("promise err ",err);
                    errormessages.push(err);
                    res.send({"response" : "error", "data" : errormessages});
                });
            }).catch((err)=>{
                console.log("normal err ",err);
                errormessages.push(err);
                res.send({"response" : "error", "data" : errormessages});
            }); 
        }
        else{
            for (x in validationResult.errors) {
                errormessages.push(validationResult.errors[x].message);
            }
            console.log("validationResult false");
            res.send({"response" : "validationerror","data" :errormessages });
        }
    },
    viewTraining(req,res){
        console.log("in viewTraining nethod req ",req.params.type);

        /* 
            /training/robotics
            /training/aeromodeling
            /training/iot
            /training/3dprinting/detail
            /training/raspberrypi
            /training/arduino
            /training/othercourses
        */
/* 
       Robotics
       Aeromodeling
       IOT
       3D Printing---
       Raspberry PI---
       Arduino
       Other Courses---

*/      var choosingPath = "/training/";

        var viewType = "";
        if(req.params.type == "pi"){
            viewType = "Raspberry PI";
        }
        else if(req.params.type == "Other"){
            viewType="Other Courses";
        }
        else{
            viewType= req.params.type;
        }

        if(req.params.type == "pi"){
            choosingPath +="raspberrypi/"
        }
        else if(req.params.type == "Other"){
            choosingPath +="othercourses/"
        }
        else if(req.params.type =="Robotics"){
            choosingPath+="robotics/";
        }
        else if(req.params.type =="Aeromodeling"){
            choosingPath+="aeromodeling/";
        }
        else if(req.params.type =="IOT"){
            choosingPath+="iot/";
        }
        else if(req.params.type =="Arduino"){
            choosingPath+="arduino/";
        }

        var dummyimage = "/dummyimage.png";
        var tempimage = null;
        var finalimagepath = null;

        Training.find({name : viewType}).then((data)=>{
            
             var trans = data.map((ele) => {
                tempimage = null;
                tempimage = ele.images.filter((ele,index) => {
                    if(ele.active && ele.listPage){
                        return true;
                    }
                });
                if(tempimage.length>0){
                    finalimagepath  = tempimage[0].path;
                }
                else{
                    finalimagepath =dummyimage;
                }

                var required = {
                 title: ele.level,
                 imgsrc : finalimagepath,
                 path : choosingPath+"detail/"+ele._id
               }; 
               return required;
             });


             res.send({"response" : "success", "data" : trans});
           }).catch((err) =>{
             console.log("err ",err);
              res.send({"response" : "error", "data" : err});
           });
           
    },
    viewParticularTraining(req,res){
        console.log("in viewParticularTraining req ",req.params.id);

        var dummyimage = "/dummyimage.png";
        var tempimage = null;
        var finalimagepath = null;
        var trans = null;
        if(req.params.id == "3dprinting"){
            Training.find({name : '3DPRINTING'}).then((data)=>{

                tempimage = null;
                tempimage = data[0].images.filter((ele,index) => {
                    if(ele.active && ele.detailsPage){
                        return true;
                    }
                });

                if(tempimage.length>0){
                    finalimagepath  = tempimage[0].path;
                }
                else{
                    finalimagepath =dummyimage;
                }

                trans = {
                    imagesrc : finalimagepath,
                    overview : data[0].overview,
                    topic : data[0].topic,
                    kitcontents : data[0].kitcontents,
                    duration : data[0].duration,
                    finalcondition : data[0].finalcondition,
                    name : data[0].name,
                    id : data[0]._id
                };

                res.send({"response" : "success", "data" : trans});
              }).catch((err) =>{
                console.log("err ",err);
                 res.send({"response" : "error", "data" : err});
              });
        }
        else{    
            Training.findById(req.params.id)
            .populate('array').then((data) =>{
                
                
                tempimage = null;
                tempimage = data.images.filter((ele,index) => {
                    if(ele.active && ele.detailsPage){
                        return true;
                    }
                });

                if(tempimage.length>0){
                    finalimagepath  = tempimage[0].path;
                }
                else{
                    finalimagepath =dummyimage;
                }

                trans = {
                    imagesrc : finalimagepath,
                    overview : data.overview,
                    topic : data.topic,
                    kitcontents : data.kitcontents,
                    duration : data.duration,
                    finalcondition : data.finalcondition,
                    name : data.name,
                    id : data._id
                };


                res.send({"response" : "success", "data" :trans});
            }).catch((err)=>{
                console.log("mon err ",err);
                res.send({"response" : "error", "data" : err});
            });
        }
    },
    registerTraining(req,res){
        console.log("in registerTraining",req.body);

        var trainingid = req.body.id;
        var occupation = req.body.occupation;
        var emailid = req.body.emailid;
        var phone = req.body.phone;
        var dateofbirth = req.body.dateofbirth;
        var username = req.body.username;
        var dataContent = {occupation,emailid,phone,dateofbirth,username};
        var registration = new TrainingRegistration(dataContent);
        var validationResult = registration.validateSync();

        var errormessages = [];
        if(validationResult == null){
            console.log("validationResult true");
            Training.findById(trainingid).then((data) =>{
                console.log("309 data ",data);
                data.trainingRegistration.push(registration);
                Promise.all([data.save(),registration.save()]).then((resData)=>{
                    //console.log("resData ",resData.length);
                    res.send({"response" : "success"});
                }).catch((err)=>{
                    console.log("promise err ",err);
                    errormessages.push(err);
                    res.send({"response" : "error", "data" : errormessages});
                });
            }).catch((err)=>{
                console.log("normal err ",err);
                errormessages.push(err);
                res.send({"response" : "error", "data" : errormessages});
            }); 
        }
        else{
            for (x in validationResult.errors) {
                errormessages.push(validationResult.errors[x].message);
            }
            console.log("validationResult false");
            res.send({"response" : "validationerror","data" :errormessages });
        }
    },
    getcarousal(req,res){
        console.log("in getcarousal");

        Carousal.find({active : true}).then((data)=>{
            var trans = data.map((ele) => {
                var required = {
                    src : ele.path,
                    redirectPath : ele.redirectPath
                }; 
                return required;
            });
            Testimonal.find({active : true}).then((dataTesti)=>{
                var transTesti = dataTesti.map((ele) => {
                    var requiredTesti = {
                        src : ele.path
                    }; 
                    return requiredTesti;
                });
                res.send({"response" : "success", "dataCarousal" : trans,"dataTestimonal" : transTesti});
            });
        }).catch((err) =>{
        console.log("err ",err);
            res.send({"response" : "error", "data" : err});
        });
    }
};