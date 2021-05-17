const { verifySignUp } = require("../middleware");
const homepage = require("../controllers/careers.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get("/api/home/careers", homepage.career);
    app.post("/api/home/addcareers", homepage.addcareer);
    app.post("/api/home/updatecareers", homepage.updatecareer);
    app.post("/api/home/careerbyid", homepage.careerbyid);
    app.get("/api/home/emptlk", homepage.emptlk);
    app.post("/api/home/createemptlk", homepage.createemptlk);
};
