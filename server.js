const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

var corsOptions = {
  origin: "*"
};



app.use(cors(corsOptions));
app.use(express.static('uploads'));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");

 db.sequelize.sync().then(() => {

  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes	
require('./app/routes/auth.routes')(app);

require('./app/routes/home.routes')(app);
require('./app/routes/web.routes')(app);
require('./app/routes/careers.routes')(app);
require('./app/routes/cnts.routes')(app);
require('./app/routes/recentworks.routes')(app);
require('./app/routes/services.routes')(app);


const User=db.user;
var bcrypt = require("bcryptjs");

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
function initial() {
 
User.create({
  username:'admin',
  email:'admin@innobox.com',
  password: bcrypt.hashSync('admin@innobox.com', 8),
});
User.create({
  username:'webmaster',
  email:'webmaster@innobox.com',
  password: bcrypt.hashSync('admin@innobox.com', 8),
});
User.create({
  username:'HR',
  email:'hr@innobox.com',
  password: bcrypt.hashSync('admin@innobox.com', 8),
});
}