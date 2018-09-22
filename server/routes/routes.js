const multer = require('multer');
const upload = multer();
var json2xls = require('json2xls');

const FrontController = require('../controller/FrontofficeController.js');
const BackController = require('../controller/BackofficeController.js');

module.exports = (appRouter) =>{
    appRouter.get("/front", FrontController.welcome);    
      
    appRouter.post("/backoffice/workshop/add", BackController.addWorkshop);    
    appRouter.get("/backoffice/workshop/view", BackController.viewWorkshop);
    appRouter.get("/backoffice/workshop/edit", BackController.editWorkshopGet);
    appRouter.post("/backoffice/workshop/edit", BackController.editWorkshopPost);
    appRouter.get("/backoffice/workshop/delete", BackController.deleteWorkshop);
    appRouter.get("/backoffice/workshop/deleteimage", BackController.deleteImage);
    appRouter.post("/backoffice/workshop/uploadImage", BackController.uploadImage);

    
    appRouter.post("/backoffice/training/add", BackController.addtraining);
    appRouter.get("/backoffice/training/view", BackController.viewtraining);
    appRouter.post("/backoffice/training/uploadImage", BackController.uploadTrainingImage);
    appRouter.get("/backoffice/training/edit", BackController.editTrainingGet);
    appRouter.get("/backoffice/training/delete", BackController.deleteTraining);
    appRouter.post("/backoffice/training/edit", BackController.editTraining);
    appRouter.get("/backoffice/training/deleteimage", BackController.deleteTrainingImage);
    


    appRouter.post("/backoffice/carousal/addimage", BackController.addCarousal);
    appRouter.get("/backoffice/carousal/viewimage", BackController.viewCarousal);
    appRouter.get("/backoffice/carousal/editcarousalget", BackController.editcarousalget);
    appRouter.post("/backoffice/carousal/update", BackController.updateCarousal);
    appRouter.get("/backoffice/carousal/delete", BackController.deleteCarousal);


    appRouter.post("/backoffice/testimonal/addimage", BackController.addTestimonal);
    appRouter.get("/backoffice/testimonal/viewimage", BackController.viewTestimonal);
    appRouter.get("/backoffice/testimonal/editcarousalget", BackController.edittestimonalget);
    appRouter.post("/backoffice/testimonal/update", BackController.updateTestimonal);
    appRouter.get("/backoffice/testimonal/delete", BackController.deleteTestimonal);


    appRouter.get("/backoffice/exportdata", json2xls.middleware, BackController.exportdata);



    appRouter.get("/frontoffice/workshop/view", FrontController.viewWorkshop);
    appRouter.get("/frontoffice/workshop/particularWorkshop", FrontController.particularWorkshop);
    appRouter.post("/frontoffice/workshop/register", FrontController.registerWorkshop);

    appRouter.get("/frontoffice/training/type/:type", FrontController.viewTraining);
    appRouter.get("/frontoffice/training/details/:id", FrontController.viewParticularTraining);
    appRouter.post("/frontoffice/training/register", FrontController.registerTraining);

    appRouter.get("/frontoffice/carousal/getcarousal", FrontController.getcarousal);
    
        
};