const { verifySignUp } = require("../middleware");
const homepage = require("../controllers/innboxhome.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get("/api/home/menu", homepage.menu);
    app.get("/api/home/homemenu", homepage.frontmenu);
    app.post("/api/home/addmenu", homepage.addmenu);
    app.post("/api/home/updatemenu", homepage.updatemenu);
    app.post("/api/home/updatemenuname", homepage.updatemenuname);
    app.post("/api/home/updatemenuparent", homepage.updatemenuparent);
    app.get("/api/home/gettestimonials", homepage.gettestmnls);
    app.post("/api/home/updatetestimonials", homepage.updatetestimonials); 
    app.post("/api/home/addtestimonials", homepage.addtestimonials);
    app.post("/api/home/testimonials", homepage.tstmbyid);
    app.post("/api/home/hmpcontactus", homepage.hmpcontactus);
    app.post("/api/home/updatemenudata", homepage.updatemenudata);
    app.get("/api/home/getsliderimage", homepage.getsliderimage);
    app.post("/api/home/addsliderimage", homepage.addsliderimage);
    app.post("/api/home/updatesliderimage", homepage.updatesliderimage);
    app.get("/api/home/getserviescat", homepage.getserviescat);
    // static data routes
    app.post("/api/home/addstaticdata", homepage.addstaticdata);
    app.post("/api/home/updatestaticdata", homepage.updatestaticdata);
    app.get("/api/home/getstaticdata", homepage.getstaticdata);


    app.get("/api/home/getwhyinb", homepage.getwhyinb);
    app.post("/api/home/updatewhyinb", homepage.updatewhyinb); 
    app.post("/api/home/addwhyinb", homepage.addwhyinb);


    app.get("/api/home/getwhyus", homepage.getwhyus);
    app.post("/api/home/updatewhyus", homepage.updatewhyus); 
    app.post("/api/home/addwhyus", homepage.addwhyus);


};
