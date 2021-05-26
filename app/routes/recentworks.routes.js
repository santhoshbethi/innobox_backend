const { verifySignUp } = require("../middleware");
const rectwrks = require("../controllers/recentworks.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get("/api/rectwrks/getcat", rectwrks.getrectwrkcat);
    app.post("/api/rectwrks/addcat", rectwrks.addrectwrkcat);
    app.post("/api/rectwrks/updatecat", rectwrks.updaterectwrkcat);
    app.get("/api/rectwrks/recentwroks", rectwrks.getrecentworks);
    app.post("/api/rectwrks/recentwroksbyid", rectwrks.getrecentworksbyid);

};
