const db=require("../models");
const rectwrkcat=db.rcntwcat;
const recentworks=db.recentworks;
var multer  =   require('multer');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/rctwrk');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now()+ "_" + file.originalname);
}
});

  var upload = multer({ storage : storage}).single('file');
exports.abcd= (req, res) => {
  res.status(200).send("first execution.");
};
exports.addrectwrkcat = (req, res) => {
  rectwrkcat.create({
      name:req.body.name,
      status:req.body.status,
})
.then(rectwrkcat => {

  res.send({ message:  req.body.name});
})
  .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.getrectwrkcat= (req, res) => {
  rectwrkcat.findAll({

  }).then(showhome => {

      res.status(200).send({ message: showhome });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.getrecentworks= (req, res) => {
  recentworks.findAll({
    attributes: ['ID', 'homename','image1']

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
    

  }).then(showhome => {

      res.status(200).send({ message: showhome });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.updaterectwrkcat=(req,res)=>{
  
  rectwrkcat.update({name:req.body.name,status:req.body.status},{where:{ID:req.body.id}
}).then(rectwrkcatx => {

  res.status(200).send({ message: req.body.name });
  
})
.catch(err => {
  res.status(500).send({ message: err.message });
});
};

exports.addrecentwroks = (req, res) => {
  upload(req,res,function(err) {
    if(err) {
         return res.send(err);
         }   
         if(req.file)
         {
           var fileval='/rctwrk/'+req.file.filename;
         }
         else
         {
          var fileval='';
         }
         
         var xyz={
          cat_id:req.body.cat_id,
          homename:req.body.homename,
          shdcr:req.body.shdcr,
          title:req.body.title,
          qtxt:req.body.qtxt,
          fdcr:req.body.fdcr,
          image1:fileval,
          whatwegot1:req.body.whatwegot1,
          whatwegot2:req.body.whatwegot2,
          whatwegot3:req.body.whatwegot3,
             };
             recentworks.create(xyz)      
             .then(menu => {
            
                res.send({ message: "recent work added successfully" });
              })
                .catch(err => {
                    res.status(500).send({ message: err.message });
                  })
            
});
}
exports.updaterecentwroks = (req, res) => {
  upload(req,res,function(err) {
    if(err) {
         return res.send(err);
         }   
         if(req.file)
         {
           var fileval='/rctwrk/'+req.file.filename;
         }
         else
         {
          var fileval='';
         }
         
         var xyz={
          cat_id:req.body.cat_id,
          homename:req.body.homename,
          shdcr:req.body.shdcr,
          title:req.body.title,
          qtxt:req.body.qtxt,
          fdcr:req.body.fdcr,
          image1:fileval,
          status:req.body.status,
          whatwegot1:req.body.whatwegot1,
          whatwegot2:req.body.whatwegot2,
          whatwegot3:req.body.whatwegot3,
             };
             recentworks.update(xyz,{where:{ID:req.body.id}})     
             .then(menu => {
            
                res.send({ message: "recent work updated successfully" });
              })
                .catch(err => {
                    res.status(500).send({ message: err.message });
                  })
            
});
}
