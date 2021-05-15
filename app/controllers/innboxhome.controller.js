const db=require("../models");
const menu=db.mnbar;
exports.menu= (req, res) => {
    menu.findAll({

    }).then(showhome => {

        res.status(200).send({ message: showhome });
        
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