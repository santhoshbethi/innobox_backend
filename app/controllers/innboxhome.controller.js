const db=require("../models");
const tstmnls=db.tsmnals;
const sequelize = db.sequelize;
const menu=db.mnbar;
const contus=db.cntus;
const hmslider=db.homeslider;
const enqry=db.enqry;
exports.sliderimage= (req, res) => {
  hmslider.findAll({

  }).then(slider => {

      res.status(200).send({ message: slider });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.menu= (req, res) => {
  
  let nodedata = [];
    menu.findAll({
      where: {refID:'0'}
    }).then(showhome => {
      
      let j=0;
      let promise2='';
    
      for (let i = 0; i < showhome.length; i++)  {     
    promise2 = new Promise(function(resolve, reject) {
       sequelize.query("select * from inb_mnbar where  refID="+showhome[i].dataValues["ID"], { type: sequelize.QueryTypes.SELECT})
     .then(showsubmenu=>{
       
       nodedata.push({'parent':showhome[i].dataValues["ID"],'submenu':showsubmenu});
  
      
      resolve(nodedata); 

     })   
    })
    
      }
      promise2.then(function(result) {
        res.status(200).send({ message: result});
     })
     
      
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
exports.addmenu = (req, res) => {
    menu.create({
        itemName:req.body.menuname, 
        refID:req.body.parent,   
        status:'0',

})
.then(menu => {

    res.send({ message: req.body.menuname });
  })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.updatemenudata=(req,res)=>{
    
    menu.update({refID:req.body.refID,itemName:req.body.menuname,status:req.body.status},{where:{ID:req.body.id}
    }).then(menu => {
  
      res.status(200).send({ message: req.body.menuname   });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
    
  };
exports.updatemenu=(req,res)=>{
  menu.update({status:req.body.status},{where:{ID:req.body.id}
  }).then(showhome => {

    res.status(200).send({ message: showhome });
    
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
  
};
exports.updatemenuname=(req,res)=>{
  menu.update({itemName:req.body.menuname},{where:{ID:req.body.id}
  }).then(showhome => {

    res.status(200).send({ message: showhome });
    
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
  
};
exports.updatemenuparent=(req,res)=>{
  menu.update({refID:req.body.parent},{where:{ID:req.body.id}
  }).then(showhome => {

    res.status(200).send({ message: showhome });
    
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
  
};

exports.addtestimonials = (req, res) => {
  tstmnls.create({
      rank:req.body.rank, 
      content:req.body.content,   
      customerName:req.body.name,

})
.then(tstmnls => {

  res.send({ message: "success" });
})
  .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.gettestmnls= (req, res) => {
  tstmnls.findAll({

  }).then(tstmnls => {

      res.status(200).send({ message: tstmnls });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.updatetestimonialsstatus=(req,res)=>{
  tstmnls.update({status:req.body.status},{where:{ID:req.body.id}
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
      Name:req.body.name, 
      email:req.body.email,   
      message:req.body.message,

})
.then(contus => {

  res.send({ message: "success" });
})
  .catch(err => {
      res.status(500).send({ message: err.message });
    });
};