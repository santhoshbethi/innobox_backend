const db = require("../models");
const tstmnls = db.tsmnals;
const sequelize = db.sequelize;
const menu = db.mnbar;
const contus = db.cntus;
const hmslider = db.homeslider;
const enqry = db.enqry;
const staticdata = db.homestdata;
const blgs = db.blgs;
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "api"
});
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/home');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + "_" + file.originalname);
  }
});

var upload = multer({ storage: storage }).single('file');

exports.addsliderimage = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    }
    if (req.file) {
      var fileval = '/home/' + req.file.filename;
    }
    else {
      var fileval = '';
    }
    console.log(fileval);
    console.log("test");
    var xyz = {
      title: req.body.title,
      text: req.body.text,
      path: fileval

    };
    hmslider.create(xyz)
      .then(menu => {

        res.send({ message: "Slider successfully" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  });
}
exports.updatesliderimage = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    }
    if (req.file) {
      var fileval = '/home/' + req.file.filename;
    }
    else {
      var fileval = req.body.file;
    }
    console.log(fileval);
    console.log("test");
    var xyz = {
      title: req.body.title,
      text: req.body.text,
      path: fileval

    };

    hmslider.update(xyz, { where: { ID: req.body.id } })
      .then(menu => {

        res.send({ message: "Slider successfully" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  });
}
exports.getsliderimage = (req, res) => {
  hmslider.findAll({

  }).then(slider => {

    res.status(200).send({ message: slider });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.menu = (req, res) => {


  menu.findAll({

  }).then(showMenu => {

    res.status(200).send({ message: showMenu });
  })


    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.addmenu = (req, res) => {
  menu.create({
    itemName: req.body.menuname,
    refID: req.body.parent,
    href: req.body.href,
    status: '0',

  })
    .then(menu => {

      res.send({ message: req.body.menuname });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.updatemenudata = (req, res) => {

  menu.update({ 'href': req.body.href, refID: req.body.refID, itemName: req.body.menuname, status: req.body.status }, {
    where: { ID: req.body.id }
  }).then(menu => {

    res.status(200).send({ message: req.body.menuname });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
exports.updatemenu = (req, res) => {
  menu.update({ status: req.body.status }, {
    where: { ID: req.body.id }
  }).then(showhome => {

    res.status(200).send({ message: showhome });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
exports.updatemenuname = (req, res) => {
  menu.update({ itemName: req.body.menuname }, {
    where: { ID: req.body.id }
  }).then(showhome => {

    res.status(200).send({ message: showhome });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
exports.updatemenuparent = (req, res) => {
  menu.update({ refID: req.body.parent }, {
    where: { ID: req.body.id }
  }).then(showhome => {

    res.status(200).send({ message: showhome });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.addtestimonials = (req, res) => {
  tstmnls.create({
    rank: req.body.rank,
    content: req.body.content,
    customerName: req.body.name,

  })
    .then(tstmnls => {

      res.send({ message: "success" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.gettestmnls = (req, res) => {
  tstmnls.findAll({

  }).then(tstmnls => {

    res.status(200).send({ message: tstmnls });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.updatetestimonialsstatus = (req, res) => {
  tstmnls.update({ status: req.body.status }, {
    where: { ID: req.body.id }
  }).then(tstmnls => {

    res.status(200).send({ message: tstmnls });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};


exports.hmpcontactus = (req, res) => {
  console.log(req.body.name);
  enqry.create({
    Name: req.body.name,
    email: req.body.email,
    message: req.body.message,

  })
    .then(contus => {

      res.send({ message: "success" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
// static data
exports.addstaticdata = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    }
    if (req.file) {
      var fileval = '/home/' + req.file.filename;
    }
    else {
      var fileval = req.body.file;
    }

    var xyz = {
      title: req.body.title,
      value: fileval,
      type: req.body.type

    };
    staticdata.create(xyz)
      .then(menu => {

        res.send({ message: "data successfully" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  });
}
exports.updatestaticdata = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    }
    if (req.file) {
      var fileval = '/home/' + req.file.filename;
    }
    else {
      var fileval = req.body.file;
    }

    var xyz = {
      title: req.body.title,
      value: fileval,
      type: req.body.type

    };

    staticdata.update(xyz, { where: { ID: req.body.id } })
      .then(menu => {

        res.send({ message: "Slider successfully" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  });
}
exports.getstaticdata = (req, res) => {
  staticdata.findAll({

  }).then(slider => {

    res.status(200).send({ message: slider });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getserviescat = (req, res) => {
  blgs.findAll({
    attributes: ['ID', 'title', 'image1', 'qtxt', 'shdcr']

  }).then(slider => {

    res.status(200).send({ message: slider });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.frontmenu = (req, res) => {
  let nodedata = [];
    menu.findAll({
     
    }).then(list => {      
     
      var map = {}, node, roots = [], i;
    
      for (i = 0; i < list.length; i += 1) {
        
        map[list[i].ID] = i; // initialize the map
        list[i].children = []; // initialize the children
        
      }
      
      for (i = 0; i < list.length; i += 1) {
       
        node = list[i];
        console.log(node);
        if (node.refID !== "0") {
         
          list[map[node.refID]].children.push(node);
          
        } else {
          roots.push(node);
        }
      }
        res.status(200).send({ message: roots});
  
     })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  function list_to_tree(list) {
    var map = {}, node, roots = [], i;
    
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== "0") {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }