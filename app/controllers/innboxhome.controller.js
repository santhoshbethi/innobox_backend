const db = require("../models");
const tstmnls = db.tsmnals;
const sequelize = db.sequelize;
const menu = db.mnbar;
const contus = db.cntus;
const hmslider = db.homeslider;
const enqry = db.enqry;

const staticdata = db.inb_stcdataact;
const whyinb=db.whyinb;
const blgs = db.blgs;
const emptlk=db.emptlk;
const whyus=db.whyus;
const abtus=db.abtus;
const topimg=db.topimage;

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
    
   
    var xyz = {
      title: req.body.title,
      text: req.body.text,
      path: fileval,
      status:req.body.status,

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
    customerName: req.body.customerName,

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
exports.updatetestimonials = (req, res) => { 

  tstmnls.update({ status: req.body.status,
    rank: req.body.rank,
    content: req.body.content,
    customerName: req.body.customerName
   }, {
    where: { ID: req.body.id }
  }).then(tstmnls => {

    res.status(200).send({ message: tstmnls });

  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
exports.tstmbyid= (req, res) => {
  tstmnls.findOne({
    where: {ID: req.body.id}, 

  }).then(career => {

      res.status(200).send({ message: career });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.hmpcontactus = (req, res) => {
 
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
  
    var xyz = {
      title: req.body.title,
      value: req.body.value,
     

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
      

    var xyz = {
      title: req.body.title,
     status:req.body.status,
      value: req.body.value

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


exports.addabtus = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    }
    if (req.file) {
      var fileval = '/home/' + req.file.filename;
    }
  
    var xyz = {
      title: req.body.title,
      value: req.body.value,
     

    };
    abtus.create(xyz)
      .then(menu => {

        res.send({ message: "data successfully" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  });
}
exports.updateabtus = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    }
      

    var xyz = {
      title: req.body.title,
     status:req.body.status,
      value: req.body.value

    };

    abtus.update(xyz, { where: { ID: req.body.id } })
      .then(menu => {

        res.send({ message: "Slider successfully" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  });
}
exports.getabtus = (req, res) => {
  abtus.findAll({

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

  exports.addwhyinb = (req, res) => {
    whyinb.create({
      title: req.body.title,
      content: req.body.content,
     
  
    })
      .then(tstmnls => {
  
        res.send({ message: "success" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.getwhyinb = (req, res) => {
    whyinb.findAll({
  
    }).then(tstmnls => {
  
      res.status(200).send({ message: tstmnls });
  
    })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.updatewhyinb = (req, res) => { 
  
    whyinb.update({ status: req.body.status,
      title: req.body.title,
      content: req.body.content,
     
     }, {
      where: { ID: req.body.id }
    }).then(tstmnls => {
  
      res.status(200).send({ message: tstmnls });
  
    })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  
  };

  exports.addwhyus = (req, res) => {
    upload(req,res,function(err) {
      if(err) {
           return res.send(err);
           }   
           if(req.file)
           {
       
             var fileval='/home/'+req.file.filename;
           }
           
           var xyz={
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            path:fileval,   
         
               };
               whyus.create(xyz)     

  
      .then(tstmnls => {
  
        res.send({ message: "success" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
    });
  }
  
  exports.getwhyus = (req, res) => {
    whyus.findAll({
  
    }).then(tstmnls => {
  
      res.status(200).send({ message: tstmnls });
  
    })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.updatewhyus = (req, res) => { 
    upload(req,res,function(err) {
      if(err) {
           return res.send(err);
           }   
           if(req.file)
           {
             var fileval='/home/'+req.file.filename;
           }
           var xyz={
      status:req.body.status, 
          
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            path:fileval,   
           
            
               };
            
            
               whyus.update(xyz,{where:{ID:req.body.id}})     
  
.then(tstmnls => {
  
      res.status(200).send({ message: tstmnls });
  
    })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
    });
  
  }


  exports.addemptlk = (req, res) => {
    emptlk.create({
      name: req.body.name,
      message: req.body.message,
     
  
    })
      .then(tstmnls => {
  
        res.send({ message: "success" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.getemptlk = (req, res) => {
    emptlk.findAll({
  
    }).then(tstmnls => {
  
      res.status(200).send({ message: tstmnls });
  
    })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.updateemptlk = (req, res) => { 
  
    emptlk.update({ status: req.body.status,
      name: req.body.name,
      message: req.body.message,
     
     }, {
      where: { ID: req.body.id }
    }).then(tstmnls => {
  
      res.status(200).send({ message: tstmnls });
  
    })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  
  };

  exports.addtopimg = (req, res) => {
    upload(req, res, function (err) {
      if (err) {
        return res.send(err);
      }
      if (req.file) {
        var fileval = '/home/' + req.file.filename;
      }
    
      var xyz = {
        title: req.body.title,
        text: req.body.text,
        path: fileval
  
      };
      topimg.create(xyz)
        .then(menu => {
  
          res.send({ message: "Slider successfully" });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  
    });
  }
  exports.updatetopimg = (req, res) => {
    upload(req, res, function (err) {
      if (err) {
        return res.send(err);
      }
      if (req.file) {
        var fileval = '/home/' + req.file.filename;
      }
      
  
      var xyz = {
        title: req.body.title,
        text: req.body.text,
        path: fileval,
        status:req.body.status,
  
      };
  
      topimg.update(xyz, { where: { ID: req.body.id } })
        .then(menu => {
  
          res.send({ message: "Slider successfully" });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  
    });
  }
  exports.gettopimg = (req, res) => {
    topimg.findAll({
  
    }).then(slider => {
  
      res.status(200).send({ message: slider });
  
    })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  