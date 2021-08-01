const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.blgs = require("../models/inb_blgs.model.js")(sequelize, Sequelize);
db.career = require("../models/inb_career.model.js")(sequelize, Sequelize);
db.homeslider = require("../models/inb_homeslider.model.js")(sequelize, Sequelize);
db.cntus = require("../models/inb_cntus.model.js")(sequelize, Sequelize);
db.emptlk = require("../models/inb_emptlk.model.js")(sequelize, Sequelize);
db.enqry = require("../models/inb_enqry.model.js")(sequelize, Sequelize);
db.hglts = require("../models/inb_hglts.model.js")(sequelize, Sequelize);
db.jbaptns = require("../models/inb_jbaptns.model.js")(sequelize, Sequelize);
db.jbdscr = require("../models/inb_jbdscr.model.js")(sequelize, Sequelize);
db.mnbar = require("../models/inb_mnbar.model.js")(sequelize, Sequelize);
db.msg = require("../models/inb_msg.model.js")(sequelize, Sequelize);
db.magcats = require("../models/inb_msgcats.model.js")(sequelize, Sequelize);
db.tsmnals = require("../models/inb_tsmnals.model.js")(sequelize, Sequelize);
db.careerimgs = require("../models/inb_careerimgs.model.js")(sequelize, Sequelize);
db.rcntwcat = require("../models/inb_rcntwcat.model.js")(sequelize, Sequelize);
db.ctspage = require("../models/inb_ctspage.model.js")(sequelize, Sequelize);
db.recentworks = require("../models/inb_rctwrks.model.js")(sequelize, Sequelize);
db.inb_stcdataact = require("../models/inb_homepagestaticdataact.model.js")(sequelize, Sequelize);
db.whyinb = require("../models/inb_whyinb.model.js")(sequelize, Sequelize);
db.abtus = require("../models/inb_aboutus.model.js")(sequelize, Sequelize);
db.whyus = require("../models/inb_whyus.model.js")(sequelize, Sequelize);
db.topimage = require("../models/inb_topimg.model.js")(sequelize, Sequelize);



db.user = require("../models/user.model.js")(sequelize, Sequelize);







module.exports = db;
