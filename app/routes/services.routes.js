const { verifySignUp } = require("../middleware");
const services = require("../controllers/services.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get("/api/services/getservices", services.getservices);
    app.post("/api/services/getservicesbyid", services.getservicesbyid);
    app.post("/api/services/getserviceshighlights", services.getserviceshtls);
    app.post("/api/services/addservices", services.addservices);
    app.post("/api/services/addserviceshtls", services.addserviceshtls);
    app.post("/api/services/updateservices", services.updateservices);
    app.post("/api/services/updateserviceshtls", services.updateserviceshtls);
    app.post("/api/services/addservicesimage", services.addservicesimage);
    app.post("/api/services/getotherservices", services.getotherservices);
    

};
