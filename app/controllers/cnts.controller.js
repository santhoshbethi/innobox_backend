const db=require("../models");
const contactus=db.cntus;
const msg=db.msg;
exports.addaddress = (req, res) => {
    contactus.create({
        locationName:req.body.locationName,
        locationCountry:req.body.locationCountry,
        locationAddress:req.body.locationAddress,
        locationLat:"0",
        locationLan:"0",
        phoneNumber:req.body.phoneNumber,
        emailAddress:req.body.emailAddress,


})
.then(contactus => {

    res.send({ message: "address addded successfully"});
  })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.getaddress= (req, res) => {
    contactus.findAll({

    }).then(showhome => {

        res.status(200).send({ message: showhome });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.updateaddress=(req,res)=>{
      
    contactus.update({    
      locationName:req.body.locationName,
      locationCountry:req.body.locationCountry,
      locationAddress:req.body.locationAddress,
      locationLat:"0",
      locationLan:"0",
      phoneNumber:req.body.phoneNumber,
      status:req.body.status,
      emailAddress:req.body.emailAddress},{where:{ID:req.body.id}
    }).then(showhome => {
  
      res.status(200).send({ message: showhome });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  };
  exports.updatetext=(req,res)=>{
    
  contactus.update({shtdesc:req.body.text},{where:{ID:req.body.id}
  }).then(showhome => {

    res.status(200).send({ message: showhome });
    
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};
exports.sendmsg = (req, res) => {
    msg.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        company:req.body.company,
        message:req.body.message,
        messageCat:req.body.messagecat,
       


})
.then(contactus => {

    res.send({ message: "req addded successfully"});
  })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.getsendmsg= (req, res) => {
    msg.findAll({

    }).then(showhome => {

        res.status(200).send({ message: showhome });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };