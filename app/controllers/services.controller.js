const db=require("../models");
const services=db.blgs;
const sequelize = db.sequelize;
const highlts=db.hglts;
var multer  =   require('multer');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/services');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now()+ "_" + file.originalname);
}
});

  var upload = multer({ storage : storage}).single('file');
exports.addserviceshtls=(req, res) => {
    highlts.create({
      serviceID:req.body.servicesid,
      cntnt:req.body.content
       
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
        serviceID:req.body.menuid,
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
      serviceID:req.body.menuid,
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

  res.status(200).send({ message: req.body.servicesid });
  
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
  exports.addservicesimage = (req, res) => {
    upload(req,res,function(err) {
      if(err) {
           return res.send(err);
           }   
           if(req.file)
           {
            var fileval='/services/'+req.file.filename;
           }
           else
           {
            var fileval='';
           }
        if(req.body.type=='m')
        {
           var xyz={
          
            image1:fileval,   
           
            
               };
              }
              else if(req.body.type=='i')
              {
                var xyz={
                  image2:fileval,   
                     };
              }
               services.update(xyz,{where:{ID:req.body.id}})   
               .then(menu => {
              
                  res.send({ message: "Slider successfully" });
                })
                  .catch(err => {
                      res.status(500).send({ message: err.message });
                    });
            
  });
  }

  
