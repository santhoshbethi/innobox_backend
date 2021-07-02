const { verifySignUp } = require("../middleware");
const homepage = require("../controllers/web.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get("/api/web/home/homemenu", homepage.frontmenu);
    app.get("/api/web/cts/getaddress", homepage.getaddress);
    app.get("/api/web/home/gettestimonials", homepage.gettestmnls);
    app.get("/api/web/home/getsliderimage", homepage.getsliderimage);
    app.get("/api/web/home/getserviescat", homepage.getserviescat);
    app.get("/api/web/home/careers", homepage.career);
    app.post("/api/web/home/careerbyid", homepage.careerbyid);
    app.get("/api/web/home/applicants", homepage.applicants);
    app.get("/api/web/rectwrks/getcat", homepage.getrectwrkcat);
    app.get("/api/web/rectwrks/recentwroks", homepage.getrecentworks);
    app.post("/api/web/rectwrks/recentwroksbyid", homepage.getrecentworksbyid);

    app.get("/api/web/services/getservices", homepage.getservices);
    app.post("/api/web/services/getservicesbyid", homepage.getservicesbyid);
    app.post("/api/web/services/getserviceshighlights", homepage.getserviceshtls);
  


};
