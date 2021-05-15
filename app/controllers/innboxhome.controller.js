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

})
.then(menu => {

    res.send({ message: req });
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