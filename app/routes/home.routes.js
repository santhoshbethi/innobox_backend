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
    app.post("/api/home/addmenu", homepage.addmenu);
    app.post("/api/home/updatemenu", homepage.updatemenu);
    app.post("/api/home/updatemenuname", homepage.updatemenuname);
    app.post("/api/home/updatemenuparent", homepage.updatemenuparent);
    app.get("/api/home/gettestimonials", homepage.gettestmnls);
   // app.post("/api/home/updatetestimonials", homepage.updatetestimonials); pedning
    app.post("/api/home/addtestimonials", homepage.addtestimonials);
    app.post("/api/home/updatetestimonialsstatus", homepage.updatetestimonialsstatus);
    app.post("/api/home/hmpcontactus", homepage.hmpcontactus);
    app.post("/api/home/updatemenudata", homepage.updatemenudata);
};
