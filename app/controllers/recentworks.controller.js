const db=require("../models");
const rectwrkcat=db.rcntwcat;
const recentworks=db.recentworks;
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