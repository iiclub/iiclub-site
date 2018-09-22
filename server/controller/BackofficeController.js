var fs = require('fs');
const Carousal = require("../model/carousal");
const multerconfig = require("../model/multer");
const Workshop = require("../model/workshop");
const Training = require("../model/Training");
const TrainingRegistration = require("../model/TrainingRegistration");
const WorkshopRegistration = require("../model/workshopRegistration");
const Testimonal = require("../model/Testimonal");


module.exports = {
    welcome(req,res){
        console.log("default route invoked via get for backofficecontroller");
        res.send({"hi":"welcome back"});
    },
    addCarousal(req,res){
        console.log("in addCarousal method");
        var imageStorePath = "carousal";
        const multerUpload = multerconfig.upload(imageStorePath);
        multerUpload(req,res,(err)=>{
            console.log("called multerObject.upload ");
            if(err){
                console.log("err:: ",err);
                res.send({"res":"in addCarousal error"});
            }
            else{
                var imagePath = "/upload/"+imageStorePath+"/"+req.file.filename;
                var redirectPath = req.body.redirectpath;
                console.log("imagePath ",imagePath);
                console.log("redirectPath ",redirectPath);

                var carousal = new Carousal({
                    imagePath : imagePath,
                    redirectPath : redirectPath
                });
                carousal.save().then((result)=>{
                    console.log("result: ",result);
                    res.send({"res":"in addCarousal success"});
                }).catch((err)=>{
                    res.send({"err":err});
                }); 
            }
        });
    },
    addWorkshop(req,res){
        console.log("in method addWorkshop req.body ");
        var imageStorePath = "workshop";
        const multerUpload = multerconfig.upload(imageStorePath);
        multerUpload(req,res,(err)=>{
            console.log("inside multerUpload ");
            
            if(err){
                console.log("err:: ",err);
                res.send({"res":"in bo error"});
            }
            else{
                //console.log("res:: ",req.body);
                const title = req.body.title;
                const overview = req.body.overview; 
                
                var sessionplan = req.body.sessionplan;
                var dateduration = req.body.dateduration;
                var feedetails = req.body.feedetails;
                var otherdetails = req.body.otherdetails;
                var active = req.body.active;
                active = (active == "true") ? true : false;
                var date = req.body.date;
                var time = req.body.time;

               console.log("sessionplan ", sessionplan );

               try{
                    sessionplan = JSON.parse(sessionplan);
                    dateduration = JSON.parse(dateduration);
                    feedetails = JSON.parse(feedetails);
                    otherdetails = JSON.parse(otherdetails);
                    
                    sessionplan = sessionplan.map(ele => ele);
                    dateduration = dateduration.map(ele => ele);
                    feedetails = feedetails.map(ele => ele);
                    otherdetails = otherdetails.map(ele => ele);
               }
               catch(ee){
                   console.log("catch err " ,ee);
               }
               //console.log("sessionplan " , Object.values(sessionplan));
                
               //res.send({"res": "success"});
                 var staticPath = '/upload/'+imageStorePath+'/';
                var imageArray=[];
                req.files.forEach((element,index) => {
                    console.log("staticPath ",(staticPath+element.filename));
                    imageArray.push({path : (staticPath+element.filename)});
                });
                console.log("imageArray ",imageArray);
                const workshop = new Workshop({
                    title : title,
                    overview: overview,
                    images : imageArray,
                    sessionplan:sessionplan,
                    dateduration:dateduration,
                    feedetails:feedetails,
                    otherdetails:otherdetails,
                    active : active,
                    startdate : date,
                    starttime : time
                });
                workshop.save().then((data)=>{
                    res.send({"res": "success", "data" : data});
                })
                .catch((err)=>{
                    res.send({"res": "error", "err" : err});
                });  
            }
        });
    },
    viewWorkshop(req,res){
        console.log("in viewWorkshop method ");
         Workshop.find({}).then((data)=>{
            
            console.log("data length ",data.length);
            var properData = [];
            var temp = {};
            data.forEach((element,index) => {
                temp = {};
                temp._id = element._id;
                temp.active = element.active;
                temp.title = element.title;
                properData.push(temp);
            });

            res.send({"response" :"success", "data" : properData});
        }).catch((err) =>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        }); 
       /*  res.send({"response" :"success"}); */
    },
    editWorkshopGet(req,res){
        console.log("in editWorkshopGet method ");
        var id = req.query.id;
        console.log("id ",id);
        Workshop.findById(id)
        .populate('array').then((data) =>{
            console.log("mon success ",data);
            res.send({"response" : "success", "data" : data});
        }).catch((err)=>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        })

        //res.send({"response" : "success edit",});
    },
    editWorkshopPost(req,res){
        console.log("in editWorkshopPost method ");

        const title = req.body.title;
        const overview = req.body.overview;
        const sessionplan = req.body.sessionplan;
        const dateduration = req.body.dateduration;
        const feedetails = req.body.feedetails;
        const otherdetails = req.body.otherdetails;
        const active = req.body.active;
        const id = req.body.id;
        const imagesList = req.body.imagesList;
        const date = req.body.date;
        const time = req.body.time;

        console.log(req.body);

        var content = {
            title : title,
            overview: overview,
            sessionplan:sessionplan,
            dateduration:dateduration,
            feedetails:feedetails,
            otherdetails:otherdetails,
            active : active,
            startdate : date,
            starttime : time,
            images : imagesList
        };

        Workshop.findByIdAndUpdate(id,content,{new: true})
        .then((data) =>{
            console.log("update success data ");
            res.send({"response" : "success", "data" : data,"req.body" : req.body});
        }).catch((err) =>{
            console.log("update success err ");
            res.send({"response" : "error", "data" : err,"req.body" : req.body});
        });
    },
    deleteWorkshop(req,res){
        console.log("in deleteWorkshop method");
        var id = req.query.id;
        
        Workshop.findOneAndRemove({_id :id }).then((data) =>{
            res.send({"response" : "success","data" : data});
        }).catch((err) =>{
            res.send({"response" : "error","data" : err});
        })        
    },
    deleteImage(req,res){
        console.log("in deleteImage method req.query ",req.query);
        var id = req.query.id;
        var imageid = req.query.imageid;
        
        var staticPath = appRoot+'/../static';
        console.log("staticPath ",staticPath);

        Workshop.findOne({ _id: id }).then((data)=>{
            
            var index = data.images.findIndex((image) => {
                return image._id.toString() == imageid;
            });
            console.log("data images: ",data.images[index].path);
            fs.unlink(staticPath+data.images[index].path, (err) => {
                if (err){
                    console.log('error while unlinking file ',err);
                }
                else{
                    console.log('file deleted successfully');
                    data.images[index].remove();
                    return data.save();
                }
            }); 
        }).then((data2) =>{
            res.send({"response" : "success","data" : data2});
            //res.send({"response" : "success"});
        }).catch((err)=>{
            console.log("delete failed ",err);
            res.send({"response" : "error"});
        });
    },
    uploadImage(req,res){
        console.log("in uploadImage method ");

        var imageStorePath = "workshop";
        const multerUpload = multerconfig.upload(imageStorePath);
        multerUpload(req,res,(err)=>{
            console.log("inside multerUpload ");
            if(err){
                console.log("err:: ",err);
                res.send({"res":"in bo error"});
            }
            else{
                var staticPath = '/upload/'+imageStorePath+'/';
                var imageArray=[];
                req.files.forEach((element,index) => {
                    console.log("staticPath ",(staticPath+element.filename));
                    imageArray.push({path : (staticPath+element.filename)});
                });
                console.log("imageArray ",imageArray);
                var myid = req.body.id;
                console.log("myid ",myid);

                Workshop.findOne({ _id: myid }).then((data) =>{

                    for(var i=0;i<imageArray.length;i++){
                        data.images.push(imageArray[i]);
                    }
                    return data.save();
                }).then((data2) =>{
                    console.log("save success");
                    res.send({"response" : "success","data" : data2});
                }).catch((err)=>{
                    console.log("save failed ",err);
                    res.send({"response" : "error"});
                });


            }
        });

    },

    addtraining(req,res){
        console.log("in add training ",req.body);

        var training = new Training(req.body);
        training.save().then((data) =>{
            console.log("save success");
            res.send({"response" : "success"});    
        }).catch((err) =>{
            console.log("training err ",err);
            res.send({"response" : "error"});
        });
        
    },
    viewtraining(req,res){
        console.log("in viewtraining ");


        Training.find({}).then((data)=>{
            
            console.log("data length ",data.length);
            var properData = [];
            var temp = {};
            data.forEach((element,index) => {
                temp = {};
                temp._id = element._id;
                temp.level = element.level;
                temp.name = element.name;
                properData.push(temp);
            });

            res.send({"response" :"success", "data" : properData});
        }).catch((err) =>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        }); 

    },
    uploadTrainingImage(req,res){
        console.log("in uploadTrainingImage ");


        var imageStorePath = "training";
        const multerUpload = multerconfig.upload(imageStorePath);
        multerUpload(req,res,(err)=>{
            console.log("inside multerUpload ");
            if(err){
                console.log("err:: ",err);
                res.send({"res":"in bo error"});
            }
            else{
                var staticPath = '/upload/'+imageStorePath+'/';
                var imageArray=[];
                req.files.forEach((element,index) => {
                    console.log("staticPath ",(staticPath+element.filename));
                    imageArray.push({path : (staticPath+element.filename),active : false});
                });
                console.log("imageArray ",imageArray);
                var myid = req.body.id;
                console.log("myid ",myid);

                Training.findOne({ _id: myid }).then((data) =>{

                    for(var i=0;i<imageArray.length;i++){
                        data.images.push(imageArray[i]);
                    }
                    return data.save();
                }).then((data2) =>{
                    console.log("save success");
                    res.send({"response" : "success","data" : data2});
                }).catch((err)=>{
                    console.log("save failed ",err);
                    res.send({"response" : "error"});
                });


            }
        });

    },
    editTrainingGet(req,res){
        console.log("in editTrainingGet method ");
        var id = req.query.id;
        console.log("id ",id);
        Training.findById(id)
        .populate('array').then((data) =>{
            console.log("mon success ",data);
            res.send({"response" : "success", "data" : data});
        }).catch((err)=>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        })      
    },
    deleteTraining(req,res){
        console.log("in deleteTraining method");
        var id = req.query.id;
        
        Training.findOneAndRemove({_id :id }).then((data) =>{
            res.send({"response" : "success","data" : data});
        }).catch((err) =>{
            res.send({"response" : "error","data" : err});
        })   
    },
    editTraining(req,res){
        console.log("in editTraining method ",req.body);

        var id = req.body.id;
        var name =  req.body.name;
        var level =  req.body.level;
        var overview =  req.body.overview;
        var topic =   req.body.topic;
        var kitcontents =  req.body.kitcontents;
        var duration =  req.body.duration;
        var finalcondition =  req.body.finalcondition;
        var images =  req.body.images;
        var content = {name,level,overview,topic, kitcontents, duration,finalcondition,images};

        //res.send({"response" : "success"});
        Training.findByIdAndUpdate(id,content,{new: true})
        .then((data) =>{
            console.log("update success data ");
            res.send({"response" : "success", "data" : data,"req.body" : req.body});
        }).catch((err) =>{
            console.log("update success err ");
            res.send({"response" : "error", "data" : err,"req.body" : req.body});
        }); 
    },
    deleteTrainingImage(req,res){
        console.log("in deleteTrainingImage method ");


        console.log("in deleteImage method req.query ",req.query);
        var id = req.query.id;
        var imageid = req.query.imageid;
        
        var staticPath = appRoot+'/../static';
        console.log("staticPath ",staticPath);

        Training.findOne({ _id: id }).then((data)=>{
            
            var index = data.images.findIndex((image) => {
                return image._id.toString() == imageid;
            });
            console.log("data images: ",data.images[index].path);
            fs.unlink(staticPath+data.images[index].path, (err) => {
                if (err){
                    console.log('error while unlinking file ',err);
                }
                else{
                    console.log('file deleted successfully');
                    data.images[index].remove();
                    return data.save();
                }
            }); 
        }).then((data2) =>{
            res.send({"response" : "success","data" : data2});
            //res.send({"response" : "success"});
        }).catch((err)=>{
            console.log("delete failed ",err);
            res.send({"response" : "error"});
        });


    },
    addCarousal(req,res){
        console.log("in addCarousal ");
        

        var imageStorePath = "carousal";
        const multerUpload = multerconfig.upload(imageStorePath);
        multerUpload(req,res,(err)=>{
            console.log("inside multerUpload ");
            if(err){
                console.log("err:: ",err);
                res.send({"res":"in bo error"});
            }
            else {
                var staticPath = '/upload/'+imageStorePath+'/';
                var imageArray=[];
                req.files.forEach((element,index) => {
                    console.log("staticPath ",(staticPath+element.filename));
                    imageArray.push({path : (staticPath+element.filename),active : false});
                });
                console.log("imageArray ",imageArray);

                var addCarousal;
                if(imageArray.length >0){
                    imageArray.forEach((singleele,index) =>{
                        console.log("singleele ",singleele);
                        addCarousal = null;
                        addCarousal = new Carousal(singleele);
                        addCarousal.save().then((data) =>{
                            console.log("save success data",data);
                        }).catch((err)=>{
                            console.log("save failed ",err);
                        });
                    });
                    res.send({"response" : "success"});
                } 
            }
        });

    },
    viewCarousal(req,res){
        console.log("in viewCarousal ");
        Carousal.find({}).then((data)=>{
            res.send({"response" :"success", "data" : data});
        }).catch((err) =>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        }); 

    },
    editcarousalget(req,res){
        console.log("in editcarousalget method ");
        var id = req.query.id;
        console.log("id ",id);
        Carousal.findById(id)
        .populate('array').then((data) =>{
            console.log("mon success ",data);
            res.send({"response" : "success", "data" : data});
        }).catch((err)=>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        })   

    },
    updateCarousal(req,res){
        console.log("in updateCarousal method ",req.body);
        var id = req.body._id;
        var active = req.body.active;
        var path = req.body.path;
        var redirectPath = req.body.redirectPath;
        var content = {active : active,path : path, redirectPath : redirectPath};
        
        console.log("content ",content);
        
        Carousal.findByIdAndUpdate(id,content,{new: true})
        .then((data) =>{
            console.log("update success data ", data);
            res.send({"response" : "success", "data" : data});
        }).catch((err) =>{
            console.log("update error err ");
            res.send({"response" : "error", "data" : err});
        });
    },
    deleteCarousal(req,res){
        console.log("in deleteCarousal method ",req.query);
        var id = req.query.id;
        var staticPath = appRoot+'/../static';
        console.log("staticPath ",staticPath);

        Carousal.findOne({ _id: id }).then((data)=>{
            console.log("data images: ",data.path);
            fs.unlink(staticPath+data.path, (err) => {
                if (err){
                    console.log('error while unlinking file ',err);
                }
                else{
                    console.log('file deleted successfully');
                    data.remove();
                    return data.save();
                }
            }); 
        }).then((data2) =>{
            res.send({"response" : "success","data" : data2});
        }).catch((err)=>{
            console.log("delete failed ",err);
            res.send({"response" : "error"});
        });
    },
    addTestimonal(req,res){
        console.log("in addTestimonal ");
        

        var imageStorePath = "testimonals";
        const multerUpload = multerconfig.upload(imageStorePath);
        multerUpload(req,res,(err)=>{
            console.log("inside multerUpload ");
            if(err){
                console.log("err:: ",err);
                res.send({"res":"in bo error"});
            }
            else {
                var staticPath = '/upload/'+imageStorePath+'/';
                var imageArray=[];
                req.files.forEach((element,index) => {
                    console.log("staticPath ",(staticPath+element.filename));
                    imageArray.push({path : (staticPath+element.filename),active : false});
                });
                console.log("imageArray ",imageArray);

                var addTestimonal;
                if(imageArray.length >0){
                    imageArray.forEach((singleele,index) =>{
                        console.log("singleele ",singleele);
                        addTestimonal = null;
                        addTestimonal = new Testimonal(singleele);
                        addTestimonal.save().then((data) =>{
                            console.log("save success data",data);
                        }).catch((err)=>{
                            console.log("save failed ",err);
                        });
                    });
                    res.send({"response" : "success"});
                } 
            }
        });
    },
    viewTestimonal(req,res){
        console.log("in viewTestimonal ");
        Testimonal.find({}).then((data)=>{
            res.send({"response" :"success", "data" : data});
        }).catch((err) =>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        }); 
    },
    edittestimonalget(req,res){
        console.log("in edittestimonalget method ");
        var id = req.query.id;
        console.log("id ",id);
        Testimonal.findById(id)
        .populate('array').then((data) =>{
            console.log("mon success ",data);
            res.send({"response" : "success", "data" : data});
        }).catch((err)=>{
            console.log("mon err ",err);
            res.send({"response" : "error", "data" : err});
        })   
    },
    updateTestimonal(req,res){
        console.log("in updateTestimonal method ",req.body);
        var id = req.body._id;
        var active = req.body.active;
        var content = {active : active};
        
        console.log("content ",content);
        
        Testimonal.findByIdAndUpdate(id,content,{new: true})
        .then((data) =>{
            console.log("update success data ", data);
            res.send({"response" : "success", "data" : data});
        }).catch((err) =>{
            console.log("update error err ");
            res.send({"response" : "error", "data" : err});
        });
    },
    deleteTestimonal(req,res){
        console.log("in deleteTestimonal method ",req.query);
        var id = req.query.id;
        var staticPath = appRoot+'/../static';
        console.log("staticPath ",staticPath);

        Testimonal.findOne({ _id: id }).then((data)=>{
            console.log("data images: ",data.path);
            fs.unlink(staticPath+data.path, (err) => {
                if (err){
                    console.log('error while unlinking file ',err);
                }
                else{
                    console.log('file deleted successfully');
                    data.remove();
                    return data.save();
                }
            }); 
        }).then((data2) =>{
            res.send({"response" : "success","data" : data2});
        }).catch((err)=>{
            console.log("delete failed ",err);
            res.send({"response" : "error"});
        });
    },

    exportdata(req,res){
        console.log("in exportdata ",req.query);
        
        var fromdate  = req.query.fromdate;
        var todate = req.query.todate;
        var exporttype = req.query.export;

        var from_date = new Date(fromdate).toISOString();
        var to_date = new Date(todate).toISOString();
        
        /* TrainingRegistration
        WorkshopRegistration */
        var currentdate = new Date();
        var currentFullDate = currentdate.getFullYear()+"-"+currentdate.getMonth()+"-"+currentdate.getDate()+"-"+currentdate.getTime();

        if(exporttype == "workshop"){
            WorkshopRegistration.find({
                "registrationDate": {
                    "$gte": from_date, 
                    "$lte": to_date
                }
            }).then((data) =>{
                console.log("WorkshopRegistration data ",data);
                res.xls('workshop_data-'+currentFullDate+'.xlsx', data);
            }).catch(err => {
                console.log(" WorkshopRegistration err ",err);
                res.send({"response" : "error","data" : err});
            });

        }
        else if(exporttype == "training"){
            TrainingRegistration.find({
                "registrationDate": {
                    "$gte": from_date, 
                    "$lte": to_date
                }
            }).then((data) =>{
                console.log("TrainingRegistration data ",data);
                res.xls('training_data-'+currentFullDate+'.xlsx', data);
            }).catch(err => {
                console.log("TrainingRegistration err ",err)
                res.send({"response" : "error","data" : err});
            });

        }
        


        /* res.send({"response" : "success export"}); */
        //res.xls('data.xlsx', json);
    }

};