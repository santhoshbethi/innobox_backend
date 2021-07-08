const db=require("../models");
const career=db.career;
const emptlk=db.emptlk;
const careerdesc=db.jbdscr;
const jbaptns=db.jbaptns;
var multer  =   require('multer');
const nodemailer = require('nodemailer');

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
           var fileval='/careers/'+req.file.filename;
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
      where: {ID: req.body.id}, 

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
             var fileval='/careers/'+req.file.filename;
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
              
                  res.send({ message: "Career added successfully" });
                })
                  .catch(err => {
                      res.status(500).send({ message: err.message });
                    })
              
  });
  
  }
  
  
exports.apply = (req, res) => {
  upload(req,res,function(err) {
    if(err) {
         return res.send(err);
         }   
         if(req.file)
         {
           var fileval='/careers/apply/'+req.file.filename;
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
              let subject = 'Thank you. We have receieved your request';
              let bodyText = '';
            
            
              var transporter = nodemailer.createTransport({
                  service: 'gmail',
                  host: 'smtp.googlemail.com',
                  port: 465,
                  secure: true,
                  auth: {
                       user: 'innoboxwebmail@gmail.com',
                          pass: "!Bx@2019"
                  }
                  
            
              });
            
            var mailOptions = {
            from: 'website@innobox.com',
            to: req.body.email,
            subject: subject,
            text: bodyText,
            html:"Thank you for reaching us.We have received your application. We will get back to you soon"
            };
            let subject = 'New Application for '+applyingFor;
              let bodyText = '';
            
            
              var transporter = nodemailer.createTransport({
                  service: 'gmail',
                  host: 'smtp.googlemail.com',
                  port: 465,
                  secure: true,
                  auth: {
                       user: 'innoboxwebmail@gmail.com',
                          pass: "!Bx@2019"
                  }
                  
            
              });
            
            var mailOptions = {
            from: 'website@innobox.com',
            to: 'career@innobox.com',
            subject: subject,
            text: bodyText,
            html:fullname+"has applied for job for"+applyingFor
            };
            
              transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                      console.log(error);
                  } else {
                      console.log('Email sent: ' + info.response);
                  }
              });
            
            
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
