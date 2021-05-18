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
  exports.updateaddress=(req,res)=>{
      var Param=req.body.Key;
    contactus.update({param:req.body.value},{where:{ID:req.body.id}
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
        name:name,
        email:email,
        phone:phone,
        company:company,
        message:message,
        messagecat:messagecat,
       


})
.then(contactus => {

    res.send({ message: "req addded successfully"});
  })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };