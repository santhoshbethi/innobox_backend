const db=require('../models');
const Log=db.tbllogs;
const sequelize = db.sequelize;
const calltypes=db.tblcalltypes;
const calllogs=db.tbllogs;
const tickets=db.tblltickets;
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
                           .then(Log => {         
     
                            res.send({ message: "Career added successfully" });
                                        })
                                          .catch(err => {
                                              res.status(500).send({ message: err.message });
                                            });
                                          })
};    


  
 


 exports.getFiles=(req,res)=>{
  sequelize.query("SELECT hsp_tbl_tickets.*,hsp_tbl_call_types.NAME from hsp_tbl_tickets JOIN hsp_tbl_call_types on hsp_tbl_tickets.TICKET_TYPE=hsp_tbl_call_types.ID WHERE hsp_tbl_tickets.TICKET_ID"+req.body.TICKET_ID, { type: sequelize.QueryTypes.SELECT})
  .then(showTicketimage=>{
    sequelize.query("SELECT hsp_tbl_calllogs.*,hsp_tbl_callstatus.STATUS_NAME from hsp_tbl_calllogs JOIN hsp_tbl_callstatus on hsp_tbl_calllogs.ACTION=hsp_tbl_callstatus.STATUS_ID WHERE hsp_tbl_calllogs.TICKET_ID="+req.body.TICKET_ID, { type: sequelize.QueryTypes.SELECT})
    .then(showLogimage=>{
          res.status(200).send({ Ticket: showTicketimage, message: 'success',Logs:showLogimage });
        })      .catch(err => {
          res.status(500).send({ message: err.message });
        });  

      })      .catch(err => {
        res.status(500).send({ message: err.message });
      });
 

 }; 
