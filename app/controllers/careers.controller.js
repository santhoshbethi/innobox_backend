const db=require("../models");
const career=db.career;
const emptlk=db.emptlk;
const careerdesc=db.jbdscr;
var multer  =   require('multer');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now()+ "_" + file.originalname);
}
});

  var upload = multer({ storage : storage}).single('file');
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
  
  
  exports.addcareer=(req,res)=>{
    upload(req,res,function(err) {
    if(err) {
         return res.send(err);
         }   
         if(req.file)
         {
           var fileval=req.file.filename;
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
             };
             career.create(xyz)      
             .then(career => {
              careerdesc.create({
                description:req.body.description,
                  jobId:career.id,
            
              }).then(menu => {
            
                res.send({ message: "Career added successfully" });
              })
                .catch(err => {
                    res.status(500).send({ message: err.message });
                  })
            });
};  
exports.updatecareer=(req,res)=>{
  career.update({status:req.body.status},{where:{ID:req.body.id}
  }).then(showhome => {

    res.status(200).send({ message: showhome });
    
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};