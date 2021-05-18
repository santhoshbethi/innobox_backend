const { verifySignUp } = require("../middleware");
const contactus = require("../controllers/cnts.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
 //   app.get("/api/cts/page", contactus.contactuspage);
 //   app.post("/api/cts/updateimage", contactus.updateimage);
    app.post("/api/cts/updatetext", contactus.updatetext);
    app.get("/api/cts/getaddress", contactus.getaddress);
    app.post("/api/cts/addaddress", contactus.addaddress);
    app.post("/api/cts/updateaddress", contactus.updateaddress);
    app.post("/api/cts/sendmsg", contactus.sendmsg);

   
};
