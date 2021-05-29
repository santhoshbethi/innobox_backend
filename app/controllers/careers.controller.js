const db=require("../models");
const career=db.career;
const emptlk=db.emptlk;
const careerdesc=db.jbdscr;
const jbaptns=db.jbaptns;
var multer  =   require('multer');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/careers');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now()+ "_" + file.originalname);
}
});

  var upload = multer({ storage : storage}).single('file');


exports.addcareer = (req, res) => {
  upload(req,res,function(err) {
    if(err) {
         return res.send(err);
         }   
         if(req.file)
         {
           var fileval='/careers/'+req.body.id+'-'+req.file.filename;
         }
         else
         {
          var fileval='';
         }
         
         var xyz={
          jobTitle:req.body.title, 
          locationCountry:req.body.location,   
          experience:req.body.experience,   
          opens:req.body.opens,   
          image:fileval,   
          
          description:req.body.description,
             };
             career.create(xyz)      
             .then(menu => {
            
                res.send({ message: "Career added successfully" });
              })
                .catch(err => {
                    res.status(500).send({ message: err.message });
                  })
            
});
}
exports.career= (req, res) => {
    career.findAll({

    }).then(career => {

        res.status(200).send({ message: career });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.careerbyid= (req, res) => {
    career.findOne({
      where: {ID: req.body.id}, include: 'id'

    }).then(career => {

        res.status(200).send({ message: career });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.createemptlk= (req, res) => {
    emptlk.create({
      name:req.body.empname,
      message:req.body.msg,
     
    }).then(emptlk => {

        res.status(200).send({ message: emptlk });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.emptlk= (req, res) => {
    emptlk.findAll({
      
     
    }).then(career => {

        res.status(200).send({ message: career });
        
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  
 


exports.updatecareer = (req, res) => {
  upload(req,res,function(err) {
    if(err) {
         return res.send(err);
         }   
         if(req.file)
         {
           var fileval='/careers/'+req.body.id+'-'+req.file.filename;
         }
         else
         {
          var fileval='';
         }
     
         var xyz={
          jobTitle:req.body.title, 
          locationCountry:req.body.location,   
          experience:req.body.experience,   
          opens:req.body.opens,   
          image:fileval,   
          status:req.body.status, 
          description:req.body.description,
         
          
             };
            
          
             career.update(xyz,{where:{ID:req.body.id}})   
             .then(menu => {
            
                res.send({ message: "Slider successfully" });
              })
                .catch(err => {
                    res.status(500).send({ message: err.message });
                  });
          
});
}
exports.apply = (req, res) => {
  upload(req,res,function(err) {
    if(err) {
         return res.send(err);
         }   
         if(req.file)
         {
           var fileval='/careers/apply/'+req.body.id+'-'+req.file.filename;
         }
         else
         {
          var fileval='';
         }
         
         var xyz={
          fullname:req.body.fullname, 
          email:req.body.email,   
          mobile:req.body.mobile,   
          previousCompany:req.body.previousCompany,   
          resume:fileval,   
          
          applyingFor:req.body.applyingFor,
             };
             jbaptns.create(xyz)      
             .then(menu => {
            
                res.send({ message: "Applied  successfully" });
              })
                .catch(err => {
                    res.status(500).send({ message: err.message });
                  })
            
});
}

exports.applicants= (req, res) => {
  jbaptns.findAll({
    
   
  }).then(career => {

      res.status(200).send({ message: career });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};