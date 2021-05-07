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
};
