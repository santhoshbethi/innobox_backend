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
        itemName:req.body.name,    

})
.then(menu => {

    res.send({ message: "Menu added successfully" });
  })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };