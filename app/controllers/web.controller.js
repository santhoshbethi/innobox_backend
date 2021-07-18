const db=require("../models");
const contactus=db.cntus;
const menu = db.mnbar;
const msg=db.msg;
const career=db.career;
const emptlk=db.emptlk;
const careerdesc=db.jbdscr;
const tstmnls = db.tsmnals;
const sequelize = db.sequelize;

const contus = db.cntus;
const hmslider = db.homeslider;
const enqry = db.enqry;
const staticdata = db.homestdata;
const blgs = db.blgs;
const rectwrkcat=db.rcntwcat;
const recentworks=db.recentworks;
const jbaptns=db.jbaptns;
const services=db.blgs;
const whyinb=db.whyinb;


const highlts=db.hglts;

  exports.getaddress= (req, res) => {
    contactus.findAll({
      where:{status:'0'}
    }).then(showhome => {

        res.status(200).send({ message: showhome });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.frontmenu = (req, res) => {
    let nodedata = [];
      menu.findAll({
        where:{status:'0'}
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
    exports.gettestmnls = (req, res) => {
      tstmnls.findAll({
        where:{status:'0'}
      }).then(tstmnls => {
    
        res.status(200).send({ message: tstmnls });
    
      })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getsliderimage = (req, res) => {
      hmslider.findAll({
        where:{status:'0'}
      }).then(slider => {
    
        res.status(200).send({ message: slider });
    
      })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getserviescat = (req, res) => {
      blgs.findAll({
        attributes: ['ID', 'title', 'image1', 'qtxt', 'shdcr'],
        where:{status:'0'}
    
      }).then(slider => {
    
        res.status(200).send({ message: slider });
    
      })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.career= (req, res) => {
      career.findAll({
        where:{status:'0'}
      }).then(career => {
  
          res.status(200).send({ message: career });
          
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.careerbyid= (req, res) => {
      career.findOne({
        where: {ID: req.body.id}, 
  
      }).then(career => {
  
          res.status(200).send({ message: career });
          
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.applicants= (req, res) => {
      jbaptns.findAll({
        where:{status:'0'}
       
      }).then(career => {
    
          res.status(200).send({ message: career });
          
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getaddress= (req, res) => {
      contactus.findAll({
        where:{status:'0'}
  
      }).then(showhome => {
  
          res.status(200).send({ message: showhome });
          
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getrectwrkcat= (req, res) => {
      rectwrkcat.findAll({
        where:{status:'0'}
      }).then(showhome => {
    
          res.status(200).send({ message: showhome });
          
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getrecentworksbyid= (req, res) => {
      recentworks.findAll({
        where:{ID:req.body.id}
    
      }).then(showhome => {
    
          res.status(200).send({ message: showhome });
          
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getrecentworks= (req, res) => {
      recentworks.findAll({
        
        where:{status:'0'}
      }).then(showhome => {
    
          res.status(200).send({ message: showhome });
          
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getservices= (req, res) => {
      services.findAll({
        where:{status:'0'}
    }).then(showhome => {
  
        res.status(200).send({ message: showhome });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  
  exports.getserviceshtls= (req, res) => {
      highlts.findAll({
           where: {serviceID:req.body.id}
  
    }).then(showhome => {
  
        res.status(200).send({ message: showhome });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.getservicesbyid= (req, res) => {
  
    let nodedata = [];
      services.findAll({
        where: {serviceID:req.body.id}
      }).then(showhome => {     
           
     
         sequelize.query("select * from inb_hglts where  serviceID="+showhome['0'].dataValues["ID"], { type: sequelize.QueryTypes.SELECT})
       .then(showsubmenu=>{
         
         nodedata.push({'maindata':showhome,'hiighlights':showsubmenu});
    
        
         res.status(200).send({ message: nodedata}); 
  
       })    
         
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getwhyinb = (req, res) => {
      whyinb.findAll({
        where:{status:'0'}
      }).then(tstmnls => {
    
        res.status(200).send({ message: tstmnls });
    
      })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getwhyus = (req, res) => {
      whyus.findAll({
        where:{status:'0'}
      }).then(tstmnls => {
    
        res.status(200).send({ message: tstmnls });
    
      })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    exports.getemptlk = (req, res) => {
      emptlk.findAll({
        where:{status:'0'}
      }).then(tstmnls => {
    
        res.status(200).send({ message: tstmnls });
    
      })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };