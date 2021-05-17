const db=require("../models");
const career=db.career;
const emptlk=db.emptlk;
const careerdesc=db.jbdscr;
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
      


        include: [{
          model: careerdesc,
          where: { jobID: db.Sequelize.col('career.ID') },
          
        }]

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
  
  
exports.addcareer = (req, res) => {
  career.create({
        jobTitle:req.body.title, 
        locationCountry:req.body.location,   
        experience:req.body.experience,   
        opens:req.body.opens,   
        image:req.body.image,   
        status:req.body.status,   

})
.then(career => {
  console.log(career.ID);
  careerdesc.create({
    description:req.body.description,
jobID:career.ID,

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