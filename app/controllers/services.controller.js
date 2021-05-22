const db=require("../models");
const services=db.blgs;
const highlts=db.hglts;
exports.addserviceshtls=(req, res) => {
    highlts.create({
      serviceID:req.body.servicesid,
      contnt:req.body.content
       
})
.then(services => {

  res.send({ message:  req.body.servicesid});
})
  .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.addservices = (req, res) => {
    services.create({
        title:req.body.title,
        qtxt:req.body.quicktext,
        shdcr:req.body.shortdescr,
        fdcr:req.body.fulldcr,
       
})
.then(services => {

  res.send({ message:  req.body.title});
})
  .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.getservices= (req, res) => {
    services.findAll({

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

exports.updateservices=(req,res)=>{
  
     services.update({
        title:req.body.title,
        qtxt:req.body.quicktext,
        shdcr:req.body.shortdescr,
        fdcr:req.body.fulldcr,
    },{where:{ID:req.body.id}
}).then(rectwrkcatx => {

  res.status(200).send({ message: req.body.name });
  
})
.catch(err => {
  res.status(500).send({ message: err.message });
});
};

exports.updateserviceshtls=(req,res)=>{
  
    highlts.update({
        serviceID:req.body.servicesid,
        cntnt:req.body.content
     
    },{where:{ID:req.body.id}
}).then(rectwrkcatx => {

  res.status(200).send({ message: req.body.serviceID });
  
})
.catch(err => {
  res.status(500).send({ message: err.message });
});
};